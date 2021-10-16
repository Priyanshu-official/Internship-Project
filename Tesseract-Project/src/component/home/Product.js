import React from 'react'
import { useStateValue } from '../../Server/stateProvider'
import './product.css'

function Product({id,title,price, image,discount}) {
    
    // const [{basket}, dispatch] = useStateValue()
    // console.log('basket content', basket)
    // const addToBasket = () =>{
    //     dispatch({
    //         type:'Add_To_Basket',
    //         item:{
    //             id: id,
    //             title:title,
    //             image:image,
    //             price:price,
    //             discount:discount
    
    //         }
    //      })
    // }

    return (
            <div className="product">
             <img src={image} alt="" />
            <div className="productContainer">
                <div className="productInfo">
                    <p>{title}</p>
                    <p className="productPrice">
                        <small>$</small>
                        <strong>{price}</strong>
                        <small className="productDiscount">{discount}</small>
                    </p>
                <button className="productButton" >Add to cart</button>    
                </div>
            </div>
        </div>
    )
}

export default Product;