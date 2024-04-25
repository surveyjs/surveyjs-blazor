import React from 'react';
import Dashboard from "./components/Dashboard";
import { createComponentRoot } from './utils';

export function init(json: any = {}) {
    createComponentRoot().render(
        <React.StrictMode>
            <Dashboard json={json} />
        </React.StrictMode>
    );
}
