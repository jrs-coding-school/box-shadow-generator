import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import DesignList from '../DesignList/DesignList'
import './BrowseDesignsPage.css'
import http from '../../services/http.service'

export default function BrowseDesignsPage() {

    const [designs, reloadDesigns] = useFetch(http.getAllDesigns());

    return (
        <div>
            <button>+ New</button>
            <DesignList designs={designs} />
        </div>
    )
}
