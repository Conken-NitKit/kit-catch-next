import { useState } from "react";
import { Header, NavigationBar } from "components/common";
import { TableForm, TimeTable } from "components/table"

export default function Table() {

    const [teacher, setTeacher] = useState<string>("")
    const [isOpen, setOpen] = useState<boolean>(false)
    const [day, setDay] = useState<string>("")
    const [time, setTime] = useState<number>(-1)
    const [subject, setSubject] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [tableValue, setTableValue] = useState<{
        monday: { subject: string, description: string, teacher: string }[],
        tuesday: { subject: string, description: string, teacher: string }[],
        wednesday: { subject: string, description: string, teacher: string }[],
        thursday: { subject: string, description: string, teacher: string }[],
        friday: { subject: string, description: string, teacher: string }[]
    } | null>(null)

    return (
        <>
            <Header page={"時間割"} />
            <TimeTable
                tableValue={tableValue}
                setDay={setDay}
                setTime={setTime}
                setSubject={setSubject}
                setDescription={setDescription}
                setTeacher={setTeacher}
                setOpen={setOpen}
            />
            <NavigationBar page={"時間割"} />
            <TableForm
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
            />
        </>
    )
}