import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';

import MarkerSVG from '../../assets/images/local.svg';

import '../../assets/styles/pages/orphanage-map.scss';
import api from '../../services/api';
import mapIcon from '../../utils/mapIcon';

interface Orphanage {
	id: number;
	latitude: number;
	longitude: number;
	name: string;
}

const OrphanagesMap = () => {

	const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

	useEffect(() => {
		api.get('orphanages')
			.then(res => {
				setOrphanages(res.data);
			})
	}, [])

	return (
		<div id="page-map">
			<aside>
				<header>
					<img src={MarkerSVG} alt="Happy" />

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

				{orphanages.map(orphanage => {
					return (
						<Marker
							key={orphanage.id}
							icon={mapIcon}
							position={[orphanage.latitude, orphanage.longitude]}
						>
							<Popup
								closeButton={false}
								minWidth={240}
								maxHeight={240}
								className="map-popup"
							>
								{orphanage.name}
								<Link to={`/orphanages/${orphanage.id}`}>
									<FiArrowRight size={20} color="#FFF" />
								</Link>
							</Popup>
						</Marker>
					)
				})}
			</Map>

			<Link to="/orphanages/create" className="create-orphanage">
				<FiPlus
					size={32}
					color="#FFF"
				/>
			</Link>
		</div>
	)
}

export default OrphanagesMap;