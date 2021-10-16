import React from 'react';
import './main.css';
import Product from './Product';
import Banner1 from '../image/banner1.jpg';
import Iphone from '../image/iphone.jpg'
import Shop from "../image/shop.svg"



 function Main() {
    return (
        <div className="home">
            <div className="banner">
                <div className="bannerContainer">
                    <img src={Banner1} alt="banner"/>
                </div>
            </div>

            {/* Top Offer Design */}
            <div className="offer">
                <h1>Top Rated Iphone</h1>
                <div className="mainContainer">
                        <div className="productRow">
                        <img src={Shop} alt="" height="450px"/>
                            <Product 
                                id="123"
                                title='Iphone X'
                                price={1200}
                                rating={5}
                                image={Iphone}
                                discount= '5%'
                            />
                            <Product 
                                id="123"
                                title='Iphone X'
                                price={1200}
                                rating={5}
                                image={Iphone}
                                discount= '5%'
                            />
                            <Product 
                                id="123"
                                title='Iphone X'
                                price={1200}
                                rating={5}
                                image={Iphone}
                                discount= '5%'
                            />
                      </div>
                </div>
        </div>

                       {/* Product */}
            <div className="productRow">
                <Product 
                    id="123"
                    title='Iphone X'
                    price={1200}
                    rating={5}
                    image={Iphone}
                    discount= '5%'
                />
                <Product 
                    id="123"
                    title='Iphone X'
                    price={1200}
                    rating={5}
                    image={Iphone}
                    discount= '5%'
                />
                <Product 
                    id="123"
                    title='Iphone X'
                    price={1200}
                    rating={5}
                    image={Iphone}
                    discount= '5%'
                />
                <Product 
                    id="123"
                    title='Iphone X'
                    price={1200}
                    rating={5}
                    image={Iphone}
                    discount= '5%'
                /> 

                <Product 
                    id="123"
                    title='Iphone X'
                    price={1200}
                    rating={5}
                    image={Iphone}
                    discount= '5%'
                />  
                <Product 
                    id="123"
                    title='Iphone X'
                    price={1200}
                    rating={5}
                    image={Iphone}
                    discount= '5%'
                />  
                
            </div>
        </div>
    );
}



export default Main;