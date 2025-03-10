import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/survey.i18n";
import "survey-core/survey-core.css";

export default function SurveyRunner(props: { json?: Object }) {
  const model = new Model(props.json);
  return (<Survey model={model} />);
}
