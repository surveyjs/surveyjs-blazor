import React from 'react';
import DashboardTabulator from "./components/Tabulator";
import { createComponentRoot } from './utils';

export function init(json: any = {}) {
    createComponentRoot().render(
        <React.StrictMode>
            <DashboardTabulator json={json} />
        </React.StrictMode>
    );
}
