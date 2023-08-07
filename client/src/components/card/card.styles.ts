import styled from 'styled-components';

export const CardStyles = styled.div`


display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 150px;
  height: 280px;
 
  border: 1px solid rgba(0, 0, 0, 0.8);

  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  .card__header{
    display: flex;
    width: 100%;
    height: 80%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    overflow: hidden;
    padding: 0;
    &-img{
        display: block;
        position: relative;
        width: 100%;
        object-fit: cover;
    }
  }
`;