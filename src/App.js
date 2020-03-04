import React from 'react';
import './App.css';
import "./i18n";
import {useTranslation} from "react-i18next";
import ReactFlagsSelect from 'react-flags-select';

import 'react-flags-select/css/react-flags-select.css';
import 'react-flags-select/scss/react-flags-select.scss';


function App() {

    const {t, i18n} = useTranslation();

    const changeLanguage = (countryCode) => {
        countryCode = countryCode === "GB"?"EN":countryCode;
        i18n.changeLanguage(countryCode)
    };

    const defaultLanguage = i18n.language === "GB"?"EN":i18n.language;

    return (
        <div className="App">
            <div className="flags">
                <ReactFlagsSelect
                    defaultCountry={defaultLanguage}
                    onSelect={changeLanguage}
                    countries={["GB", "PT", "FR"]}/>
            </div>
            <header className="App-header">
                <div className="container">
                    <img src="logo2.png" className="App-logo animated pulse infinite slow" alt="logo"/>
                    <h1>
                        {t('home.title')}
                    </h1>
                    <p>{t('home.description')}</p>
                </div>
            </header>

        </div>
    );
}

export default App;
