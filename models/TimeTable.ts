export interface ITimeTable {
  monday: [string, string, string, string];     // 月曜日
  thesday: [string, string, string, string];    // 火曜日
  wendnesday: [string, string, string, string]; // 水曜日
  thursday: [string, string, string, string];   // 木曜日
  firday: [string, string, string, string];     // 金曜日
}

export const DEFAULT_TIME_TABLE: ITimeTable = {
  monday: ["", "", "", ""],
  thesday: ["", "", "", ""],
  wendnesday: ["", "", "", ""],
  thursday: ["", "", "", ""],
  firday: ["", "", "", ""],
};

export const instanceOfTable = (arg: any): arg is ITimeTable =>
  "monday" in arg &&
  "thesday" in arg &&
  "wendnesday" in arg &&
  "thursday" in arg &&
  "friday" in arg;
