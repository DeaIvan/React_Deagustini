import '../App.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartWidget(){
  const cartItems = useContext(CartContext);
  return (
      <a className='cart' href="#">
        {
          cartItems.length === 0
          ? <span className='number none'>{cartItems.calcItemsQty()}</span>
          : <span className='number'>{cartItems.calcItemsQty()}</span>
        }
        <span className="material-symbols-rounded">shopping_cart</span>
      </a>
  )
}

export default CartWidget;    