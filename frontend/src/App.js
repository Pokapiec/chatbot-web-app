import ChatView from './components/ChatRoom';
import ChatToggler from './components/ChatToggler';
import Content from './components/Content';
import SidebarToggler from './components/SidebarToggler';
import Sidebar from './components/Sidebar';
// import { useState } from 'react';
import './App.css';

function App() {
  const onClickHideChat = () => {
    const sidebar = document.querySelector('.chat-room')
    const toggler = document.querySelector(".chat-toggler")
    const content = document.querySelector(".content-site")

    sidebar.classList.toggle("scale-100");
    sidebar.classList.toggle("scale-0");
    toggler.classList.toggle("bottom-10")
    toggler.classList.toggle("-bottom-10")
    toggler.classList.toggle("right-10")
    toggler.classList.toggle("-right-10")
    content.classList.toggle("filter")
    content.classList.toggle("blur-sm")
  }

  const onClickHideSidebar = () => {
    // if (hiddenSidebar === true) {
    //   sethiddenSidebar(false)
    // } else {
    //   sethiddenSidebar(true)
    // }
    const sidebar = document.querySelector('.sidebar')
    const toggler = document.querySelector(".sidebar-toggler")

    sidebar.classList.toggle("-translate-x-full");

  }

  return (
    <div className="m-0">
      <Content />

      <Sidebar onHideClick={onClickHideSidebar} /> 
      <SidebarToggler onHideClick={onClickHideSidebar}/>

      <ChatView onHideClick={onClickHideChat} />
      <ChatToggler onHideClick={onClickHideChat}/>
      
    </div>
  );
}

export default App;