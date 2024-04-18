import React, { useState } from "react";
import { ICreatorOptions } from "survey-creator-core";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import "survey-core/survey.i18n.js";
import "survey-creator-core/survey-creator-core.i18n.js";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

const defaultCreatorOptions: ICreatorOptions = {
    showLogicTab: true,
    showTranslationTab: true
};

export default function Creator(props: { json?: Object, options?: ICreatorOptions }) {
    let [creator, setCreator] = useState<SurveyCreator>();

    if (!creator) {
        creator = new SurveyCreator(props.options || defaultCreatorOptions);
        creator.saveSurveyFunc = (no: number, callback: (num: number, status: boolean) => void) => {
        console.log(JSON.stringify(creator?.JSON));
        callback(no, true);
        };
        setCreator(creator);
    }

    creator.JSON = props.json;

    return (
        <SurveyCreatorComponent creator={creator} />
    );
}
  