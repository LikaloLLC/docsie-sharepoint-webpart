# doc-sie

## Testing
1. Clone this Repo
2. Open in VSCode
3. Change the config -> serve.json -> initialpage to [your own SP site]_layouts/workbench.aspx
4. run on the terminal:
  1. gulp serve
  2. In the open window, add the webpart
  3. edit the properties and add a valid key
  4. click button

## Deploy - Production
1. run on terminal:
   1. gulp bundle --ship
   2. gulp package-solution --ship
2. App Catalog: this will create a new folder called SharePoint (if not already created)
   1. Look for solutions folder and find the .sppkg file
   2. Go to you SharePoint Admin Center
   3. Go to More Features in side navigation
   4. Click "Open" in Apps
   5. Upload the .sppkg file in there (make sure you have permissions on AppCatalog site collection)
   6. Enable the webpart
3. Deploy webpart to a Site collection in SharePoint
   1. Go to site collection "Site Content" or "Add an App"
   2. Look for the app in the list. If not found, then if could be the following reason:
      1. App already deployed tenant wide, in which case:
         1. Go to a page and edit it
         2. Add a web part in a section
         3. Look for the web part
      2. Deploy error:
         1. Check App Catalog and see if the upload was successful
      3. Custom scripting is disbled
         1. Enable custom scripting for that site, requires PowerShell
   3. Add the app if found
   4. Once added, you can start using the webpart
 
## Summary

Short summary on functionality and used technologies.

[picture of the solution in action, if possible]

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.17.3-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

> Any special pre-requisites?

## Solution

| Solution    | Author(s)                                               |
| ----------- | ------------------------------------------------------- |
| folder name | Author details (name, company, twitter alias with link) |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |
| 1.1     | March 10, 2021   | Update comment  |
| 1.0     | January 29, 2021 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**

> Include any additional steps as needed.

## Features

Description of the extension that expands upon high-level summary above.

This extension illustrates the following concepts:

- topic 1
- topic 2
- topic 3

> Notice that better pictures and documentation will increase the sample usage and the value you are providing for others. Thanks for your submissions advance.

> Share your web part with others through Microsoft 365 Patterns and Practices program to get visibility and exposure. More details on the community, open-source projects and other activities from http://aka.ms/m365pnp.

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
