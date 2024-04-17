import React from 'react';
import DashboardComponent from "./DashboardComponent";
import { createComponentRoot } from './utils';

export function init(json: any = {}) {
    createComponentRoot().render(<React.StrictMode><div><DashboardComponent json={json} /></div></React.StrictMode>);
}
