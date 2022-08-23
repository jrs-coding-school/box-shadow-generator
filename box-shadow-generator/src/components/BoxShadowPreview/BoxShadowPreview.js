import React from 'react'
import './BoxShadowPreview.css'

export default function BoxShadowPreview({ x, y, blur, grow, inset, color }) {

    let style = {
        boxShadow:
            `
            ${x}px 
            ${y}px 
            ${blur}px 
            ${grow}px 
            ${inset ? 'inset' : ''} 
            #${color}
        `
    }

    return (
        <div className='preview-root'>
            <div className='preview-actual' style={style}>
                I'm baby everyday carry celiac swag umami pabst butcher big mood hoodie, farm-to-table iPhone readymade. Cronut gatekeep hoodie shaman tbh readymade hot chicken woke chia thundercats ennui bespoke unicorn edison bulb four loko. XOXO migas lomo disrupt.
            </div>
        </div>
    )
}
