import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    nameItem: item.title,
                    costItem: item.price,
                    qtyItem: qty
                }
            ]);
        } else {
            //al encontrarlo, entonces aumentamos el qty de ese producto
            found.qtyItem += qty;
            setCartList([...cartList]);
        }
    }

    const clearList = () => {
        setCartList([]);
    }

    const deleteThis = (idItem) => {
        const newArray = cartList.filter(item => item.idItem !== idItem);
        setCartList(newArray);
    }

    const calcTotalPerItem = (idItem) => {
        let index = cartList.findIndex(item => item.idItem === idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTaxes = () => {
        return calcSubTotal() * 0.18;
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }


    return (
        <CartContext.Provider value={{cartList, addToCart, clearList, deleteThis, calcTotalPerItem, calcSubTotal, calcTaxes, calcTotal, calcItemsQty}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider


