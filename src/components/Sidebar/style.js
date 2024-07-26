import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    border-right: 1px solid #dbdbdb;
    width: 300px;
    height: 100%;
    background-color: #ffffff;
`;

export const list = css`
    height: 100%;
`;

export const listItem = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border: 1px solid #dbdbdb;
    padding: 10px 60px;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #fafafa;
    }

    &:active {  
        background-color: #eeeeee;
    }
`;

export const itemText = css`
    margin-left: 10px;
`;