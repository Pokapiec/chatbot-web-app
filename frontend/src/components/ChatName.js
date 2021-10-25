import React from 'react';

export default function ChatName({ onHideClick }) {

    return (
        <div className="flex justify-between border-b border-gray-200 dark:border-gray-900 py-3 px-3">
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

                <button type="button" className="classic-btn text-gray-500 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-green-500 h-10 w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" onClick={onHideClick}>
                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}



