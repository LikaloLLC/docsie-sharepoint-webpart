import { IDeployments, IDocSieWebPartProps } from "./DocsieInterfaces";
import { IWorkspaces } from "./DocsieInterfaces";
import { WebPartContext } from '@microsoft/sp-webpart-base';
export default class DocsieTemplate {
    static htmlTemplateTop: string;
    static htmlTemplateDeployment: string;
    static getData(prop: IDocSieWebPartProps, context: WebPartContext, _endPoint: string): Promise<any>;
    static createDOM(res: IWorkspaces): string;
    static createDeploymentDOM(res: IDeployments): string;
}
//# sourceMappingURL=DocsieTemplate.d.ts.map