import styled from "styled-components";

export const PokerListDetailsStyles = styled.div`
.content {
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  
  .content_item {
    display: flex;
    flex-direction: column;
  }
  
  .abilitys {
    border: solid 1px gray;
    border-radius: 20px;
    margin-top: 6px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  p {
    text-transform: capitalize;
  }
  .abilitys_list {
    width: 100%;
  }
  .abilitys_details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .abilitys_details > button {
    height: 25px;
    color: black;
    background-color: white;
    border: solid 1px gray;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
    box-shadow: -1px 1px 0px 0px gray;
  }
  .abilitys_desc {
    overflow-wrap: break-word;
    max-width: 240px;
  }
  .container_card{
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: solid 1px gray;
    border-radius: 20px;
    margin: 5px;
    margin-right: 0;
    background-color: white;
    color: black;
    font-weight: bold;
    font-size: 18px;
    box-shadow: -3px 4px 5px gray;
    padding: 20px;
  }
`