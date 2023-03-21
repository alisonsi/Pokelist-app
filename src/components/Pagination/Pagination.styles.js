import styled from "styled-components";

export const PaginationStyle = styled.div`
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 65%; */
  }
  .pagination_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .prev > button,
  .next > button {
    background-color: black;
    color: white;
    width: 36px;
    height: 25px;
    border-radius: 5px;
    border: none;
    box-shadow: -1px 2px 1px 0px gray;
    margin: 2px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .prev > button:hover,
  .next > button:hover {
    cursor: pointer;
  }
  .index {
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .count_index {
    background: cornflowerblue;
    padding: 5px;
    margin: 5px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    color: white;
  }
`