import React from "react";
import { useEffect, useState } from "react";
import { data, json } from "../../Data/dashboard_data";

import jsPDF from "jspdf";
import { applyPlugin } from "jspdf-autotable";
applyPlugin(jsPDF);
// import * as XLSX from "xlsx";

import { Tabulator } from "survey-analytics/survey.analytics.tabulator";
import { Model } from "survey-core";
import "survey-analytics/survey.analytics.tabulator.css";
import "tabulator-tables/dist/css/tabulator.min.css";

export default function DashboardTabulator(param?: any) {
  let [tabulator, setTabulator] = useState<Tabulator>();

  if (!tabulator) {
    const survey = new Model(json);
    tabulator = new Tabulator(survey, data, {
      jspdf: jsPDF,
      // xlsx: XLSX
    });
    setTabulator(tabulator);
  }

  useEffect(() => {
    tabulator?.render("summaryContainer");
  }, [tabulator]);

  return <div style={{ height: "80vh", width: "100%" }} id="summaryContainer"></div>;
}
