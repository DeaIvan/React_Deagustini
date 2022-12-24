import '../App.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import FormatNumber from "../utils/FormatNumber";

const Cart = () => {
    const itemsDet = useContext(CartContext);

    return (
        <div className='container'>
            <h1 className='cart-title'>Tu carrito</h1>
            <div className='cart-top'>
                <Link to='/'><button className='buttonShopping'>CONTINUAR COMPRANDO</button></Link>
                {
                    (itemsDet.cartList.length > 0)
                    ? <button className='buttonDelete' type="filled" onClick={itemsDet.clearList}>ELIMINAR TODO</button>
                    : <p>Tu carrito esta vacio</p>
                }
            </div>
            <div className='content-cart'>
                <div className='content-cart-detail'>
                    {
                        itemsDet.cartList.length > 0 &&
                        itemsDet.cartList.map(item => 
                            <section key={item.idItem}>
                            <div className='product-content'>
                                <div className='product-detail'>
                                    <span>
                                        <b>Producto:</b> {item.nameItem}
                                    </span>
                                    <button type="filled" onClick={() => itemsDet.deleteThis(item.idItem)}>ELIMINAR</button>
                                </div>
                            </div>
                            <div className='product-price'>
                                <div>
                                    <p>Cantidad: {item.qtyItem} item(s)</p>
                                    <p>Precio por unidad: ${item.costItem}</p>
                                </div>
                                 <p>Precio total: ${itemsDet.calcTotalPerItem(item.idItem)} </p>
                            </div>
                            </section>
                            )
                    }
                </div>
                {
                    itemsDet.cartList.length > 0 &&
                    <div className="order">
                        <div className='detail-shop'>
                            <h2>ORDER TOTAL</h2>
                            <div className='detail.item'>
                                <h3>Subtotal</h3>
                                <p><FormatNumber number={itemsDet.calcSubTotal()} /></p>
                            </div>
                            <div className='detail.item'>
                                <h3>Tasas</h3>
                                <p><FormatNumber number={itemsDet.calcTaxes()} /></p>
                            </div>
                            <div className='detail.item'>
                                <h3> Descuento de Tasas</h3>
                                <p>- <FormatNumber number={itemsDet.calcTaxes()} /></p>
                            </div>
                            <div className='detail.item' type="total">
                                <h3>Total</h3>
                                <p><FormatNumber number={itemsDet.calcTotal()} /></p>
                            </div>
                            <button>CHECKOUT NOW</button>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    );
}

export default Cart;