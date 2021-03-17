export interface ITimeTable {
  monday: [string, string, string, string];     // 月曜日
  tuesday: [string, string, string, string];    // 火曜日
  wednesday: [string, string, string, string]; // 水曜日
  thursday: [string, string, string, string];   // 木曜日
  friday: [string, string, string, string];     // 金曜日
}

export const DEFAULT_TIME_TABLE: ITimeTable = {
  monday: ["", "", "", ""],
  tuesday: ["", "", "", ""],
  wednesday: ["", "", "", ""],
  thursday: ["", "", "", ""],
  friday: ["", "", "", ""],
};

export const instanceOfTable = (arg: any): arg is ITimeTable =>
  "monday" in arg &&
  "tuesday" in arg &&
  "wednesday" in arg &&
  "thursday" in arg &&
  "friday" in arg;
  