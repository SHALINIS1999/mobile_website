import React, { useEffect, useState } from "react";
import "./cardshop.css"
import axios from "axios";
import { BsCurrencyDollar } from "react-icons/bs";
import { PiShoppingCartLight } from "react-icons/pi";
import NavBar from "./NavBar";
import Footer from "./Footer";

function CardShop() {
    const [apicalling, setapicalling] = useState([])
    const handle = async () => {
    const handleapi = await axios.get("https://dummyjson.com/products/category/smartphones")
    setapicalling(handleapi.data.products)
    }

    useEffect(() => {
        handle()
    }, [])

    return (
     <div>
        <NavBar />
    <div className="eg">
    {apicalling.map((da) => (
    <div key={da.id}>
    <div className="card">
        <img src={da.thumbnail} />

        <h2>{da.title}</h2>
        <p className="para">
            {da.description}</p>
        <div className="rating-row">
            <div className="star-price">
                <span className="stars">★★★★★</span>
                <span className="price">
                    <h3><BsCurrencyDollar size={17} />{da.price}</h3>
                </span>
            </div>
            <div className="brand-rating">
                <span className="brand"><b>Brand:</b> {da.brand}</span>
                <span className="rating"><b>Review:</b> {da.rating}</span>
                <span className="rating"><b>warranty:</b> {da.warrantyInformation}</span>
            </div>
        </div>

        <button className='btn btn-warning'>
            <PiShoppingCartLight size={23} /><b>Add to cart</b></button>
    </div>
    </div>
    ))
    }

        </div>
        <Footer />
    </div>
    )
}

export default CardShop

