import { useEffect, useState } from "react";
import './styles.css';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import { OrderLocationdata, Product } from './types';
import { fetchProducts } from '../api';
import OrdersLocation from "./OrderLocation";


function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [OrderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() => {
        fetchProducts() 
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, []);
    
    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />
            <OrdersLocation onChangeLocation={location =>setOrderLocation(location)}/>
        </div>
    )
}

export default Orders;