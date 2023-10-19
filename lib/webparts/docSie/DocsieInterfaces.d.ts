export interface IDocSieWebPartProps {
    description: string;
}
export interface IWorkspaces {
    results: IWorkspace[];
}
export interface IWorkspace {
    created: string;
    modified: string;
    deleted: boolean;
    id: string;
    name: string;
    slug: string;
    style: string;
    owner: number;
    members: number[];
    administrators: any[];
    editors: any[];
    viewers: any[];
    domain_verification_subdomain: string;
    documentation: IDocs;
    renewal: any;
    last_notified: string;
    allowed_hosts: any[];
    public: boolean;
    domain_name: any;
    domain_verified: boolean;
    domain_verification_string: string;
    shelves_count: number;
}
export interface IDocs {
    count: number;
    has_more: boolean;
    url: string;
    results: IDoc[];
}
export interface IDoc {
    created: string;
    modified: string;
    deleted: boolean;
    id: string;
    name: string;
    description: string;
    slug: string;
    owner: number;
    public: boolean;
    primary: boolean;
    next_auto_cache: any;
    auto_update: boolean;
    nickname: string;
    testing_hosts: any[];
    domain_name: string;
    domain_verified: boolean;
    domain_verification_string: string;
    forked: boolean;
    forked_parent: any;
    gallery: any[];
    links: any[];
    linkable: boolean;
    header: any[];
    footer: any[];
    password_protected: boolean;
    tags: any[];
    custom_styles: any[];
    order: number;
    members: any[];
    administrators: any[];
    editors: any[];
    viewers: any[];
    books: IBooks;
    passwords: string[];
    active_books_count: number;
}
export interface IBooks {
    count: number;
    has_more: boolean;
    url: string;
    results: IBook[];
}
export interface IBook {
    created: string;
    modified: string;
    deleted: boolean;
    id: string;
    name: string;
    description: string;
    url_path: any;
    collection: any[];
    tags: any[];
    primary: boolean;
    password_protected: boolean;
    published: boolean;
    slug: string;
    order: number;
    type: string;
    members: any[];
    administrators: any[];
    editors: any[];
    viewers: any[];
    passwords: any[];
    active_versions_count: number;
}
export interface IDeployments {
    results: IDeployment[];
}
export interface IDeployment {
    modified: string;
    created: string;
    deleted: boolean;
    id: string;
    target_content_type: number;
    target_object_id: string;
    domain: any;
    meta: Meta;
    title: string;
    custom_scripts: string;
    links: Links;
    hub: boolean;
    script: string;
    style: string;
    script_version: string;
    workspace: string;
    host: string;
    key: string;
    distribution: string;
    advanced_security: boolean;
    master_key: string;
    advanced_security_type: string;
}
export interface Meta {
    portal_url?: string;
    footer?: boolean;
    plugins?: string[];
    version?: boolean;
    language?: boolean;
    sectionAnchor?: boolean;
}
export interface Links {
}
//# sourceMappingURL=DocsieInterfaces.d.ts.map