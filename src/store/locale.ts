import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum LANGS {
    en = 'en',
    ru = 'ru',
}

export const locale = createSlice({
    name: 'locale',
    initialState: {
        lang: LANGS.en
    },
    reducers: {
        changeLang(state, action: PayloadAction<LANGS>) {
            state.lang = action.payload;
        }
    }
});

export const { changeLang } = locale.actions;