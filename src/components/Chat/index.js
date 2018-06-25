import React from 'react';
import PropTypes from 'prop-types';

import InputMessageBox from '~/containers/InputMessageContainer';
// import { message } from '~/store/reducer';

const Chat = ({ message }) => (
  <div className="chatBox">
    <div>
      { message.map(currentMessage => (
        <p key={currentMessage.id} >{currentMessage.userName}: { currentMessage.input }</p>
      )) }
    </div>
    <InputMessageBox />
  </div>
);

Chat.propTypes = {
  message: PropTypes.array.isRequired,
};

export default Chat;
