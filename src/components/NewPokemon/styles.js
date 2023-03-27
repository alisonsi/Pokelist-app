
import styled from 'styled-components';
export const Content = styled.div`
.btn_select{
    border: solid 1px darkgray;
    padding: 5px;
    border-radius: 4px;
    box-shadow: -1px 1px 1px 0px;
    font-size: 15px;
}
form{
    height: 300px;
    width: 200px;
    box-shadow: -1px 1px 1px 1px gray;
    border: solid 1px gray;
    border-radius: 4px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-top:16px;
    flex-direction: column;
}
form > label> input{
    width: 100%;
    margin-bottom: 8px;
    margin-top: 8px;
}

form >  button{
    background-color: white;
    font-weight: bold;
    box-shadow: 0px 2px 1px 1px gray;
    border: solid 1px gray;
    border-radius: 4px;
    font-size: 12px;
    padding: 8px;
}
`