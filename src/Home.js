import React from 'react';
import './app.scss';
import purse from './purse.jpeg';
import pursezara from './pursezara.jpeg';
import pursemini from './pursemini.jpeg';
function Home() {
	return (
		<div className="containt">
			<div className="product-image">
				<img src={pursezara} alt="product-item-1" />
				<p>Rs.500</p>
			</div>
			<div className="product-image">
				<img src={purse} alt="product-item-2" />
				<p>Rs.2000</p>
			</div>
			<div className="product-image">
				<img src={pursemini} alt="product-item-3" />
				<p>Rs.1000</p>
			</div>
		</div>
	);
}
export default Home;