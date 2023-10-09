import styled from 'styled-components';

export const CardStyles = styled.div`


display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 160px;
  height: 280px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  box-shadow: 0px 10px 15px ;
  border-radius:5px;


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

  .button_delete {
    background-color: black;
    color: white;
    border-radius: 5px;
    box-shadow: 1px 2px 3px;
    width:40px;
    height:23px
    
  }

  .button_delete:hover {

    background-color: white;
    color: black;
  }

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

  .title_h2 {

    font-size:12px;
    margin-top:5px;
    
  }

  .score_h4 {

    margin-bottom:5px;
    
  }

  .genre_h3 {

    font-size:10px;
    
  }

`;