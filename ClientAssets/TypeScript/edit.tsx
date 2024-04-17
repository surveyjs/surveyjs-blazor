import React from 'react';
import SurveyCreatorComponent from "./SurveyCreatorComponent";
import { createComponentRoot } from './utils';

export function init(json: any = {}) {
    createComponentRoot().render(<React.StrictMode><div><SurveyCreatorComponent json={json} /></div></React.StrictMode>);
}
