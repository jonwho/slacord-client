// @flow
import React, { Component } from 'react';
import styles from './Server.css';
import ServerList from './ServerList';
import ChannelList from './ChannelList';
import MainContent from './MainContent';

export default class Server extends Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <ServerList />
        <ChannelList />
        <MainContent />
      </div>
    );
  }
}
