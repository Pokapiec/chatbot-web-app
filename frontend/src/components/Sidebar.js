import React from 'react';
import { useContext } from 'react';
import { LanguageContext } from './context/Contexts';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


export default function Sidebar({ choseMode, onHideClick }) {

    const { language } = useContext(LanguageContext)

    return (
        <nav className="sidebar bg-gray-200 dark:bg-gray-700 h-full w-56 fixed  inset-y-0 left-0 transform -translate-x-full transition duration-300 ease-out z-40 ">
            <button type="button" className="absolute top-0 left-0 classic-btn bg-gray-300 dark:bg-gray-600 dark:hover:bg-green-600 dark:text-gray-300 text-gray-500 hover:bg-green-200 h-12 w-12 ml-5 mt-5 mb-10" onClick={onHideClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
            </button>
            <div className="mx-auto mt-28 flex flex-col flex-wrap content-center w-10/12">
                <Link to='/'>
                    <button className="sidebar-elem" onClick={onHideClick}>{language === "EN" ? "Home" : "Strona główna"}</button>
                </Link>
                <Link to='/'>
                    <button className="sidebar-elem" onClick={() => { choseMode("&casual=true") }}>{language === "EN" ? "Casual conversation" : "Smalltalk z chatbotem"}</button>
                </Link>
                <Link to='/'>
                    <button className="sidebar-elem" onClick={() => { choseMode("") }}>{language === "EN" ? "Politechnics Chatbot" : "Odpowiadanie na pytania"}</button>
                </Link>
                <Link to='/about' onClick={onHideClick}>
                    <button className="sidebar-elem">{language === "EN" ? "About" : "Detale"}</button>
                </Link>
            </div>
        </nav>

    )
}

Sidebar.propTypes = {
    choseMode: PropTypes.func, 
    onHideClick: PropTypes.func
}