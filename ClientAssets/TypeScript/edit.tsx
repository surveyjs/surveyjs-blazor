import React from 'react';
import Creator from "./components/Creator";
import { createComponentRoot } from './utils';

import { json as demoJson } from "../Data/survey_json.js";

export function init(json?: any) {
    createComponentRoot().render(
        <React.StrictMode>
            <Creator json={json || demoJson} />
        </React.StrictMode>
    );
}
