import React from 'react';
import SurveyRunnerComponent from "./SurveyComponent";
import { createComponentRoot } from './utils';

export function init(json: any = {}) {
    createComponentRoot().render(<React.StrictMode><div><SurveyRunnerComponent json={json} /></div></React.StrictMode>);
}
