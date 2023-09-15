import React, { Component } from 'react';
import {NotificationContainer, Message} from './Notification.styles';
import PropTypes from 'prop-types';

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

  Notification.propTypes = {
    message: PropTypes.string,
  };
  
  export default Notification;