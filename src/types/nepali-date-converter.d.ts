declare module 'nepali-date-converter' {
  export default class NepaliDate {
    constructor(date?: Date | string | number);
    getYear(): number;
    getMonth(): number;
    getDate(): number;
    getDay(): number;
    format(formatString: string): string;
    toJsDate(): Date;
    static fromAD(year: number, month: number, day: number): NepaliDate;
    static fromBS(year: number, month: number, day: number): NepaliDate;
  }
} 