import React ,{useEffect, useState} from "react"
import {Link, Route, useHistory} from "react-router-dom"
import data from "./data"
import Item from "./Item"
import styled from "styled-components"



function Shop () {
    const[products, setProducts] = useState([])
    const {push, goBack} = useHistory();

    useEffect( ()=>{
        setProducts(data)
    },[] )

    return (
        <div className="Shop">
       
            <div>
                {products.map( item => {
                    return <Item shopItem = {item} />
                })}
            </div>
           
            
        </div>
    )
}
export default Shop;
