import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneButton
} from '@microsoft/sp-property-pane';
import * as $ from 'jquery';
import DocsieTemplate from "./DocsieTemplate";
import "bootstrap"; // for bootstrap javascript

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './DocSieWebPart.module.scss';
import * as strings from 'DocSieWebPartStrings';
import { SPComponentLoader } from "@microsoft/sp-loader";
import {IDocSieWebPartProps} from "./DocsieInterfaces";
// import * as appSettings from 'appSettings';

export default class DocSieWebPart extends BaseClientSideWebPart<IDocSieWebPartProps> {
  public constructor() {
      super();

      SPComponentLoader.loadCss(
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      );
      SPComponentLoader.loadCss(
        "https://lib.docsie.io/current/styles/docsie.css"
      );
  }

  public _disabledProperty: boolean = false;
  public async render(): Promise<void> {
    this.domElement.innerHTML = `
      <section class="${styles.docSie} ${!!this.context.sdks.microsoftTeams ? styles.teams : ''}">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid border-bottom border-secondary">
            <span class="navbar-brand align-middle" href="#">
              <img src="https://cdn.docsie.io/workspaces/workspace_KzWjPI0dOsVYCpNoU/logo_QKcEpB5kVFDog4BUBePANWyVMVtslBl9I4YxIoSb8PMOM.png"  
                alt="Logo" 
                width="50" height="50"><!-- class="d-inline-block align-text-top"> -->
              Docsie
            </span>
          </div>
        </nav>
        <div id="mainDIV">
          <h2>Welcome to Docsie</h2>
          <p>To begin, let's connect to your account using an API key</p>

          <h4 class="text-primary">Create an API Secret Key:</h4>
          <p>Before you start using the Docsie API, you must create a secret key.</p>
          <ul>
            <li>Go to <i class="border">Settings</i> > <i class="border">Organization</i> > <i class="border">API Keys</i></li>
            <li>In the menu, click <i class="border">Create secret key +</i></li>
            <li>Choose a name for the secret key. Then, select an expiration period for the secret key</li>
            <li>Click <i class="border">Add key</i> to finalize this process. The secret key will appear in the current window, and disappear after you click <i class="border">Close dialog</i>. Please copy and save it securely, as you cannot view the token again.</li>
            <li>An obfuscated secret key token will appear in the list. Use this as a reference when working with multiple API keys simultaneously.</li>
          </ul>
          <h4 class="text-primary">Add the API key to this webpart property:</h4>
          <ul>
            <li>Edit this webpart</li>
            <li>Add the API key to the property pane</li>
            <li>Click connect</li>
          </ul>
        </div
      </section>
    `
  }

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then(message => {
      // this._environmentMessage = message;
    });
  }

  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office': // running in Office
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook': // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams': // running in Teams
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              throw new Error('Unknown host');
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Docsie.io properties"
          },
          groups: [
            {
              groupName: "Properties",
              groupFields: [
                PropertyPaneTextField('description', {
                  "label": "Client ID",
                  "description": "Please enter your Docsie ID to connect to your portal",
                  "disabled": this._disabledProperty
                }),
                PropertyPaneButton("button", {
                  "text": "Connect",
                  "onClick": async () => {
                    await this.connectToDocsie().then(()=>{
                      this._disabledProperty = true;
                    });
                  },
                  "disabled": this._disabledProperty
                })
              ]
            }
          ]
        }
      ]
    };
  }

  protected async connectToDocsie(): Promise<void> {
    await DocsieTemplate.getData(this.properties, this.context, 'https://app.docsie.io/api_v2/003/workspaces?expand[]=documentation.books')
    .then((res): void => {
      const sectionDIV = this.domElement.querySelector('#mainDIV');
      sectionDIV.innerHTML = `
        <ul class="nav nav-pills mb-3" id="myTab" role="tablist">
          <li class="nav-item border-bottom mb-2" role="presentation">
            <button class="nav-link active" id="new-tab" data-bs-toggle="tab" data-bs-target="#new-tab-pane" type="button" role="tab" aria-controls="new-tab-pane" aria-selected="true">Create deployment</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="get-tab" data-bs-toggle="tab" data-bs-target="#get-tab-pane" type="button" role="tab" aria-controls="get-tab-pane" aria-selected="false">Existing deployments</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">  
          <div class="tab-pane fade show active" id="new-tab-pane" role="tabpanel" aria-labelledby="new-tab" tabindex="0">
            <div id='workSpace' class="border-bottom border-secondary pb-2 mb-4">
            </div>
          </div>
          <div class="tab-pane fade" id="get-tab-pane" role="tabpanel" aria-labelledby="get-tab" tabindex="0">
            <div id='deploymentDiv' class="border-bottom border-secondary pb-2 mb-4">
            </div>
          </div>
        </div>
      `;
      const workspaceElement = this.domElement.querySelector('#workSpace');
      if (workspaceElement !== null) {
        workspaceElement.innerHTML = DocsieTemplate.createDOM(res);
        $('#applyBtn').on('click', (): void => {
            const activeTabID:string = $('.tab-pane.active a.active').attr('aria-controls');
            const checkedRadio = $(`div#${activeTabID} input[type="radio"]:checked`);
            if (checkedRadio.length === 0) {
              alert('none selected');
            } else {
              alert(checkedRadio.attr('value'));
            }
        });
      }
    })
    await DocsieTemplate.getData(this.properties, this.context, 'https://app.docsie.io/api_v2/003/deployments')
    .then((dep): void => {
      $('#deploymentDiv').html(DocsieTemplate.createDeploymentDOM(dep));
      $('#deployBTN').on('click', (): void => {
        this.loadDocsieScript($("input[type='radio'][name='listGroupRadio']:checked").val() as string);
      });
    })
  }

  protected loadDocsieScript(ID:string): void {
    // alert(ID)
      const script = document.createElement('script');
      script.async = true;
      script.type = 'text/javascript';
      script.src = 'https://lib.docsie.io/current/service.js';
      script.dataset.docsie = `docsie_pk_key:${ID}`;
      // Append the script element to the document's body
      $('#deploymentDiv').html(script);
  }
}
