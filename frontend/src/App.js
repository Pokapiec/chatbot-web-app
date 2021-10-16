import ChatView from './components/ChatRoom';
import ChatToggler from './components/ChatToggler';
import { useState } from 'react';
import './App.css';

function App() {
  const [hiddenChat, sethiddenChat] = useState(false)

  const onHideClick = () => {
    if (hiddenChat === true) {
      sethiddenChat(false)
    } else {
      sethiddenChat(true)
    }
  }

  return (
    <div className="m-0">
      { hiddenChat === false ? <ChatView onHideClick={onHideClick} /> : <ChatToggler onHideClick={onHideClick}/> }
      
    </div>
  );
}

export default App;