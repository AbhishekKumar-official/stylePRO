import React from 'react'
import MenuItem from "../menu-item/menu.item.card"
import "./preview-collection.scss"
const PreviewCollection = ({title,items,imageUrl}) => {
    return (    
        <div className="preview-collection">
            <h1>{title}</h1>
            <div className="mi">
                    {
                        
                        items.map((item)=>(
                            <MenuItem key={item.id} title={item.name} imageUrl={item.imageUrl}/>
                        ))
                    }
            </div>

        </div>
    )
}

export default PreviewCollection
