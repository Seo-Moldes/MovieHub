import styled from 'styled-components';
export const ModalStyles = styled.div`
.modal__btn-open {
    width: 5vw;
    height: 5vh;
    background-color: black;
    color: white;
    border-radius: 5px;
    box-shadow: 1px 2px 3px
}

.modal__btn-open:hover {
  background-color: white;
  color: black;
}

.btn__logout {
width: 5vw;
height: 5vh;
background-color: black;
color: white;
border-radius: 5px;
box-shadow: 1px 2px 3px
  
}

.btn__logout:hover {
  background-color: white;
  color: black;
}


.btn__login {
width: 5vw;
height: 5vh;
background-color: black;
color: white;
border-radius: 5px;
    box-shadow: 1px 2px 3px
}

.btn__login:hover {
  background-color: white;
  color: black;
}

`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  .form__modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   &-div {
    display: flex;
    flex-direction: column;
    &-label{
        font-size: 1rem;
        color: rgba(50, 50, 50, 0.8);
    }
   }

  }
  
`;

export const ModalButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;




