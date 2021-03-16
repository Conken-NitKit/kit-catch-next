import styled from "styled-components";
import { Header } from "../../components/common/Header"
import { ClassRadio } from "../../components/signin/ClassRadio";

const Message = styled.div`
font-size: 30px;
text-align: center;
position: absolute;
top: 13%;
color: black;
width: 100vw;
`;

const Container = styled.div`
z-index: 1;
padding-bottom: 260px;
`;

export default function Landing() {
    return (
        <>
            <Header page={"サインイン"} left={0} />
            <Container>
                <ClassRadio />
                <Message>サインインする</Message>
            </Container>
        </>
    );
}