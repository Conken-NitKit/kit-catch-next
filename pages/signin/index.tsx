import styled from "styled-components";
import { Header } from "components/common";
import { ClassRadio } from "components/signin";


const Container = styled.div`
padding-bottom: 5vw;
`;

export default function Landing() {
    return (
        <>
            <Header page={"サインイン"} left={0} />
            <Container>
                <ClassRadio />
            </Container>
        </>
    );
}