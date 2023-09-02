export type AboutUsData = {
    id: number;
    type: "img" | "video";
    link: string;
}

export type AboutUsSendedData = {
    type: "img" | "video";
    file: any;
}