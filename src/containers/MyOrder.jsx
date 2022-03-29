import React, { useContext, useState } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/MyOrder.scss';
import Checkout from '@pages/Checkout';
import arrow from '@icons/flechita.svg';

const MyOrder = ({toggleOrders, setToggleOrders}) => {
	const [ toggle, setToggle] = useState(false);
	const { state } = useContext(AppContext);
	//const { state } = useContext(AppContext); 


	// const sumTotal = () => {
	// 	const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
	// 	const sum = state.cart.reduce(reducer, 0);
	// 	return sum;
	// } 

	// const handleRemove = index => {
	// 	removeFromCart(index);
	// }
    return (
        <aside className="MyOrder">
			<div className="title-container" 
				onClick={() => setToggleOrders(!toggleOrders)}>
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			{/* <div className="my-order-content">
				{state.cart.map((product, index) => (		
					<OrderItem 
					indexValue={index}
					product={product} 
					key={index} />
				))} */}
			<div className="my-order-content">
				{state.cart.map((product) => (		
					<OrderItem 
					product={product} 
					key={`orderItem-${product.id}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${state.total}</p>
				</div>
				<button className="primary-button" onClick={() => setToggle(true)}>
					Checkout
				</button>
			</div>
			{toggle && <Checkout setToggle={setToggle}/>}
		</aside>
    );
}

export default MyOrder;