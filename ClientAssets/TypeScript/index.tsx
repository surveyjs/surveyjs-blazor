import React from 'react';
import { createRoot } from 'react-dom/client';
import SurveyRunnerComponent from "./SurveyComponent";
import SurveyCreatorComponent from "./SurveyCreatorComponent";

function createComponentRoot() {
    const container = document.getElementById('root');
    const root = createRoot(container);
    return root;
}

export function initRunnerPage(json: any = {}) {
    createComponentRoot().render(<React.StrictMode><div><SurveyCreatorComponent json={json} /></div></React.StrictMode>);
}

export function initCreatorPage(json: any = {}) {
    createComponentRoot().render(<React.StrictMode><div><SurveyRunnerComponent json={json} /></div></React.StrictMode>);
}

