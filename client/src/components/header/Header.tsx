import { HeaderStyles } from "..";
import { Modal } from '../modal/Modal';

export const Header = () => {
  
 
  return (
    <HeaderStyles>
      <div className="div-header1">
        <h2>MovieHUB</h2>
      </div>
      <div className="div-header2"></div>
      <div className="div-header3">
      
       <Modal/>
      </div>
      
    </HeaderStyles>
  );
};
