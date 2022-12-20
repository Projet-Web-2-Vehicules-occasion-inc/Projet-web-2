import FormFilter from "./FormFilter"
import SelectionVoiture from "./SelectionVoiture"
import {FormattedMessage} from 'react-intl';
import { useNavigate} from "react-router-dom";
/* import carImage from './img/com-soon.png' */

/* photos*/
import voiture from './img/voiture-presentation.png';

import cles from './img/cles.jpg'

/* css */
import '../../css/home.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {URL} from "../constantes";

const Home = () => {
    const navigate = useNavigate()
    const [voitures, setVoitures] = useState([])
    const [selectConstructeurs, setSelectConstructeurs] = useState([])

    useEffect(() => {
        const getVoitures = async () => {
            const res = await fetch(`${URL}/api/v1/voiture`)
            const data = await res.json()
            setVoitures(await data)
        }
        getVoitures()
    }, [])

    useEffect(() => {
        axios.get(`${URL}/api/v1/constructeur`)
            .then(res => {
                setSelectConstructeurs(res.data)
            })
    }, [])

    const getResultat = (props) => {
        localStorage.setItem('voituresInitiales',JSON.stringify(props))
        setVoitures(props)
        navigate('/app/voiture/liste')
    }


    return (
        <main className='container container-spacing'>
            <div className="container-bandeau-filtres">
                <div className="d-flex justify-content-between mb-5 py-3 flex-container">
                    <FormFilter
                        size={"23rem"}
                        height={"25rem"}
                        getResultat ={getResultat}
                        constructeurs = {selectConstructeurs}
                    />
                    <div className="img-presentation-wrapper">
                        <img className='col-sm-8 rounded img-presentation-container' src={voiture}
                             alt="Voiture de présentation"/>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={cles} className='img-cles bd-placeholder-img img-fluid rounded-start'/>
                    </div>
                    <div className="col-md-8">
                        <div className="text-wrapper">
                            <div className="card-body">
                                <h4 className="card-title confiance-title"><FormattedMessage id="home.confiance-title"/>
                                </h4>
                                <p className="card-text confiance-text"><FormattedMessage id="home.confiance-texte-1"/>
                                </p>
                                <p className="card-text confiance-text"><FormattedMessage id="home.confiance-texte-2"/>
                                </p>
                                <p className="card-text confiance-text"><FormattedMessage id="home.confiance-texte-3"/>
                                </p>
                                <p className="card-text confiance-text"><FormattedMessage id="home.confiance-texte-4"/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Home
