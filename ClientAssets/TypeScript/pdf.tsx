import React from 'react';
import PdfExport from "./components/PdfExport";
import { createComponentRoot } from './utils';

export function init(json: any = {}) {
    createComponentRoot().render(<React.StrictMode><PdfExport json={json} /></React.StrictMode>);
}
