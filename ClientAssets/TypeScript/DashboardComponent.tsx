import React from "react";
import { useEffect, useState } from "react";
import { Model } from "survey-core";
import { VisualizationPanel } from "survey-analytics";
import "survey-analytics/survey.analytics.css";
import { data, json } from "../Data/dashboard_data";

export function DashboardComponent(param?: any) {
  let [vizPanel, setVizPanel] = useState<VisualizationPanel>();

  if (!vizPanel) {
    const survey = new Model(json);
    vizPanel = new VisualizationPanel(survey.getAllQuestions(), data);
    setVizPanel(vizPanel);
  }

  useEffect(() => {
    vizPanel?.render("surveyVizPanel");
    return () => {
      vizPanel?.clear();
    }
  }, [vizPanel]);

  return <div id="surveyVizPanel" style={{"margin": "auto", "width": "100%", "maxWidth": "1400px"}}></div>;
}

export default DashboardComponent;