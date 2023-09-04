import styled from 'styled-components';
import { imageFondo4 } from '../../assets/img';

export const FooterStyles = styled.footer`

grid-area: 5 / 1 / 6 / 6;
background-color: gray;
background-image: url(${imageFondo4});
background-size: cover;

display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;

.div-footer1 {
display: grid;
grid-area: 1 / 1 / 2 / 2;
justify-content: center;
align-items: center;

}
.div-footer2 { 
display:grid; 
grid-area: 1 / 2 / 2 / 3;
justify-content: center;
align-items: center; 
}
.div-footer3 {
display:grid;  
grid-area: 1 / 3 / 2 / 4;
justify-content: center;
align-items: center;
 }
    
`;