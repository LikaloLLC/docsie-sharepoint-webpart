import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import "bootstrap";
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IDocSieWebPartProps } from "./DocsieInterfaces";
export default class DocSieWebPart extends BaseClientSideWebPart<IDocSieWebPartProps> {
    constructor();
    _disabledProperty: boolean;
    render(): Promise<void>;
    protected onInit(): Promise<void>;
    private _getEnvironmentMessage;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    protected connectToDocsie(): Promise<void>;
    protected loadDocsieScript(ID: string): void;
}
//# sourceMappingURL=DocSieWebPart.d.ts.map