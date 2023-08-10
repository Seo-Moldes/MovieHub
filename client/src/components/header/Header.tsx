import { Link } from "react-router-dom";
import { HeaderStyles } from "..";
import { Modal } from '../modal/Modal';

export const Header = () => {
  
 
  return (
    <HeaderStyles>
      <div className="div-header1">
        <Link to={"/"}><h2>MovieHUB</h2></Link>
      </div>
      <div className="div-header2"></div>
      <div className="div-header3">
      
       <Modal/>
      </div>
     
    </HeaderStyles>
  );
};
