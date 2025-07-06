export interface ResourceItem {
    uid: string;
    name: string;
    url: string;
}

export interface ResourceOne {
    [key: string]: string;
}
export interface ResourceDetail {
    label: string;
    key: string;
    suffix?: string;
    truncate?: boolean;
}