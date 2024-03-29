import { Header, NavigationBar } from "components/common";
import { LineKey, Usage } from "components/line-key";

export default function Landing() {
  return (
    <>
      <Header page={"LINE連携"} left={8} />
      <LineKey />
      <Usage left={8} />
      <NavigationBar page={"LINE連携"} />
    </>
  );
}
