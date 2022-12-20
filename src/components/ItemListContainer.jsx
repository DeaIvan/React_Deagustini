import { useEffect, useState } from 'react';
import ItemList from './ItemList.jsx';
import fetchData from '../utils/fetchData';
import {useParams} from 'react-router'
import data from '../utils/data.js';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { categoryID } = useParams();
    console.log(categoryID);
    //componentDidMount
    useEffect(() => {
        if (categoryID) {
            fetchData(2000, data.filter(item => item.categoryID === parseInt(categoryID)))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        } else {
            fetchData(2000, data)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        }
    }, [categoryID]);

    return (
            <ItemList item={datos}/>
            );
}

export default ItemListContainer;