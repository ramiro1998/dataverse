export interface SwapiPaginationResponse<T> {
    message: string;
    total_records: number;
    total_pages: number;
    previous: string | null;
    next: string | null;
    results: {
        uid: string;
        name: string;
        url: string;
    }[];
}

export interface SwapiFilterResponse<T> {
    message: string;
    result: {
        properties: T;
        uid: string;
        url: string;
        [key: string]: any;
    }[];
}