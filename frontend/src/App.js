import ChatView from './components/ChatRoom';
import ChatToggler from './components/ChatToggler';
import Content from './components/Content';
import SidebarToggler from './components/SidebarToggler';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import './App.css';

function App() {
  const [hiddenChat, sethiddenChat] = useState(false)
  const [hiddenSidebar, sethiddenSidebar] = useState(true)

  const onClickHideChat = () => {
    if (hiddenChat === true) {
      sethiddenChat(false)
    } else {
      sethiddenChat(true)
    }
  }

  const onClickHideSidebar = () => {
    if (hiddenSidebar === true) {
      sethiddenSidebar(false)
    } else {
      sethiddenSidebar(true)
    }
  }

  return (
    <div className="m-0">
      <Content />

      { hiddenSidebar === false ? <Sidebar onHideClick={onClickHideSidebar} /> : <SidebarToggler onHideClick={onClickHideSidebar}/> }

      { hiddenChat === false ? <ChatView onHideClick={onClickHideChat} /> : <ChatToggler onHideClick={onClickHideChat}/> }
      
    </div>
  );
}

export default App;