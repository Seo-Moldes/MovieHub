import styled from 'styled-components';

export const HeaderStyles = styled.header`
display: grid;
background-color: gray;
grid-area: 1 / 1 / 2 / 6;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;

.div-header1 {
 display:grid;
 grid-area: 1 / 1 / 2 / 2;
 justify-content: center;
 align-items: center;

}
.div-header2 {grid-area: 1 / 2 / 2 / 3;}

.div-header3 { 
display:grid;
grid-area: 1 / 3 / 2 / 4; 
justify-content: center;
align-items: center;
}

.button-header {

    width: 5vw;
    height: 5vh;
}
    
`;