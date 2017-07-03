// @flow
import React, { Component } from 'react';
import styles from './MainContent.css';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

export default class MainContent extends Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <List>
          <Subheader>Messages</Subheader>
          <ListItem leftAvatar={<Avatar>A</Avatar>}>
            MessageA
          </ListItem>
          <Divider />
          <ListItem leftAvatar={<Avatar>B</Avatar>}>
            MessageB
          </ListItem>
          <Divider />
          <ListItem leftAvatar={<Avatar>C</Avatar>}>
            MessageC
          </ListItem>
        </List>
      </div>
    );
  }
}
