import React from 'react'
import BoxShadowControls from '../BoxShadowControls/BoxShadowControls'
import BoxShadowPreview from '../BoxShadowPreview/BoxShadowPreview'
import CssPreview from '../CssPreview/CssPreview'
import './BoxShadowGeneratorPage.css'

export default function BoxShadowGeneratorPage() {
    return (
        <div className="box-shadow-generator-root">
            <div className="top">
                foo bar
            </div>
            <BoxShadowPreview />
            <div className="bottom">
                <BoxShadowControls />
                <CssPreview />
            </div>
        </div>
    )
}
