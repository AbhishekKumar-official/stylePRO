import React, { Component } from 'react'
import {SHOP_DATA} from "./shop.data"

import PreviewCollection from "../../components/preview-collection/preview-collection.component"
class Shop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collections:SHOP_DATA
        }
    }
    
    render() {
        const {collections} = this.state;
        console.log("collections",collections)
        return (
            <div>
                {
                    collections.map(({id,title,imageUrl,items})=>(
                        <PreviewCollection key={id} title={title} imageUrl={imageUrl} items={items}/>
                      ))
                }
                
            </div>
        )
    }
}
export default Shop