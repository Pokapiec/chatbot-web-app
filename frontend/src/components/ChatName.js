import React from 'react';
import { useState } from 'react';

export default function ChatName({ onHideClick }) {

    const [maximized, setMaximized] = useState(false);

    const maximize = () => {
        const chat = document.querySelector('.chat-room');
        const messages = document.querySelector('#messages-place');

        const chatClasses = ['w-10/12', 'md:w-96', 'bottom-2', 'right-2', 'bottom-0', 'right-0', 'w-full', 'rounded-lg', 'h-screen']
        for(const elem of chatClasses) {
            chat.classList.toggle(elem)
        }

        if (messages.classList.contains('h-72')) {
            messages.classList.replace('h-72', 'h-full')
        } else {
            messages.classList.replace('h-full', 'h-72')
        }
        // for(const elem of messagesClasses) {
        //     messages.classList.toggle(elem)
        // }

        if (maximized) setMaximized(false)
        else setMaximized(true)
    }

    return (
        <div className="transition duration-300 ease-in-out flex justify-between border-b border-gray-200 dark:border-gray-900 py-3 px-3">
            <div className="m-0 flex items-center space-x-4">
                <img src="https://cdn.technologyadvice.com/wp-content/uploads/2018/02/friendly-chatbot.jpg" alt="" className="w-10 h-10 rounded-full" />
                <div className="flex flex-col leading-tight">
                    <div className="text-lg mt-1 flex items-center">
                        <span className="text-gray-700 dark:text-gray-200 mr-3">Chatbot</span>
                        <span className="text-green-500">
                            <svg width="10" height="10">
                                <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <button type="button" className="classic-btn text-gray-500 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-green-500 h-10 w-10" onClick={maximize}>
                    {!maximized ?
                    (<svg className="h-6 w-6 fill-stroke" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"></path>  <polyline points="16 4 20 4 20 8"></polyline>  <line x1="14" y1="10" x2="20" y2="4"></line>  <polyline points="8 20 4 20 4 16"></polyline>  <line x1="4" y1="20" x2="10" y2="14"></line></svg>)
                    :
                    (<svg className="h-6 w-6 fill-stroke" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"></path>  <polyline points="5 9 9 9 9 5"></polyline>  <line x1="3" y1="3" x2="9" y2="9"></line>  <polyline points="5 15 9 15 9 19"></polyline>  <line x1="3" y1="21" x2="9" y2="15"></line>  <polyline points="19 9 15 9 15 5"></polyline>  <line x1="15" y1="9" x2="21" y2="3"></line>  <polyline points="19 15 15 15 15 19"></polyline>  <line x1="15" y1="15" x2="21" y2="21"></line></svg>)
                    }
                    
                </button>

                

                <button type="button" className="classic-btn text-gray-500 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-green-500 h-10 w-10" onClick={onHideClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>


            </div>
        </div>
    );
}



