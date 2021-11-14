import { useState } from 'react';
import ChatRoom from './components/ChatRoom';
import ChatToggler from './components/ChatToggler';
import Content from './components/Content';
import SidebarToggler from './components/SidebarToggler';
import Sidebar from './components/Sidebar';
import React from 'react';
import { LanguageContext, TextContext } from './components/context/Contexts';
import './App.css';



function App() {

  const [casualQuery, setcasualQuery] = useState("")
  const [language, setlanguage] = useState("EN");
  const [textId, settextId] = useState(1);

  const onClickHideChat = () => {
    const sidebar = document.querySelector('.sidebar')
    if (!sidebar.classList.contains('-translate-x-full')) onClickHideSidebar()

    const chat = document.querySelector('.chat-room')
    const toggler = document.querySelector(".chat-toggler")
    const content = document.querySelector(".content-site")

    chat.classList.toggle("scale-100");
    chat.classList.toggle("scale-0");
    toggler.classList.toggle("bottom-10")
    toggler.classList.toggle("-bottom-10")
    toggler.classList.toggle("right-10")
    toggler.classList.toggle("-right-10")
    content.classList.toggle("filter")
    content.classList.toggle("blur-sm")
  }

  const onClickHideSidebar = () => {
    const chat = document.querySelector('.chat-room')
    if (chat.classList.contains('scale-100')) onClickHideChat()

    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle("-translate-x-full");
  }

  const choseMode = (query) => {
    setcasualQuery(query)
    onClickHideSidebar()
    onClickHideChat()

  }

  return (
    <div className="m-0">
      <TextContext.Provider value={{ textId, settextId }}>
        <LanguageContext.Provider value={{ language, setlanguage }}>
          <Content  />

          <Sidebar choseMode={choseMode} onHideClick={onClickHideSidebar} />

          <ChatRoom casualQuery={casualQuery} onHideClick={onClickHideChat} />

        </LanguageContext.Provider>
        <SidebarToggler onHideClick={onClickHideSidebar} />
        <ChatToggler onHideClick={onClickHideChat} />
      </TextContext.Provider>

    </div>
  );
}

export default App;