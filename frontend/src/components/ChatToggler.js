import React from 'react';
import PropTypes from 'prop-types';


export default function ChatToggler({ onHideClick }) {
    
    return (
        <div className="select-none">
            <button type="button" className="group chat-toggler classic-btn bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-500 h-12 w-12 fixed bottom-10 right-10 z-1 " onClick={onHideClick}>
                <span className="p-1 rounded border border-gray-200 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 shadow-lg ml-4 text-sm w-20 absolute bottom-14 transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out">Chat a bit</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:animate-wiggle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>

            </button>
        </div>

    )
}


ChatToggler.propTypes = {
    onHideClick: PropTypes.func
}