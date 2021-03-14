export interface ICredit {
  test: number;         // 定期テスト
  miniTest: number;     // 小テスト
  task: number;         // 課題点
  others: number;       // その他
}

export interface ISubject {
  name: string;         // 授業科目の名前
  description: string;  // 授業科目の説明
  teacher: string;      // 授業の担当教員
  credit: ICredit;      // 授業の評価項目
}
