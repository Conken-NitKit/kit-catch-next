import React from "react";
import Header from "../../components/common/Header";
import LineKey from "../../components/line-key/LineKey";
import NavigationBar from "../../components/common/NavigationBar";
import UsageView from "../../components/line-key/Usage";

export default function Landing() {
    return (
        <>
            <Header page={"LINE連携"} />
            <LineKey />
            <UsageView left={8} />
            <NavigationBar page={"LINE連携"} />
        </>
    )
}