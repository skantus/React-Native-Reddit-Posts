import React, { Component } from "react";
import { View, WebView } from "react-native";

export class WebViewUrl extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView source={{ uri: this.props.link }} style={{ flex: 1 }} />
      </View>
    );
  }
}
