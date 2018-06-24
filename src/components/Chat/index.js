import React from 'react';
import PropTypes from 'prop-types';

import InputMessageBox from '~/containers/InputMessageContainer';
// import { message } from '~/store/reducer';

const Chat = ({ message }) => (
  <div className="chatBox">
    <div>
      Marc: Hello World
      { message }
    </div>
    <InputMessageBox />
  </div>
);

Chat.propTypes = {
  message: PropTypes.string,
};

Chat.defaultProps = {
  message: '',
};

export default Chat;
