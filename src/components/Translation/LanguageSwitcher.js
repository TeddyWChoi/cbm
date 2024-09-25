import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <ul>
            <li>
                <button onClick={() => changeLanguage('en')}>English</button>
            </li>
            <li>
                <button onClick={() => changeLanguage('tr')}>Turkish</button>
            </li>
        </ul>
    );
}

export default LanguageSwitcher;
