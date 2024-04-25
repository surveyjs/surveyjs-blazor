import React from 'react';
import PDFGenerator from "./components/PDFGenerator";
import { createComponentRoot } from './utils';

export function init(json: any = {}) {
    createComponentRoot().render(
        <React.StrictMode>
            <PDFGenerator json={json} />
        </React.StrictMode>
    );
}
