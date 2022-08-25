import React from 'react'
import { Link } from 'react-router-dom'
import BoxShadowPreview from '../BoxShadowPreview/BoxShadowPreview'
import './DesignCard.css'

export default function DesignCard({ design }) {
    return (
        <Link to={`/${design.id}`}>
            <div className="design-card-root">
                <BoxShadowPreview />
                <div className="bottom">
                    design name &lt;3
                </div>
            </div>
        </Link>
    )
}
