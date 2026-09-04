import React from "react";
import { useEffect, useState } from "react";
import { Model } from "survey-core";
import { Dashboard as SurveyDashboard } from "survey-analytics";
import "survey-analytics/survey.analytics.css";
import { data, json } from "../../Data/dashboard_data";

export default function Dashboard(param?: any) {
  let [dashboard, setDashboard] = useState<SurveyDashboard>();

  if (!dashboard) {
    const survey = new Model(json);
    dashboard = new SurveyDashboard({
      questions: survey.getAllQuestions(),
      data,
    });
    setDashboard(dashboard);
  }

  useEffect(() => {
    dashboard?.render("surveyDashboard");
    return () => {
      dashboard?.clear();
    }
  }, [dashboard]);

  return <div id="surveyDashboard" style={{"margin": "auto", "width": "100%", "maxWidth": "1400px"}}></div>;
}
