import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {ListItem, Thumbnail} from 'native-base';
import {styles} from '../../styles/index';

export class PostItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const goToWebViewUrl = () => Actions.webviewurl({link: this.props.url});

    return (
      <View>
        <ListItem onPress={goToWebViewUrl}>
          <Thumbnail square style={styles.thumbnail} source={{uri: this.props.source.uri}}/>

          <View style={styles.itemBox}>

            <View style={styles.createdBox}>
              <Text style={styles.dateBox}>{this.props.created}</Text>
            </View>

            <View style={styles.titleBox}>
              <Text style={styles.textBox}>{this.props.title}</Text>
            </View>

            <View style={styles.headerBox}>
              <View>
                <Text style={styles.authorBox}>
                  @{this.props.author}
                </Text>
              </View>

              <View>
                <Text style={styles.authorBox}>
                  {this.props.score}
                </Text>
              </View>

              <View>
                <Text style={styles.authorBox}>
                  {this.props.num_comments}
                </Text>
              </View>

            </View>

          </View>
        </ListItem>
      </View>
    );
  }
}
