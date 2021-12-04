import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { LanguageContext, TextContext } from './context/Contexts';
import ContentTexts from './ContentTexts';
import ContentHeader from './ContentHeader';
import Sidebar from './Sidebar';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import Footer from './Footer';


export default function Content({ choseMode, onClickHideSidebar }) {

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
        // console.log(e.currentTarget.textContent)
        if (language === 'EN') {
            // e.currentTarget.textContent = "EN"
            setlanguage("PL")
            localStorage.setItem('lang', 'PL')
        } else {
            // e.currentTarget.textContent = "PL"
            setlanguage("EN")
            localStorage.setItem('lang', 'EN')
        }
    }

    const setAndUnfoldText = (item, e) => {
        console.log(item.id)
        settextId(item.id)
        const textElem = e.currentTarget.children[1]
        const allTexts = document.querySelectorAll('.QA-text')

        for (const text of allTexts) {
            if (!text.classList.contains('h-0') && text !== textElem) {
                text.classList.toggle('h-0')
                text.classList.toggle('h-80')
            }
        }

        textElem.classList.toggle('h-0')
        textElem.classList.toggle('h-80')

    }

    useEffect(() => {
        const darkMode = localStorage.getItem('dark')
        const lang = localStorage.getItem('lang')

        console.log(lang, darkMode)
        console.log(typeof (darkMode))

        if (lang === "PL") changeLanguageLoad()
        if (darkMode === "true") triggerDarkMode()

        const getData = async () => {
            await axios.get('/api/texts')
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

    const headerProps = {
        triggerDarkMode: triggerDarkMode,
        language: language,
        dark: dark,
        changeLanguage: changeLanguage
    }

    return (
        <main className="content-site flex flex-col flex-wrap content-center dark:bg-gray-800 dark:text-gray-200 relative min-h-screen">

            <Router>
                <Sidebar choseMode={choseMode} onHideClick={onClickHideSidebar} />
                <Switch>
                    <Route path='/' exact>
                        <>
                            <ContentHeader title={language === "EN" ? "Warsaw institute of technology information" : "Informacje o Politechnice Warszawskiej"} {...headerProps} />
                            <ContentTexts texts={texts} language={language} setAndUnfoldText={setAndUnfoldText} />
                            <Footer />
                        </>
                    </Route>
                    <Route path='/about' exact>
                        <>
                            <ContentHeader title={language === "EN" ? "Research results" : "Wyniki badań"} {...headerProps} />
                            <About dark={dark} language={language}/>
                            <Footer />
                        </>
                    </Route>
                </Switch>
            </Router>
        </main>
    );
}



