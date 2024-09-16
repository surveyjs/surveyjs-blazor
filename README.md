# SurveyJS + Blazor Quickstart Template

SurveyJS is a set of JavaScript components that allow you and your users to build surveys / forms, store them in your database, and visualize survey results for data analysis. This quick start template shows how to integrate the following SurveyJS components into a Blazor application:

- [SurveyJS Form Library](https://surveyjs.io/form-library/documentation/overview)
- [Survey Creator / Form Builder](https://surveyjs.io/survey-creator/documentation/overview)
- [SurveyJS PDF Generator](https://surveyjs.io/pdf-generator/documentation/overview)
- [SurveyJS Dashboard](https://surveyjs.io/dashboard/documentation/overview)

This project uses React for the front-end part, but the SurveyJS components can also be similarly integrated with Angular, Knockout, jQuery, Vue 2, and Vue 3.

## Run the application

```bash
git clone https://github.com/surveyjs/surveyjs-blazor.git
cd surveyjs-blazor
npm i
dotnet run
```

Open http://localhost:5208/ in your web browser.

> NOTE: This application uses [.NET Core 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0). Make sure that you have ASP.NET Core Runtime 8.0 installed on your machine.

## Template structure

This template covers most basic use cases. You can find code examples for them in the following files:

- Create a standalone survey
  - [ClientAssets/Data/survey_json.js](ClientAssets/Data/survey_json.js)
  - [ClientAssets/TypeScript/components/Survey.tsx](ClientAssets/TypeScript/components/Survey.tsx)
- Add Survey Creator to a page
  - [ClientAssets/TypeScript/components/Creator.tsx](ClientAssets/TypeScript/components/Creator.tsx)
- Export a survey to a PDF document
  - [ClientAssets/TypeScript/components/PDFGenerator.tsx](ClientAssets/TypeScript/components/PDFGenerator.tsx)
- Visualize survey results
  - As charts
    - [ClientAssets/Data/dashboard_data.js](ClientAssets/Data/dashboard_data.js)
    - [ClientAssets/TypeScript/components/Dashboard.tsx](ClientAssets/TypeScript/components/Dashboard.tsx)
  - As a table
    - [ClientAssets/Data/dashboard_data.js](ClientAssets/Data/dashboard_data.js)
    - [ClientAssets/TypeScript/components/Tabulator.tsx](ClientAssets/TypeScript/components/Tabulator.tsx)

## How to integrate SurveyJS components into your Blazor application

SurveyJS components can be used with Angular, React, Vue.js, Knockout, and jQuery. You can integrate SurveyJS into a Blazor application that already uses one of these JavaScript frameworks/libraries or into one that doesn't use any of them. Follow the instructions below:

- [Add SurveyJS to a Blazor application with a JavaScript framework](#add-surveyjs-to-a-blazor-application-with-a-javascript-framework)
- [Add SurveyJS to a Blazor application without a JavaScript framework](#add-surveyjs-to-a-blazor-application-without-a-javascript-framework)

### Add SurveyJS to a Blazor application with a JavaScript framework

1. **Install SurveyJS libraries and configure SurveyJS components**       
Use the following tutorials to get started with SurveyJS components in your framework:

	- Get Started with Form Library: [Angular](https://surveyjs.io/form-library/documentation/get-started-angular) | [Vue.js](https://surveyjs.io/form-library/documentation/get-started-vue) | [React](https://surveyjs.io/form-library/documentation/get-started-react) | [HTML/CSS/JavaScript](https://surveyjs.io/form-library/documentation/get-started-html-css-javascript)
	- Get Started with Survey Creator: [Angular](https://surveyjs.io/survey-creator/documentation/get-started-angular) | [Vue.js](https://surveyjs.io/survey-creator/documentation/get-started-vue) | [React](https://surveyjs.io/survey-creator/documentation/get-started-react) | [HTML/CSS/JavaScript](https://surveyjs.io/survey-creator/documentation/get-started-html-css-javascript)
	- Get Started with Dashboard: [Angular](https://surveyjs.io/dashboard/documentation/get-started-angular) | [Vue.js](https://surveyjs.io/dashboard/documentation/get-started-vue) | [React](https://surveyjs.io/dashboard/documentation/get-started-react) | [HTML/CSS/JavaScript](https://surveyjs.io/dashboard/documentation/get-started-html-css-javascript)
	- Get Started with PDF Generator: [Angular](https://surveyjs.io/pdf-generator/documentation/get-started-angular) | [Vue.js](https://surveyjs.io/pdf-generator/documentation/get-started-vue) | [React](https://surveyjs.io/pdf-generator/documentation/get-started-react) | [HTML/CSS/JavaScript](https://surveyjs.io/pdf-generator/documentation/get-started-html-css-javascript)

    For component configuration examples in React, you can refer to the [ClientAssets/TypeScript/components](ClientAssets/TypeScript/components) directory.
	
2. **Update the Webpack configuration**       
To compile SurveyJS components into JavaScript and CSS files, you need to add new entry points to the Webpack configuration. Open the `webpack.config.js` file in the root directory of your project and update the `entry` and `output` objects. The following code shows how these objects are configured in this quick start template. In your project, the file paths may be different.

    ```js
    // webpack.config.js
    // ...
    module.exports = {
      // ...
      entry: {
        "survey-creator": "./ClientAssets/TypeScript/edit.tsx",
        "form-library": "./ClientAssets/TypeScript/run.tsx",
        dashboard: "./ClientAssets/TypeScript/dashboard.tsx",
        tabulator: "./ClientAssets/TypeScript/table.tsx",
        pdf: "./ClientAssets/TypeScript/pdf.tsx",
      },
      output: {
        libraryTarget: 'module',
        path: path.resolve(__dirname, "./wwwroot/static"),
        publicPath: "/static/",
        filename: "[name].js"
      },
      // ...
    }
    ```

    [View webpack.config.js](./webpack.config.js)

3. **Update the TypeScript configuration**      
If your project uses TypeScript, open the `tsconfig.json` file in the root directory and set the following properties in it:

    ```js
    {
      "compilerOptions": {
        // ...
        "esModuleInterop": true,
        "target": "es5"
      },
      // ...
    }
    ```

<a id="add-razor-components"></a> 

4. **Add Razor components that render SurveyJS components**     

    4.1. Specify the Razor component's route using the `@page` directive.

      ```razor
      @page "/dashboard"
      ```
    4.2. Apply the `InteractiveServer` render mode using the `@rendermode` directive.

      ```razor
      @rendermode InteractiveServer
      ```
    4.3. Add a link to the Webpack-generated style sheet. This link depends on the SurveyJS component for which you create the Razor component.

      ```html
      <link href="static/dashboard.css" rel="stylesheet"/>
      ```
    4.4. Add a markup element (usually `<div>`) in which the SurveyJS component will be rendered. Assign an `id` to it and use this `id` to access the element in JavaScript code.

      ```html
      <div id="root"></div>
      ```
    4.5. Load the Webpack-generated script in the Razor component. Inject the `IJSRuntime` dependency to be able to call JavaScript functions from C# code. Add an `OnAfterRenderAsync` method that imports the script file with the SurveyJS component and calls the file's `init` function. In addition, you should implement the `IDisplosable` interface to release the resources allocated to the imported JavaScript file.


      ```razor
      @inject IJSRuntime jsRuntime
      @implements IDisposable
      @code{
        private IJSObjectReference? module;

        protected override async Task OnAfterRenderAsync(bool firstRender) {
          await base.OnAfterRenderAsync(firstRender);
          module = await jsRuntime.InvokeAsync<IJSObjectReference>("import", "./static/dashboard.js");     
          await module.InvokeVoidAsync("init");
        }
        void IDisposable.Dispose() {
          module?.DisposeAsync();
          module = null;
        }
      }
      ```

### Add SurveyJS to a Blazor application without a JavaScript framework

1. **Set up the JavaScript environment**      
Copy the following files from this template to the root directory of your project:

    - [`package.json`](./package.json)
    - [`tsconfig.json`](./tsconfig.json)
    - [`webpack.config.js`](./webpack.config.js)

2. **Add a pre-build task for the JavaScript part**        
Open the `.csproj` file of your project in a text editor and add the following pre-build task. It installs npm packages and builds the JavaScript part of your project every time you build the entire project:

    ```xml
    <Project Sdk="Microsoft.NET.Sdk.Web">
      <!-- ... -->
      <Target Name="PreBuild" BeforeTargets="PreBuildEvent">
        <Exec Command="npm install" WorkingDirectory="." />
        <Exec Command="npm run build" WorkingDirectory="." />
      </Target>
    </Project>
    ```

1. **Configure SurveyJS components**      
SurveyJS components support a number of JavaScript frameworks. The current template uses React. If you are not using any JavaScript framework or using React, you can simply copy files from the [ClientAssets](./ClientAssets/) directory to your project and adjust them as required.

1. **Add Razor components that render SurveyJS components**     
Refer to [step 4](#add-razor-components) of the instructions for Blazor applications with a JavaScript framework.

## SurveyJS Resources

- [Website](https://surveyjs.io/)
- [Documentation](https://surveyjs.io/form-library/documentation/overview)
- [Starter Demos](https://surveyjs.io/form-library/examples/overview)
- [What's New](https://surveyjs.io/stay-updated/major-updates/2023)