// @flow
import React, { Component } from 'react';
import styles from './ServerList.css';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class ServerList extends Component {
  render() {
    return (
      <div className={styles.container} data-tid='container'>
        <p className={styles.subheader}>Servers</p>
        <br />
        <ul className={styles.list}>
          <li><Avatar>A</Avatar></li>
          <br />
          <li><Avatar>B</Avatar></li>
          <br />
          <li><Avatar>C</Avatar></li>
        </ul>
      </div>
    );
  }
}
