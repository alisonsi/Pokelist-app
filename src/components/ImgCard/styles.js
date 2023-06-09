import styled from 'styled-components';
export const Content = styled.div`
a {
    text-decoration: none;
  }
  
  .item {
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
    cursor: pointer;
  }
  .item > .name {
    position: absolute;
    bottom: 0px;
    text-align: center;
    text-transform: capitalize;
    padding-left: 10px;
    padding-right: 10px;
  }
  /* .item_img:hover{
     
  } */
  .scaleImg {
    transition: 0.5s;
    transform: scale(1.3);
    max-width: 50%;
  }
  .scaleImgNone {
    max-width: 50%;
    transition: 0.5s;
    transform: scale(1);
  }
  @keyframes scaleImg {
    0% {
      transform: scale(1);
    }
  
    100% {
      transform: scale(1.5);
    }
  }
  
`