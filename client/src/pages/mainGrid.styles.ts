import styled from 'styled-components';

export const MainGrid = styled.div`

display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
height: 100vh;
width: 100vw;


.mainGrid {
    grid-area: 2 / 1 / 5 / 6;
display: grid;
align-items:center;
justify-content: center;
overflow: auto;

}
    
`;