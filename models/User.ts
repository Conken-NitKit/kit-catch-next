export interface IUser {
  uid: string;          // ユーザーの固有ID
  classId: string;      // 所属クラスの固有ID
  displayName: string;  // ユーザーネーム
  email: string;        // メールアドレス
}

export const DEFAULT_USER_INFO: IUser = {
  uid: "",
  classId: "",
  displayName: "",
  email: "",
};

export const instanceOfUser = (arg: any): arg is IUser =>
  "uid" in arg && "classId" in arg && "displayName" in arg && "email" in arg;
