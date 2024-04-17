import React from 'react';
import DashboardTabulator from "./DashboardTabulator";
import { createComponentRoot } from './utils';

export function init(json: any = {}) {
    createComponentRoot().render(<React.StrictMode><div><DashboardTabulator json={json} /></div></React.StrictMode>);
}
