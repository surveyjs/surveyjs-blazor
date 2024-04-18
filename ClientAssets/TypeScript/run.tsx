import React from 'react';
import SurveyRunner from "./components/Survey";
import { createComponentRoot } from './utils';

import { json as demoJson } from "../Data/survey_json.js";

export function init(json?: any) {
    createComponentRoot().render(<React.StrictMode><SurveyRunner json={json || demoJson} /></React.StrictMode>);
}
