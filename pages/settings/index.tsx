import React, { useState } from "react";
import Header from "../../components/common/Header";
import NavigationBar from "../../components/common/NavigationBar";
import SettingsCell from "../../components/settings/SettingsCell";
import styled from "styled-components";

const SettingsTable = styled.div`
  padding: 64px 0;
`

export default function Settings() {

    const [onTableDaily, setTableDaily] = useState<boolean>(true)
    const [onTaskDaily, setTaskDaily] = useState<boolean>(true)
    const [onTaskWeek, setTaskWeek] = useState<boolean>(true)
    return (
        <>
            <Header page={"設定"} />
            <SettingsTable>
                <SettingsCell
                    text={'お問い合わせ'}
                    hasSwitch={false}
                    isChecked={false}
                    setChecked={() => { }}
                    onClick={() => { window.open('https://twitter.com/kubo_programmer', '_blank') }}
                />
                <SettingsCell
                    text={'ログアウト'}
                    hasSwitch={false}
                    isChecked={false}
                    setChecked={() => { }}
                    onClick={() => { window.location.href = '/landing' }}
                />
                <SettingsCell
                    text={'翌日の授業時間割の通知 (毎日18:00頃)'}
                    hasSwitch={true}
                    isChecked={onTableDaily}
                    setChecked={() => { setTableDaily(!onTableDaily) }}
                    onClick={() => { }}
                />
                <SettingsCell
                    text={'翌日提出の課題の通知 (毎日18:00頃)'}
                    hasSwitch={true}
                    isChecked={onTaskDaily}
                    setChecked={() => { setTaskDaily(!onTaskDaily) }}
                    onClick={() => { }}
                />
                <SettingsCell
                    text={'今週提出のの課題の通知 (日曜日 18:00頃)'}
                    hasSwitch={true}
                    isChecked={onTaskWeek}
                    setChecked={() => { setTaskWeek(!onTaskWeek) }}
                    onClick={() => { }}
                />
            </SettingsTable>
            <NavigationBar page={"設定"} height={60} />
        </>
    )
}