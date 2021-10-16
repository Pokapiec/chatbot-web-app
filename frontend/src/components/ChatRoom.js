import React from 'react';
import { useState } from 'react';
import Message from './Message';
import ChatName from './ChatName';
import ChatInput from './ChatInput';
import axios from 'axios';


export default function ChatView({ onHideClick }) {

  function getCookie(name) {
    let cookieValue = null;

    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();

            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));

                break;
            }
        }
    }
    return cookieValue;
  }

  const [messages, setMessages] = useState([[1, 'Hey', "left"], [2, "Hi!", "right"], [3, "How are you ?", "left"], [4, 'Good thanks!', "right"]].reverse())
  const [userMessage, setUserMessage] = useState("")

  

  const getAnswer = async () => {
    // axios.defaults.xsrfHeaderName = "X-CSRFToken";
    let token = document.head.querySelector('meta[name="csrf-token"]');
    // axios.defaults.headers.post['X-CSRFToken'] = getCookie('csrftoken');
    // let csrftoken = getCookie('csrftoken');
    let data = new FormData(); // 2
    data.append("message", userMessage)  
    // data.append("csrfmiddlewaretoken", '{{csrf_token}}')
    let headers = new Headers();
    // headers.append('X-CSRFToken', csrftoken);
    // const jsonData = JSON.stringify({message: userMessage});
    // const resp = await axios.post('http://127.0.0.1:8000/get-response', data);
    const resp = await axios.get(`http://127.0.0.1:5000/get-response/?message=${userMessage}`);
    const answer = resp.data
    console.log(answer)
    const botAnswer = answer.answer
    if(botAnswer === 'failed'){
      return false
    }
    return botAnswer
  }

  const addBotMessage = async (newMessages) => {
    const ids2 = newMessages.map(elem => {
      return elem[0]
    })
    const response = await getAnswer()
    if (response){
      const newerMessages = [[Math.max(...ids2)+1, response, "left"]].concat(newMessages)
      setMessages(newerMessages)
    }
  }

  const addMessage = async () => {
    const ids = messages.map(elem => {
      return elem[0]
    })
    const newMessages = [[Math.max(...ids)+1, userMessage, "right"]].concat(messages)
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
    <div className="m-0 w-96 border rounded-lg fixed bottom-2 right-2" >
      <div className="flex-1 p:2 justify-between flex flex-col h-full">
        <ChatName onHideClick={onHideClick}/>
        <div id="messages" className="h-72 flex content-end flex-col-reverse space-y-4 space-y-reverse p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
          {messages.map((msg) => {
            return (
              <Message key={msg[0]} msg={msg[1]} side={msg[2]} />
            )
          })}
        </div>
        <ChatInput userMessage={userMessage} updateInput={updateInput} onEnterClick={onEnterClick} addMessage={addMessage}/>
      </div>

    </div>
  );

}
