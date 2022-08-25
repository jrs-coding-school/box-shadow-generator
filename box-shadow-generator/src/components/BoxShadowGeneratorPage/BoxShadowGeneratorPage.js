import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import http from '../../services/http.service'
import BoxShadowControls from '../BoxShadowControls/BoxShadowControls'
import BoxShadowPreview from '../BoxShadowPreview/BoxShadowPreview'
import CssPreview from '../CssPreview/CssPreview'
import './BoxShadowGeneratorPage.css'

export default function BoxShadowGeneratorPage() {

    const { id } = useParams();

    const [shadow, setShadow] = useState({
        id: '',
        x: 2,
        y: 5,
        blur: 15,
        grow: 0,
        inset: false,
        color: '#000000',
        opacity: 99
    });

    useEffect(() => {
        if (id !== undefined) {
            axios.get(http.getDesignById(id))
                .then(response => {
                    setShadow(response.data)
                })
                .catch(err => {
                    console.error(err);
                })
                .finally(() => { });
        }
    }, [])

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
