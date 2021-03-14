export interface IUser {
  uid: string;            // ユーザーの固有ID
  classId: string;        // 所属クラスの固有ID
  displayName: string;    // ユーザーネーム
  email: string;          // メールアドレス
}

export const defaultUserInfo: IUser = {
  uid: "",
  classId: "",
  displayName: "",
  email: ""
}