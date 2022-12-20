import { Link } from 'react-router-dom';

const Item = ({id, categoryID, image, title, price, stock, description}) => {
    return (
            <div className="product-container">
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <div className="product-info">
                    <h3 id="title">{title}</h3>
                    <p id="price">Precio: ${price}</p>
                    <p id="stock">Stock: {stock}</p>
                    <p id="desc">Descripcion: {description}</p>
                </div>
                <div className="product-detalle">
                <Link to={`/item/${id}`}><button>Ver Detalle</button></Link>
                </div>
            </div>
    );
}

export default Item;