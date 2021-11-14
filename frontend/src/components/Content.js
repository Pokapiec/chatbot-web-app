import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { LanguageContext, TextContext } from './context/Contexts';

import axios from 'axios';

export default function Content() {

    const { language, setlanguage } = useContext(LanguageContext)
    const { settextId } = useContext(TextContext)

    const [dark, setdark] = useState(false);
    const [texts, settexts] = useState([]);

    const triggerDarkMode = () => {
        const html = document.querySelector("html");
        html.classList.toggle("dark");

        if (html.classList.contains('dark')) {
            setdark(true)
            localStorage.setItem('dark', true)
        } else {
            setdark(false)
            localStorage.setItem('dark', false)
        }
    }

    const changeLanguageLoad = () => {
        const langTrigger = document.querySelector('#lang')
        console.log(langTrigger)
        langTrigger.textContent = "EN"
        setlanguage("PL")

    }

    const changeLanguage = (e) => {
        if (e.currentTarget.textContent === 'PL') {
            e.currentTarget.textContent = "EN"
            setlanguage("PL")
            localStorage.setItem('lang', 'PL')
        } else {
            e.currentTarget.textContent = "PL"
            setlanguage("EN")
            localStorage.setItem('lang', 'EN')
        }
    }

    useEffect(() => {
        const darkMode = localStorage.getItem('dark')
        const lang = localStorage.getItem('lang')

        console.log(lang, darkMode)
        console.log(typeof(darkMode))

        if(lang === "PL") changeLanguageLoad()
        if(darkMode === "true") triggerDarkMode()

        const getData = async () => {
            await axios.get('http://127.0.0.1:5000/texts')
            .then(response => {
                const texts = response.data
                settexts(texts.texts)
                console.log(texts)
            })
            .catch(error => console.log("Hey"))
            console.log(texts)
        }
        getData()
        return
    }, []);

    return (
        <div className="content-site flex flex-col flex-wrap content-center dark:bg-gray-800 dark:text-gray-200 relative min-h-screen">

            <button type="button" className="classic-btn  dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-500 h-12 w-12 z-1 transition duration-300 ease-in-out absolute top-5 right-5" onClick={triggerDarkMode}>
                {
                    dark
                        ?
                        (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>)
                        :
                        (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>)

                }

            </button>

            <button id="lang" type="button" className="classic-btn  dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-500 h-12 w-12 z-1 transition duration-300 ease-in-out absolute top-5 right-20" onClick={changeLanguage}>
                PL
            </button>

            <div className="text-center text-2xl m-5 mb-16 col-span-3 mt-24 md:mt-10">
                {language === "EN" ? "Warsaw institute of technology information" : "Informacje o Politechnice Warszawskiej"}
            </div>
            {texts.length > 0
                ?
                (texts.map((item) => (
                    <div className="content-container max-w-6xl border-2" onClick={(e) => { settextId(item.id) }} key={item.id}>

                        <h2 className="text-left font-bold border-b-2 border-gray-300 pb-4">
                            {language === "EN" ? item.title_en : item.title_pl}
                        </h2>

                        <div className="QA-text mt-5">{language === "EN" ? item.text_en : item.text_pl}
                        </div>
                    </div>
                )))
                :
                (<div className="content-container max-w-6xl border-2 w-9/12" key="1">

                    <h2 className="text-left font-bold border-b-2 border-gray-300 pb-4">
                        
                        {language === "EN" ? "There has been a problem" : "Wystąpił problem"}
                    </h2>

                    <div className="QA-text mt-5">
                        
                        {language === "EN" ? "No article avilable right now" : "Nie znaleziono żadnego artykułu"}
                        
                    </div>
                </div>)
            }

        </div>
    );
}



