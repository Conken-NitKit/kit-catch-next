import { ITask } from "./Task";

export interface IClassRoom {
  uid: string;            // クラスの固有ID
  name: string;           // クラスの名前
  tasks: ITask[];         // クラスの授業リスト
  LineRoomIds: string[];  // LineのトークルームのID
}