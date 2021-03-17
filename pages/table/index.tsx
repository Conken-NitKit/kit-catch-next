import { useContext, useEffect, useState } from "react";
import { Header, NavigationBar } from "components/common";
import { TableForm, TimeTable } from "components/table";
import { userContext } from "contexts/userContext";
import { DEFAULT_TIME_TABLE, ITimeTable } from "models/TimeTable";
import { fetchTable } from "utils/table";
import { auth, db } from "utils/firebase";
import { DEFAULT_USER_INFO, instanceOfUser } from "models/User";

export default function Table() {
  const [teacher, setTeacher] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [day, setDay] = useState<string>("");
  const [time, setTime] = useState<number>(-1);
  const [subject, setSubject] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [timeTable, setTimeTable] = useState<ITimeTable | undefined>(undefined);
  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    const unSub = auth.onAuthStateChanged(async (fetchedUser) => {
      if (
        fetchedUser &&
        JSON.stringify(user) === JSON.stringify(DEFAULT_USER_INFO)
      ) {
        const userRef = db.collection("user").doc(fetchedUser.uid);
        await userRef
          .get()
          .then((doc) => {
            const fetchedUserInfo = doc.data();
            instanceOfUser(fetchedUserInfo) && setUser(fetchedUserInfo);
          })
          .catch((err) => console.log("Error getting documents", err));
      }
    });
    return () => {
      unSub();
    };
  });

  useEffect(() => {
    if (user.classId && !timeTable) {
      fetchTable(user.classId, setTimeTable);
    }
  }, [user]);

  const open = (day: string, time: number, title: string) => {
    setDay(day);
    setTime(time);
    setIsOpen(true);
  };

  return (
    <>
      <Header page={"時間割"} />
      <TimeTable tableValue={timeTable ?? DEFAULT_TIME_TABLE} open={open} />
      <NavigationBar page={"時間割"} height={90} />
      <TableForm day={day} time={time} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
