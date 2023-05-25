import React from "react";
import styled from "styled-components";
import Header from "../components/Header"; // 추후에 수정
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const index = () => {
    return (
        <Container>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: min(480px, 100%);
    min-height: 100vh;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.black}
    font-size: ${({ theme }) => theme.l};
`;

const Main = styled.main`
    width: 100%;
    height: auto;
    background-color: ${({ theme }) => theme.bg};
`;

export default index;
