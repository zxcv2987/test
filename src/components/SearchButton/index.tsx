import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg"; // 추후에 수정

type SearchButtonPropType = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const index = ({ onClick }: SearchButtonPropType) => {
    return (
        <SearchButton onClick={onClick}>
            <SearchIcon width="24" fill="#fff" />
        </SearchButton>
    );
};

const SearchButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 50px;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.pageBtnActive};
`;

export default index;
