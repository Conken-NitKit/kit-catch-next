import { useContext, useEffect, useState } from "react";
import { Header, NavigationBar } from "components/common";
import { TimeTable } from "components/table";
import { userContext } from "contexts/userContext";
import { DEFAULT_TIME_TABLE, ITimeTable } from "models/TimeTable";
import { fetchUserInfo } from "utils/user/fetchUserInfo";
import { fetchTable } from "utils/table";
import { stringify } from "querystring";

export default function Table() {
  const [teacher, setTeacher] = useState<string>("");
  const [isOpen, setOpen] = useState<boolean>(false);
  const [day, setDay] = useState<string>("");
  const [time, setTime] = useState<number>(-1);
  const [subject, setSubject] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [timeTable, setTimeTable] = useState<ITimeTable | undefined>(undefined);
  const { user, setUser } = useContext(userContext);

  // useEffect(() => {
  //   const { unSub } = fetchUserInfo(setUser);

  //   return () => {
  //     unSub();
  //   };
  // });

  useEffect(() => {
    if (user.classId && !timeTable) {
      fetchTable(user.classId, setTimeTable);
    }
  }, [user]);

  return (
    <>
      <Header page={"時間割"} />
      <TimeTable tableValue={timeTable ?? DEFAULT_TIME_TABLE} />
      <NavigationBar page={"時間割"} height={90} />
      {/* <TableForm
        day={day}
        time={time}
        subject={subject}
        setSubject={setSubject}
        description={description}
        setDescription={setDescription}
        teacher={teacher}
        setTeacher={setTeacher}
        isOpen={isOpen}
        setOpen={setOpen}
        tableValue={tableValue}
        setTableValue={setTableValue}
      /> */}
    </>
  );
}
