import React from 'react'
import './CssPreview.css'

export default function CssPreview({ x, y, blur, grow, inset, color, opacity }) {

    const cssText = `.element {
        box-shadow: ${x}px ${y}px ${blur}px ${grow}px${inset ? ' inset' : ''} ${color + opacity};
        }`

    function handleCopyClicked() {
        navigator.clipboard.writeText(cssText);
    }

    const codeArr = getCodeLines(cssText);

    function getCodeLines(text) {
        let arr = [];

        let cBraceIndex = text.indexOf('{')
        arr.push(text.slice(0, cBraceIndex + 1));
        let sColonIndex = text.indexOf(';')
        arr.push(text.slice(cBraceIndex + 1, sColonIndex + 1));
        arr.push(text.slice(sColonIndex + 1, text.length));

        return arr;
    }

    return (
        <div className='css-preview-root'>
            {codeArr.map((text, i) => (
                <code key={i}
                    className={(i == 0 || i == codeArr.length - 1) ? '' : 'tab-1'}
                >
                    {text}
                </code>
            ))}

            <button onClick={
                handleCopyClicked
            }>copy</button>
        </div>
    )
}
