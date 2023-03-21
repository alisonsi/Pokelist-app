import styled from 'styled-components';

export const BtnPagination = styled.button`
    background: ${props => props.primary ? "black" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    width: 25px;
    height: 25px;
    border-radius: 5px;
    border: none;
    box-shadow: -1px 2px 1px 0px gray;
    margin: 2px;
    font-weight: bold;

    &:hover{
        cursor: pointer;
    }
    &.selected{
        background-color: white !important;
        color: black;
        border: solid 1px
    }
`