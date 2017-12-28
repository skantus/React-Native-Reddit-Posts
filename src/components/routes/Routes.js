import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {Posts, WebViewUrl} from '../index';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
            <Scene key='posts' component={Posts} title='Posts' initial={true} />
            <Scene key='webviewurl' component={WebViewUrl} title='WebView' />
        </Scene>
      </Router>
    );
  }
}
