import React from 'react';

export default function SidebarToggler({ onHideClick }) {
    return (

        <button type="button" className="sidebar-toggler classic-btn bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-500 h-12 w-12 fixed top-5 left-5 transition duration-300 ease-in-out " onClick={onHideClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
        </button>
    )
}