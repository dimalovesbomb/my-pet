import React from "react";
import { LANGS } from '../store/locale';

interface ChooseLangProps {
    lang: LANGS;
    changeLanguage: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ChooseLang: React.FC<ChooseLangProps> = ({ lang, changeLanguage }) => {
    return (
        <div className="header_language-buttons">
            <button
                className="header_language-buttons_button"
                onClick={changeLanguage}
                data-active={lang === LANGS.en}
                data-lang={LANGS.en}
            >
                English
            </button>
            <button
                className="header_language-buttons_button"
                onClick={changeLanguage}
                data-active={lang === LANGS.ru}
                data-lang={LANGS.ru}
            >
                Русский
            </button>
        </div>
    );
}