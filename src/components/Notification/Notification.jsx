import React, { Component } from 'react';
import {NotificationContainer, Message} from './Notification.styles';

class Notification extends Component {
    render() {
      const { message } = this.props;
  
      return (
        <NotificationContainer>
          <Message>{message}</Message>
        </NotificationContainer>
      );
    }
  }
  
  export default Notification;