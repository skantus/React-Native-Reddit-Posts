import React, {Component} from 'react';
import {View,
        FlatList,
        ActivityIndicator,
        RefreshControl} from 'react-native';
import {PostItem} from './post-item';
import {styles} from '../../styles/index';

export class Posts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isFetching: false,
      _data: null,
    };
  }

  // Fetch data from request url.
  fetchData() {
    return fetch('https://api.reddit.com/r/pics/new.json')
    .then((response) => response.json())
    .then((responseJson) => {
      const data = responseJson.data.children;
      this.setState({
        isLoading: false,
        isFetching: false,
        _data: data
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  // On Refresh.
  _onRefresh() {
    this.setState({isFetching: true});
    this.fetchData().then(() => {
      this.setState({isFetching: false});
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if(this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <FlatList
        style={styles.containerPost}
        data={this.state._data}
        keyExtractor={(item, index) => index}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isFetching}
            onRefresh={this._onRefresh.bind(this)}
            title='Pull to refresh'
            tintColor='skyblue'
            titleColor='skyblue'
          />
        }
        renderItem={({item: rowData}) => {
          return (
            <PostItem
              id={rowData.data.id}
              source={{uri: rowData.data.thumbnail}}
              created={rowData.data.created}
              title={rowData.data.title}
              author={rowData.data.author}
              score={rowData.data.score}
              num_comments={rowData.data.num_comments}
              url={rowData.data.url}
            />
          );
        }}
      />
    );
  }
}
