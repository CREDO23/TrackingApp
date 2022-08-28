/** @format */
import './Map.css';
import React from 'react';
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
} from '@react-google-maps/api';
const Map = () => {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyDL4sgkf_EkgpdFvmjSI8039EzNZi6M6Qc',
	});

	if (!isLoaded) return <h1>Error</h1>;

	const center = { lat: -1.692603, lng: 29.238165 };

	return (
		<div className='div'>
			<GoogleMap
				center={center}
				zoom={12}
				mapContainerStyle={{ width: '100&', height: '100%' }}>
				<Marker position={center} />
			</GoogleMap>
		</div>
	);
};

export default Map;
