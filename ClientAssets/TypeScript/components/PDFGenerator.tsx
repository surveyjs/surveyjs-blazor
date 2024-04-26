import React from "react";
import { Model } from "survey-core";
import { SurveyPDF } from "survey-pdf";

import { json } from "../../Data/survey_json.js";

function savePDF(model: Model) {
  const surveyPDF = new SurveyPDF(json);
  surveyPDF.data = model.data;
  surveyPDF.save();
};

export default function PDFGenerator(param?: any) {
  const model = new Model(json);
  return (
    <div>
      <h1>SurveyJS PDF Generator</h1>
      <div>
        <p>SurveyJS PDF Generator is a client-side extension over the SurveyJS Form Library that enables users to save surveys as PDF documents.</p>
        <p>NOTE: Dynamic elements and characteristics (visibility, validation, navigation buttons) are not supported.</p>
        <p>Click the button below to export survey to a PDF document.</p>
        <div>
          <button onClick={() => savePDF(model)}>Save as PDF</button>
        </div>
      </div>
    </div>
  );
}
