import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { languageProps } from "shared/type/commonType"

// Import marker icons
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix marker icon issue
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const ContactMap: React.FC = () => {
    const position: [number, number] = [37.5107895236526, 127.078947683988]; // 타입스크립트에서 명시적으로 타입 설정

    return (
        <div style={{ height: '500px' }}>
            <MapContainer
                center={position}
                zoom={17}
                scrollWheelZoom={true}
                style={{
                    height: '387px', // 부모 컨테이너가 크기를 정의하도록 설정
                    width: '387px',  // 부모 폭에 맞춤
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Seeuni H.Q
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default ContactMap;
