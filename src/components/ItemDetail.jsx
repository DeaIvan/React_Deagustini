import '../App.css';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const {addToCart} = useContext(CartContext);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        addToCart(item, qty);
    }
    return (
        <>
        {
        item && item.image
        ?
        <div className="product-container-detail">
            <div className="product-img-detail">
                <img src={item.image} alt="" />
            </div>
            <div className="product-info-detail">
                <h3 id="title-detail">{item.title}</h3>
                <p id="price-detail">Precio: ${item.price}</p>
                <p id="stock-detail">Stock: {item.stock}</p>
                <p id="desc-detail">Descripcion: {item.description}</p>
                <div className="product-detalle-detail">
                {
                    itemCount === 0
                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                    : <Link to='/cart' style={{textDecoration: "none"}}><button className ='addCart' variant="contained" color="secondary">Ir al carrito</button></Link>
                }
                </div>
            </div>
        </div>
        : <p className='load'>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;