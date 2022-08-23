import React, { useState } from 'react'
import BoxShadowControls from '../BoxShadowControls/BoxShadowControls'
import BoxShadowPreview from '../BoxShadowPreview/BoxShadowPreview'
import CssPreview from '../CssPreview/CssPreview'
import './BoxShadowGeneratorPage.css'

export default function BoxShadowGeneratorPage() {

    const [shadow, setShadow] = useState({
        id: '',
        x: 2,
        y: 5,
        blur: 15,
        grow: 0,
        inset: false,
        color: '#000000',
        opacity: 0.5
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
                <BoxShadowControls
                    shadow={shadow}
                    setShadow={setShadow}
                />
                <CssPreview
                    {...shadow}
                />
            </div>
        </div>
    )
}
