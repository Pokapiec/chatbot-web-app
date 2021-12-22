import React from 'react';
import { LanguageContext } from './context/Contexts';
import { useContext } from 'react';
import PropTypes from 'prop-types';


export default function ChatInput({ userMessage, updateInput, onEnterClick, addMessage, setMessages }) {

    const { language } = useContext(LanguageContext)

    const clearChatArea = () => {
        if (language === "EN") {
            setMessages([[1, "Hey i'm your personal Chatbot, how can i help?", "left"]].reverse())
        } else {
            setMessages([[1, "Hej! Jestem twoim personalnym Chatbotem, jak mogę pomóc?", "left"]].reverse())
        }
    }

    return (
        <div className="border-t border-gray-200 dark:border-gray-900 px-4 pt-4 mb-5 sm:mb-3 text-2lg">
            <div className="relative flex">
                <span className="absolute inset-y-0 flex items-center">
                    <button type="button" className="classic-btn text-gray-500 dark:text-gray-200 dark:hover:text-gray-800 hover:bg-gray-300  dark:hover:bg-gray-400 h-12 w-12 " onClick={clearChatArea}>
                        <svg className="h-6 w-6 text-gray-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                    </button>
                </span>
                <input type="text" placeholder={language === "EN" ? "Write Something" : "Napisz coś"} className="w-full border-none focus:outline-none focus:placeholder-gray-400 text-gray-600 dark:text-gray-200 placeholder-gray-600 dark:placeholder-gray-300 pl-12 bg-gray-200 dark:bg-gray-600 rounded-full py-3 "
                    value={userMessage} onChange={updateInput} onKeyDown={onEnterClick} />
                <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                    <button onClick={addMessage} type="button" className="classic-btn text-white bg-blue-500 hover:bg-blue-400 h-12 w-12">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 transform rotate-90">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

ChatInput.propTypes = {
    userMessage: PropTypes.string, 
    updateInput: PropTypes.func, 
    onEnterClick: PropTypes.func, 
    addMessage: PropTypes.func, 
    setMessages: PropTypes.func
}