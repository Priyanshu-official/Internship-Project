import React from 'react';
import { Link } from 'react-router-dom';
import '../home/category.css';
import Grocery from '../image/grocery.svg';
import Mobile from '../image/mobile.svg';
import Tag from '../image/tag.svg';
import Electronics from '../image/electronics.png';
import Fashion from '../image/fashion.png';
import Appliances from '../image/appliances.png';

export default function category() {
    return (
        <div className="category">
            <div className="categoryContainer">
                <Link path="#" className="categoryLink">
                    <div className="categoryItem">
                        <img src={Tag} alt="Top Offer " className="categoryIcon"/>
                        <span>Top offer</span>
                    </div>
                </Link>

                <Link path="#" className="categoryLink">
                    <div className="categoryItem">
                    <img src={Grocery} alt="Top Offer " className="categoryIcon"/>
                        <span>Grocery</span>
                    </div>
                </Link>

                <Link path="#" className="categoryLink">
                    <div className="categoryItem">
                    <img src={Mobile} alt="Top Offer" className="categoryIcon"/>
                        <span>Mobile</span>
                    </div>
                </Link>

                <Link path="#" className="categoryLink">
                    <div className="categoryItem">
                    <img src={Electronics} alt="Top Offer" className="categoryIcon"/>
                        <span>Electronics</span>
                    </div>
                </Link>

                <Link path="#" className="categoryLink">
                    <div className="categoryItem">
                    <img src={Appliances} alt="Top Offer" className="categoryIcon"/>
                        <span>Appliances</span>
                    </div>
                </Link>

                <Link path="#" className="categoryLink">
                    <div className="categoryItem">
                    <img src={Fashion} alt="Top Offer" className="categoryIcon"/>
                        <span>Fashion</span>
                    </div>
                </Link>

            </div>
            
        </div>
    )
}
