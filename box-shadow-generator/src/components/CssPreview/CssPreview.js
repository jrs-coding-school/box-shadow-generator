import React from 'react'
import './CssPreview.css'

export default function CssPreview({ x, y, blur, grow, inset, color }) {

    function handleCopyClicked() {
        navigator.clipboard.writeText(`.element {
            box-shadow: ${x}px ${y}px ${blur}px ${grow}px {inset ? 'inset' : ''} #${color};
            }`);
    }

    return (
        <div className='css-preview-root'>
            <code>
                .element {'{'}
            </code>
            <code className='tab-1'>
                box-shadow: {x}px {y}px {blur}px {grow}px{inset ? ' inset' : ''} #{color};
            </code>
            <code>{'}'}</code>

            <button onClick={
                handleCopyClicked
            }>copy</button>
        </div>
    )
}
