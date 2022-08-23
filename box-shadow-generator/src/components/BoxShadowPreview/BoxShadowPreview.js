import React from 'react'
import './BoxShadowPreview.css'

export default function BoxShadowPreview({ shadow }) {
    return (
        <div className='preview-root'>
            <div className='preview-actual'>
                {shadow}
            </div>
        </div>
    )
}
