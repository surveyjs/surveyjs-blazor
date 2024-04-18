import React from "react";
import { useEffect, useState } from "react";
import { data, json } from "../../Data/dashboard_data";

import jsPDF from "jspdf";
// import * as XLSX from "xlsx";
import "jspdf-autotable";

import { Tabulator } from "survey-analytics/survey.analytics.tabulator.js";
import { SurveyModel } from "survey-core";
import "survey-analytics/survey.analytics.tabulator.css";
import "tabulator-tables/dist/css/tabulator.min.css";

(window as any)["jsPDF"] = jsPDF;
// (window as any)["XLSX"] = XLSX;

export default function DashboardTabulator(param?: any) {
  let [vizPanel, setVizPanel] = useState<Tabulator>();

  if (!vizPanel) {
    const survey = new SurveyModel(json);
    vizPanel = new Tabulator(survey as any, data);
    setVizPanel(vizPanel);
  }

  useEffect(() => {
    vizPanel?.render("summaryContainer");
  }, [vizPanel]);

  return <div style={{ height: "80vh", width: "100%" }} id="summaryContainer"></div>;
}
