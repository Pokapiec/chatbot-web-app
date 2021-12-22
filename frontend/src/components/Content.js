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
import PropTypes from 'prop-types';


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
            if (!text.classList.contains('h-10') && text !== textElem) {
                text.classList.toggle('h-10')
                text.classList.toggle('h-80')
                text.classList.toggle('overflow-auto')
                text.classList.toggle('overflow-hidden')
                text.nextElementSibling.classList.toggle('invisible')
            }
        }
        textElem.classList.toggle('h-10')
        textElem.classList.toggle('h-80')
        textElem.classList.toggle('overflow-auto')
        textElem.classList.toggle('overflow-hidden')
        textElem.nextElementSibling.classList.toggle('invisible')

    }

    useEffect(() => {
        const darkMode = localStorage.getItem('dark')
        const lang = localStorage.getItem('lang')

        if (lang === "PL") setlanguage("PL")
        if (darkMode === "true") triggerDarkMode()

        const getData = async () => {
            await axios.get('/api/texts')
                .then(response => {
                    const texts = response.data
                    settexts(texts.texts)
                })
                .catch(error => console.log(error))
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
                    <Route path='/about'>
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


Content.propTypes = {
    choseMode: PropTypes.func, 
    onClickHideSidebar: PropTypes.func
}