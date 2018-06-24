import React from 'react';
import PropTypes from 'prop-types';

import InputMessageBox from '~/containers/InputMessageContainer';
// import { message } from '~/store/reducer';

const Chat = ({ message, userName }) => (
  <div className="chatBox">
    <div>
      { message.map(currentMessage => (
        <p key={currentMessage} >{userName}: { currentMessage }</p>
      )) }
    </div>
    <InputMessageBox />
  </div>
);

Chat.propTypes = {
  message: PropTypes.array.isRequired,
  userName: PropTypes.string.isRequired,
};

export default Chat;
