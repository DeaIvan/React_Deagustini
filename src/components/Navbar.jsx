import { Link } from 'react-router-dom';
import '../App.css'
import CartWidget from './CartWidget.jsx';

function Navbar(){
  return (
      <nav className="nav">
        <Link className="logo" to='/'>
            URBANSTY.<span>LE</span>
        </Link>
        <ul className="enlaces">
            <li><Link to="/category/33">Zapatillas</Link></li>
            <li><Link to="/category/66">Remeras</Link></li>
            <li><Link to="/category/99">Pantalones</Link></li>
        </ul>
        <Link to="/cart"><CartWidget/></Link>
    </nav>
  )
}

export default Navbar;
