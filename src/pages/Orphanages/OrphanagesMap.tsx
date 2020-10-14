import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';

import MarkerSVG from '../../assets/images/local.svg';

import '../../assets/styles/pages/orphanage-map.scss';
import 'leaflet/dist/leaflet.css';

const OrphanagesMap = () => {

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={MarkerSVG} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Curitiba</strong>
                    <span>Paraná</span>
                </footer>
            </aside>

            <Map
                center={[-10.9306845, -37.0504609]}
                zoom={15}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus 
                    size={32}
                    color="#FFF"
                />
            </Link>
        </div>
    )
}

export default OrphanagesMap;