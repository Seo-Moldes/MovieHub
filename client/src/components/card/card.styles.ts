import styled from 'styled-components';

export const CardStyles = styled.div`


display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 160px;
  height: 280px;
 
  border: 1px solid rgba(0, 0, 0, 0.8);

  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);


  .card__div1{
    display: flex;
    width: 100%;
    height: 300px;
   
    overflow: hidden;
    padding: 0;
    &-img{
        display: block;
        position: relative;
        width: 100%;
        object-fit: cover;
    }
  }

  .card__div2 {}

  .card__div3 {

    display: flex;
    justify-content: space-between;
    gap: 60px;
   
        &-button_delete {

    background-color: red;
    width: 50px;
    height: 30px;
    
  }

  }

`;