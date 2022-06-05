import React from 'react';
import { NotFound } from './main_content/404/404';
import { Home } from './main_content/Home/Home';
import { UseCallback } from './main_content/UseCallback/UseCallback';
import { UseMemo } from './main_content/UseMemo/UseMemo';

interface Route {
    id: string;
    to: string;
    linkText: string;
    component: React.FC;
    show: boolean;
}

export const routes: Route[] = [
    { id: '001', to: '/', linkText: 'page header', component: Home, show: true, },
    { id: '002', to: '/useMemo', linkText: 'useMemo example', component: UseMemo, show: true, },
    { id: '003', to: '/useCallback', linkText: 'useCallback example', component: UseCallback, show: true, },
    { id: '004', to: '*', linkText: '404', component: NotFound, show: false },
];
