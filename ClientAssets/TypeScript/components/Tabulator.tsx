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
  let [tabulator, setTabulator] = useState<Tabulator>();

  if (!tabulator) {
    const survey = new SurveyModel(json);
    tabulator = new Tabulator(survey as any, data);
    setTabulator(tabulator);
  }

  useEffect(() => {
    tabulator?.render("summaryContainer");
  }, [tabulator]);

  return <div style={{ height: "80vh", width: "100%" }} id="summaryContainer"></div>;
}
