import React from 'react';
import PdfExport from "./PdfExport";
import { createComponentRoot } from './utils';

export function init(json: any = {}) {
    createComponentRoot().render(<React.StrictMode><div><PdfExport json={json} /></div></React.StrictMode>);
}
