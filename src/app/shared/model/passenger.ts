export interface Ipassenger{
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: number | null;
    children: null | Array<child>;
}

export interface child{
  name:string,
  age:number
}
