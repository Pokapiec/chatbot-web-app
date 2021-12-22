import React from 'react';
import PropTypes from 'prop-types';

export default function SidebarToggler({ onHideClick }) {
    return (

        <button type="button" className="group sidebar-toggler classic-btn bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-500 h-12 w-12 fixed top-5 left-5 transition duration-300 ease-in-out select-none" onClick={onHideClick} >
            <span className="p-1 rounded border border-gray-200 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 shadow-lg ml-4 text-sm w-36 absolute left-10 transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out">See chatbot options</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:animate-wiggle h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
        </button>
    )
}

SidebarToggler.propTypes = {
    onHideClick: PropTypes.func
}