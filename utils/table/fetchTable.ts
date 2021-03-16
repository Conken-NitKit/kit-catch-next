import {
  DEFAULT_TIME_TABLE,
  instanceOfTable,
  ITimeTable,
} from "models/TimeTable";
import { db } from "utils/firebase";

export const fetchTable = async (
  classId: string,
  setTimeTable: (arg: ITimeTable) => void
) => {
  const tableRef = db.collection("table").doc(classId);
  const doc = await tableRef.get();
  if (doc.exists) {
    const timeTable = doc.data();
    instanceOfTable(timeTable) && setTimeTable(timeTable);
  } else {
    setTimeTable(DEFAULT_TIME_TABLE);
    tableRef.set(DEFAULT_TIME_TABLE);
  }
};
