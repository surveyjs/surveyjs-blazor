import React from 'react';
import SurveyRunnerComponent from "./SurveyComponent";
import SurveyCreatorComponent from "./SurveyCreatorComponent";
import { createComponentRoot } from './utils';

export function initRunnerPage(json: any = {}) {
    createComponentRoot().render(<React.StrictMode><div><SurveyCreatorComponent json={json} /></div></React.StrictMode>);
}

export function initCreatorPage(json: any = {}) {
    createComponentRoot().render(<React.StrictMode><div><SurveyRunnerComponent json={json} /></div></React.StrictMode>);
}

