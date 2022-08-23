import React, { useState } from 'react'
import BoxShadowControls from '../BoxShadowControls/BoxShadowControls'
import BoxShadowPreview from '../BoxShadowPreview/BoxShadowPreview'
import CssPreview from '../CssPreview/CssPreview'
import './BoxShadowGeneratorPage.css'

export default function BoxShadowGeneratorPage() {

    const [shadow, setShadow] = useState({
        id: '',
        x: 5,
        y: 5,
        blur: 5,
        grow: 5,
        inset: false,
        color: '000000cc'
    })



    return (

        <div className="box-shadow-generator-root">
            <div className="top">
                foo bar
            </div>
            <BoxShadowPreview
                {...shadow}
            />
            <div className="bottom">
                <BoxShadowControls />
                <CssPreview
                    {...shadow}
                />
            </div>
        </div>
    )
}
