import React from 'react';
import './app.scss';
import purse from './purse.jpeg';
import pursezara from './pursezara.jpeg';
import pursemini from './pursemini.jpeg';
function Services() {
	return (
		<div>
			<h1>Services</h1>
			<div className="content">

				<div className="item">
					<img src={pursezara} alt="product-item-1" />
					<p>Lorem Ipsum is simply dummy text.</p>
				</div>

				<div className="item">
					<img src={purse} alt="product-item-2" />
					<p>Lorem Ipsum is simply dummy text.</p>
				</div>

				<div className="item">
					<img src={pursemini} alt="product-item-3" />
					<p>Lorem Ipsum is simply dummy text.</p>

				</div>
				<div className="item">
					<img src={pursezara} alt="product-item-4" />
					<p>Lorem Ipsum is simply dummy text .</p>
				</div>
				<div className="item">
					<img src={purse} alt="product-item-5" />
					<p>Lorem Ipsum is simply dummy text .</p>
				</div>
				<div className="item">
					<img src={pursemini} alt="product-item-6" />
					<p>Lorem Ipsum is simply dummy text .</p>
				</div>
			</div>
		</div>
	);
}
export default Services;