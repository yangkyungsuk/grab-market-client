import React from 'react';
import './index.css'; // exprot 할것이 없을때는 from 을 뺀다.
import axios from "axios";
import {Link} from "react-router-dom";

function MainPage(){
        const [products, setProducts] = React.useState([]);
        // useEffect를 쓰면 한번만 불러온다.
        React.useEffect(
            function(){
                axios.get("https://e856a417-682b-4f7f-b7b3-f566273180af.mock.pstmn.io/products")
                .then(function(result) {
                    const products = result.data.products;
                    setProducts(products);
                })
                .catch(function(error) {
                    console.error('에러 발생 :', error);
                });
            },[]);
      
    
    return (
        <div>
        <div id="header">
        <div id="header-area">
            <img src="images/icons/logo.png" />
        </div>
        </div>
        <div id="body">
        <div id="banner">
            <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
                {
                    products.map(function(product, index){
                    return (
                        <div className="product-card">
                            <Link className="product-link" to={'/product/${index}'}>
                                <div>
                                    <img className="product-img" 
                                    src={product.imageUrl}/>
                                </div>
                                <div className="product-contents">
                                    <span className="product-name">
                                        {product.name}
                                    </span>
                                    <span className="product-price">
                                        {product.price}원
                                    </span>
                                    <div className="product-seller">
                                        <img className="product-avatar" src="images/icons/avatar.png" />
                                        <span>{product.seller}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>  
                        );
                    })}
                            
                </div>
            </div>
            <div id="footer"></div>
        </div>

        )
        }

export default MainPage;