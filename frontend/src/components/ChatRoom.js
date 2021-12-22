import React from 'react';
import { LanguageContext, TextContext } from './context/Contexts';
import { useState, useContext, useEffect } from 'react';
import Message from './Message';
import ChatName from './ChatName';
import ChatInput from './ChatInput';
import axios from 'axios';
import PropTypes from 'prop-types';


export default function ChatRoom({ onHideClick, casualQuery }) {

  const { language } = useContext(LanguageContext)
  const { textId } = useContext(TextContext)

  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (language === "EN") {
      setMessages([[1, "Hey i'm your personal Chatbot, how can i help?", "left"]].reverse())
    } else {
      setMessages([[1, "Hej! Jestem twoim personalnym Chatbotem, jak mogę pomóc?", "left"]].reverse())
    }
    return
  }, [language, casualQuery]);

  const [userMessage, setUserMessage] = useState("")


  const getAnswer = async () => {

    let url = `/resp/get?message=${userMessage}&lang=${language}`
    // let url = `http://127.0.0.1:5000/response?message=${userMessage}&lang=${language}`
    if (casualQuery) url += casualQuery
    else url += `&textid=${textId}`
    // console.log(url)

    const resp = await axios.get(url);
    // const resp = await axios.get(`https://chatbot-models-app.herokuapp.com/response?message=${userMessage}`);
    const answer = resp.data
    // console.log(answer)
    const botAnswer = answer.answer
    if (botAnswer === 'failed') return false
    return botAnswer
  }

  const addBotMessage = async (newMessages) => {
    const ids2 = newMessages.map(elem => {
      return elem[0]
    })
    const oldMessages = newMessages
    const loadMessages = [[Math.max(...ids2) + 1, <div className='dot-falling mx-1 my-1'></div>, "left"]].concat(newMessages)
    setMessages(loadMessages)
    const response = await getAnswer()
    if (response) {
      const newerMessages = [[Math.max(...ids2) + 1, response, "left"]].concat(newMessages)
      setMessages(newerMessages)
    } else {
      // let filteredLoading = oldMessages.filter(item => {
      //   item[1] != <div className='dot-falling mx-1 my-1'></div>
      // });
      setMessages(oldMessages)
    }
  }

  const addMessage = async () => {
    if (!userMessage) return
    const ids = messages.map(elem => {
      return elem[0]
    })
    const newMessages = [[Math.max(...ids) + 1, userMessage, "right"]].concat(messages)
    setMessages(newMessages)
    // console.log(messages)
    setUserMessage("")
    addBotMessage(newMessages)
  }

  const updateInput = (e) => {
    setUserMessage(e.target.value)
    // console.log(userMessage)
  }

  const onEnterClick = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addMessage()
    }
  }


  return (
    <div className="chat-room m-0 w-10/12 md:w-128 border-2 rounded-lg fixed bottom-2 right-2 bg-white dark:bg-gray-700 dark:text-gray-100 dark:border-gray-800 transform scale-0 transition-all duration-300 ease-in-out shadow-lg z-40">
      <div id="messages" className="flex-1 p:2 justify-between flex flex-col h-full">
        {casualQuery
          ?
          <ChatName onHideClick={onHideClick} modeEn={`Mode: casual talk`} modePl={`Tryb: swobodna rozmowa`}/>
          :
          <ChatName onHideClick={onHideClick} modeEn={`Mode: q&a, Text: ${textId}`} modePl={`Tryb: q&a, Tekst: ${textId}`}/>
        }
        <div id="messages-place" className="h-72 flex content-end flex-col-reverse space-y-4 space-y-reverse p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
          {messages.map((msg) => {
            return (
              <Message key={msg[0]} msg={msg[1]} side={msg[2]} />
            )
          })}
        </div>
        <ChatInput userMessage={userMessage} updateInput={updateInput} onEnterClick={onEnterClick} addMessage={addMessage} setMessages={setMessages} />
      </div>

    </div>
  );

}


ChatRoom.propTypes = {
  casualQuery: PropTypes.string, 
  onHideClick: PropTypes.func
}