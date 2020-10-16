import Leaflet from 'leaflet';

import MarkerSVG from '../assets/images/local.svg';

const mapIcon = Leaflet.icon({
    iconUrl: MarkerSVG,

    iconSize: [48, 58],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

export default mapIcon;
