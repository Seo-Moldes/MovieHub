import { images } from "../../assets/img/index"
import { CardStyles } from "./card.styles"

export const Card = () => {


  return (

<CardStyles>

<div className="card__div1">
    <img className="card__div1-img" src={images} alt={images} />
</div>

<div className="card-text">
<h2>Salvar al soldado Ryan</h2>
</div>
<div className="card-text">
<h3>Bélico</h3>
</div>
<div className="card-text">
<h4>Año 1998</h4>
</div>

<div className="card__div2"></div>
<div className="card__div3"></div>


</CardStyles>

  )
}



