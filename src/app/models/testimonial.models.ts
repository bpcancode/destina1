export interface TestimonialParams {
    Action?: string;
    Regid?: number;
    TestiImg?: string;
    Title?: string;
    Descr?: string;
    VideoUrl?: string;
    CountryId?: number;
    Sesuer?: string;
    Sesid?: string;
};

export interface TestimonialResponse {
    sno: number;
    name: string;
    idno: string;
    title: string;
    tImage: string;
    descr: string;
    videoUrl: string;
    addedBy: string;
    country: string;
    regid: string;
    status: string;
    statusBolck: string;
    apprejblock1: string;
    apprejblock2: string;
    mTstatus: string;
    publishDate: string;
    videoImg: string;
};