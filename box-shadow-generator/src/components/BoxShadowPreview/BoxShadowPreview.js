import React from 'react'
import './BoxShadowPreview.css'

export default function BoxShadowPreview({ x, y, blur, grow, inset, color }) {


    let style = {
        boxShadow: `
    ${x}px 
    ${y}px 
    ${blur}px 
    ${grow}px 
    ${inset ? 'inset' : ''} 
    #${color}`
    }


    return (



        <div className='preview-root'>
            <div className='preview-actual' style={style}>
                I'm baby everyday carry celiac swag umami pabst butcher big mood hoodie, farm-to-table iPhone readymade. Cronut gatekeep hoodie shaman tbh readymade hot chicken woke chia thundercats ennui bespoke unicorn edison bulb four loko. XOXO migas lomo disrupt. Ugh synth sriracha kitsch Brooklyn forage chia godard +1 DIY YOLO bodega boys. Hammock meggings health goth fit twee, semiotics locavore truffaut cray leggings pork belly readymade shoreditch gluten-free crucifix. Edison bulb man bun enamel pin lo-fi heirloom jean shorts kitsch beard hashtag banjo hoodie yr fanny pack.
            </div>
        </div>
    )
}
