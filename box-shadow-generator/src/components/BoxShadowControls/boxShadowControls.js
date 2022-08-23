import React from 'react'
import './BoxShadowControls.css'

export default function BoxShadowControls({ shadow, setShadow }) {

    function handleRangeChange(e) {
        const { name, value } = e.target
        console.log(value)
        setShadow({
            ...shadow,
            [name]: value
        })
    }

    return (
        <div className='controls-root'>
            <div>
                <label>&#8596;</label>
                <input
                    type='range'
                    name='x'
                    value={shadow.x}
                    onChange={handleRangeChange}
                    min="-50"
                    max="50"
                    step="0.5"
                />
            </div>
            <div>
                <label>&#8597;</label>
                <input
                    type='range'
                    name='y'
                    value={shadow.y}
                    onChange={handleRangeChange}
                    min="-50"
                    max="50"
                    step="0.5"
                />
            </div>
            <div>
                <label>Blur</label>
                <input
                    type='range'
                    name='blur'
                    value={shadow.blur}
                    onChange={handleRangeChange}
                    min="0"
                    max="100"
                    step="1"
                />
            </div>
            <div>
                <label>Grow</label>
                <input
                    type='range'
                    name='grow'
                    value={shadow.grow}
                    onChange={handleRangeChange}
                    min="-30"
                    max="30"
                    step="0.5"
                />
            </div>
            <div>
                <label>Opacity</label>
                <input
                    type='range'
                    name='opacity'
                    value={parseInt(shadow.opacity, 16)}
                    onChange={(e) => {
                        let hexStr = Number(e.target.value).toString(16);
                        console.log(hexStr)
                        setShadow({
                            ...shadow,
                            opacity: hexStr
                        })
                    }}
                    min="0"
                    max="255"
                    step='1'
                />
            </div>
            <div>
                <input
                    id='insetCheckbox'
                    type='checkbox'
                    name='inset'
                    checked={shadow.inset}
                    onChange={(e) => {
                        setShadow({
                            ...shadow,
                            inset: e.target.checked
                        })
                    }}
                />
                <label htmlFor='insetCheckbox'>Inset</label>
            </div>

            <div>
                <label>Color</label>
                <input
                    type='color'
                    name='color'
                    value={shadow.color}
                    onChange={handleRangeChange}
                />
            </div>
        </div>
    )
}
