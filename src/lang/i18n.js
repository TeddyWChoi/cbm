import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import langEn from './lang.en.json';
import langTr from './lang.tr.json';

i18n.use(initReactI18next) // 리액트에 i18next를 연결합니다.
    .init({
        resources: {
            en: {
                translation: langEn,
            },
            tr: {
                translation: langTr,
            },
        },
        lng: 'en', // 기본 언어 설정
        fallbackLng: 'en', // 언어가 지원되지 않을 때의 대체 언어 설정
        interpolation: {
            escapeValue: false, // 리액트는 HTML 태그도 렌더링할 수 있어서 false로 설정합니다.
        },
    });

export default i18n;
