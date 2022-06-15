import React from 'react';
import { NotFound } from './main_content/404/404';
import { CustomHook } from './main_content/CustomHook/CustomHook';
import { HOC } from './main_content/HOC/HOC';
import { Home } from './main_content/Home/Home';
import { UseCallback } from './main_content/UseCallback/UseCallback';
import { UseMemo } from './main_content/UseMemo/UseMemo';
import { UseReducer } from './main_content/UseReducer/UseReducer';

interface Route {
    id: string;
    to: string;
    linkText: string;
    component: React.FC;
    show: boolean;
}

const createId = () => {
    return `${Math.random()}${Date.now()}`;
}

export const routes: Route[] = [
    { id: createId(), to: '/', linkText: 'page header', component: Home, show: true, },
    { id: createId(), to: '*', linkText: '404', component: NotFound, show: false },
    { id: createId(), to: '/useMemo', linkText: 'useMemo example', component: UseMemo, show: true, },
    { id: createId(), to: '/useCallback', linkText: 'useCallback example', component: UseCallback, show: true, },
    { id: createId(), to: '/hoc', linkText: 'HOC example', component: HOC, show: true },
    { id: createId(), to: '/customHook', linkText: 'Custom hook example', component: CustomHook, show: true },
    { id: createId(), to: '/useReducer', linkText: 'useReducer example', component: UseReducer, show: true },
];
