import React, { Component } from "react";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import { ListItem, Thumbnail } from "native-base";
import { styles } from "../../styles/index";

export class PostItem extends Component {
  goToWebViewUrl = url => Actions.webviewurl({ link: url });

  render() {
    const {
      url,
      source: { uri },
      created,
      title,
      author,
      score,
      num_comments
    } = this.props;

    return (
      <View>
        <ListItem onPress={() => this.goToWebViewUrl(url)}>
          <Thumbnail square style={styles.thumbnail} source={{ uri: uri }} />

          <View style={styles.itemBox}>
            <View style={styles.createdBox}>
              <Text style={styles.dateBox}>{created}</Text>
            </View>

            <View style={styles.titleBox}>
              <Text style={styles.textBox}>{title}</Text>
            </View>

            <View style={styles.headerBox}>
              <View>
                <Text style={styles.authorBox}>@{author}</Text>
              </View>

              <View>
                <Text style={styles.authorBox}>{score}</Text>
              </View>

              <View>
                <Text style={styles.authorBox}>{num_comments}</Text>
              </View>
            </View>
          </View>
        </ListItem>
      </View>
    );
  }
}
