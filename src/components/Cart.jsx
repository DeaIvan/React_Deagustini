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
                <Link to='/'><button className='buttonShopping'>CONTINUE SHOPPING</button></Link>
                {
                    (itemsDet.cartList.length > 0)
                    ? <button className='buttonDelete' type="filled" onClick={itemsDet.clearList}>DELETE ALL PRODUCTS</button>
                    : <p>Your cart is empty</p>
                }
            </div>
            <div className='content-cart'>
                <div className='content-cart-detail'>
                    {
                        itemsDet.cartList.length > 0 &&
                        itemsDet.cartList.map(item => 
                            <section key={item.id}>
                            <div className='product-content'>
                                <img src={item.image} />
                                <div className='product-detail'>
                                <span>
                                    <b>Product:</b> {item.title}
                                </span>
                                <button type="filled" onClick={() => itemsDet.deleteItem(item.id)}>DELETE</button>
                                </div>
                            </div>
                            <div className='product-price'>
                                <div className='content-price'>
                                <p>{item.qty} item(s)</p>
                                /
                                <p>$ {item.price} each</p>
                                </div>
                                <p>$ {itemsDet.calcTotalPerItem(item.id)} </p>
                            </div>
                            </section>
                            )
                    }
                </div>
                {
                    itemsDet.cartList.length > 0 &&
                        <div className='detail-shop'>
                            <h2>ORDER SUMMARY</h2>
                            <div className='detail.item'>
                                <h3>Subtotal</h3>
                                <p><FormatNumber number={itemsDet.calcSubTotal()} /></p>
                            </div>
                            <div className='detail.item'>
                                <h3>Taxes</h3>
                                <p><FormatNumber number={itemsDet.calcTaxes()} /></p>
                            </div>
                            <div className='detail.item'>
                                <h3>Taxes Discount</h3>
                                <p><FormatNumber number={-itemsDet.calcTaxes()} /></p>
                            </div>
                            <div className='detail.item' type="total">
                                <h3>Total</h3>
                                <p><FormatNumber number={itemsDet.calcTotal()} /></p>
                            </div>
                            <button>CHECKOUT NOW</button>
                        </div>
                }
            </div>
        </div>
    );
}

export default Cart;