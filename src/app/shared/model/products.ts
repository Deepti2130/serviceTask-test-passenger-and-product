export interface Iproduct{
    pname: string;
    pdetails: string;
    pid: string;
    pstatus: productstatus;
}
//for productstatus we create enum
export enum productstatus{
Inprogress = "Inprogress",
Dispatched = "Dispatched",
Delivered = "Delivered"
}
