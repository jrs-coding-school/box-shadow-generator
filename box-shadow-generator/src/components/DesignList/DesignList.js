import './DesignList.css'
import React from 'react'
import DesignCard from '../DesignCard/DesignCard'

export default function DesignList({ designs }) {
    return (
        <div>
            {designs?.map((design, i) => (
                <DesignCard key={design.id} design={design} />
            ))}
        </div>
    )
}
