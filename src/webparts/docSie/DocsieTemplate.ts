import { IDeployment, IDeployments, IDocSieWebPartProps } from "./DocsieInterfaces";
import {IWorkspaces, IWorkspace, IDoc, IBook} from "./DocsieInterfaces";

// import styles from "./DocSieWebPart.module.scss";
import {
    HttpClient,
    HttpClientResponse
  } from '@microsoft/sp-http';
import { WebPartContext } from '@microsoft/sp-webpart-base';
// import {allTypes} from "./DocsieInterfaces";
export default class DocsieTemplate {

    public static htmlTemplateTop: string;
    public static htmlTemplateDeployment: string;

    public static async getData(prop:IDocSieWebPartProps, context:WebPartContext, _endPoint:string): Promise<any> {
        const _bearer: string = "Bearer " + prop.description;
        return await context.httpClient
        .get(_endPoint, HttpClient.configurations.v1, {
          headers: [
            ['accept', 'application/json;odata.metadata=none'],
            ['Authorization', _bearer]
          ]
        })
        .then((res: HttpClientResponse): Promise<IWorkspaces | IDeployments> => {
            // console.log(res.json())
            return res.json()
        })
    }

    public static createDOM(res:IWorkspaces): string {
        this.htmlTemplateTop = `
        <div class="container">
            <div class="row align-middle">
                <div class="col">
                    <p class="align-middle fw-bold">Workspaces:</p>
                </div>
                <div class="col">
                    <p class="align-middle">Shelves:</p>
                </div>
                <div class="col">
                    <p class="align-middle">Documents:</p>
                </div>
            </div>
            <div class="row" style= "max-height:10rem; overflow: scroll; scroll-behavior: smooth;">
                <div class="col-4">
                    <div class="list-group" id="WSlist-tab" role="tablist">`;
        let i: number = 0;
        let j: number = 0;
        // let k: number = 0;
        res.results.forEach((item: IWorkspace) => {
            this.htmlTemplateTop += i === 0 ?
            `<a class="list-group-item list-group-item-action" id="list-${item.id}-list" data-bs-toggle="list" href="#list-${item.id}" role="tab" aria-controls="list-${item.id}">
                ${item.name}
            </a>`:
            `<a class="list-group-item list-group-item-action" id="list-${item.id}-list" data-bs-toggle="list" href="#list-${item.id}" role="tab" aria-controls="list-${item.id}">
                ${item.name}
            </a>`
            i++;
        });
        this.htmlTemplateTop += `
                    </div> <!--WSlist-tab--->
                </div> <!--Col-4--->
                <div class="col-8"> 
                    <div class="tab-content" id="nav-tabContent"> <!--All tab content Div--->`
        i = 0;
        res.results.forEach((item: IWorkspace) => {
            this.htmlTemplateTop += i === 0 ?
            `<div class="tab-pane fade show" id="list-${item.id}" role="tabpanel" aria-labelledby="list-${item.id}-list">
            <!--Content ${i}--->
                <div class="row">
                    <div class="col-6">
            `:
            `<div class="tab-pane fade show" id="list-${item.id}" role="tabpanel" aria-labelledby="list-${item.id}-list">
            <!--Content ${i}--->
                <div class="row">
                    <div class="col-6">`;
            i++;
            this.htmlTemplateTop += `
                        <div class="list-group" id="list-tab-${item.id}" role="tablist">`;
            item.documentation.results.forEach((doc_item: IDoc) => {
                this.htmlTemplateTop += j === 0 ?
                `<a class="list-group-item list-group-item-action" 
                    id="list-${doc_item.id}-list" data-bs-toggle="list" href="#list-${doc_item.id}" role="tab" aria-controls="list-${doc_item.id}">
                        ${doc_item.name}
                </a>`:
                `<a class="list-group-item list-group-item-action" 
                    id="list-${doc_item.id}-list" data-bs-toggle="list" href="#list-${doc_item.id}" role="tab" aria-controls="list-${doc_item.id}">
                        ${doc_item.name}
                </a>`;
                j++;
            });
            this.htmlTemplateTop += `
                        </div> <!--Button group closed--->
                    </div> <!--Col-6 closed--->`
            this.htmlTemplateTop += `
                        <div class="col-6">
                            <div class="tab-content" id="nav-tabContent-${item.id}">`
            j = 0;
            item.documentation.results.forEach((doc_item: IDoc) => {
                this.htmlTemplateTop += j === 0 ?
                `<div class="tab-pane fade show" id="list-${doc_item.id}" role="tabpanel" aria-labelledby="list-${doc_item.id}-list">
                    <ul class="list-group" id="UL-${doc_item.id}">
                `:
                `<div class="tab-pane fade show" id="list-${doc_item.id}" role="tabpanel" aria-labelledby="list-${doc_item.id}-list">
                    <ul class="list-group" id="${doc_item.id}">
                `;
                // k = 0;
                doc_item.books.results.forEach((book_item: IBook) => {
                    this.htmlTemplateTop += 
                    `
                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="${book_item.name}" id="${book_item.id}">
                            <label class="form-check-label" for="${book_item.id}">${book_item.name}</label>
                        </li>
                    `
                    // k++;
                });
                this.htmlTemplateTop += `
                    </ul> <!--UL Closed--->
                </div> <!--DIV -TABPane Closed-->`
            });
            this.htmlTemplateTop += `
            </div> <!--TAB content closed--->
            </div> <!----COl-6 Closed--->
            </div> <!--Row Closed-->
            </div> <!---TAB Pane Closed---->`
        });
        this.htmlTemplateTop += `</div> <!--All tab content closed--->
    </div> <!--Col-8 closed--->
    </div> <!---Row--->
    </div> <!---Container---->
    <div id='WSDocs' class="container text-end">
        <button type="button" class="btn btn-secondary" id="applyBtn" >Create</button>
    </div>`
        return this.htmlTemplateTop;
    }

    public static createDeploymentDOM(res:IDeployments): string{

        // this.htmlTemplateDeployment = `
        // <h2>Zoheb</h2>
        // `
        this.htmlTemplateDeployment = `
            <div class="container">
                <div class="row">
                    <div class ="col">
                        <ul class="list-group">
        `;
        let i: number = 0;
        res.results.forEach((dep_item: IDeployment) => {
            if(!dep_item.deleted) {
                this.htmlTemplateDeployment += i === 0 ?
                `
                <li class="list-group-item">
                    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="${dep_item.id}" checked>
                    <label class="form-check-label" for="${dep_item.id}">${dep_item.workspace}</label>
                </li>
                `:`
                <li class="list-group-item">
                    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="${dep_item.id}" id="${dep_item.id}">
                    <label class="form-check-label" for="${dep_item.id}">${dep_item.workspace}</label>
                </li>
                `
            }
            i++;
        })
        this.htmlTemplateDeployment += `
                        </ul>
                    </div>
                </div>
            </div>
            <div id='newDep mb-3' class="container text-end">
                <button type="button" class="btn btn-secondary" id="deployBTN">Deploy</button>
            </div>
        `
        return this.htmlTemplateDeployment;
    } 
}
