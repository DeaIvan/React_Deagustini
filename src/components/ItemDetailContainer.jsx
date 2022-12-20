import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import fetchData from '../utils/fetchData';
import {useParams} from 'react-router';
import data from '../utils/data.js';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const { itemID } = useParams();

    useEffect(() => {
            fetchData(2000, data.find(item => item.id === parseInt(itemID)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

    return (
            <ItemDetail item={dato}/>
            );
}

export default ItemDetailContainer;