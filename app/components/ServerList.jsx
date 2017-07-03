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
        <List>
          <Subheader>Servers</Subheader>
          <ListItem
            leftAvatar={<Avatar>A</Avatar>}
          />
          <ListItem
            leftAvatar={<Avatar>B</Avatar>}
          />
          <ListItem
            leftAvatar={<Avatar>C</Avatar>}
          />
          <Divider />
        </List>
      </div>
    );
  }
}
