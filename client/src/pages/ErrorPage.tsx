import { imageError } from "../assets/img"
import {useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
const navigate = useNavigate()
setTimeout(() => {
  navigate("/")
}, 5000);
  return (
    <>
    
    <img src={imageError}/>
    
    </>
  )
}

