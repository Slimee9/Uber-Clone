import React, { useState, useEffect } from 'react'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const LiveTracking = () => {
    const [ currentPosition, setCurrentPosition ] = useState(center);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
                lat: latitude,
                lng: longitude
            });
        });

        const watchId = navigator.geolocation.watchPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
                lat: latitude,
                lng: longitude
            });
        });

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    useEffect(() => {
        const updatePosition = () => {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;

                console.log('Position updated:', latitude, longitude);
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude
                });
            });
        };

        updatePosition(); // Initial position update

        const intervalId = setInterval(updatePosition, 1000); // Update every 10 seconds

    }, []);

    return (
    
        <LoadScript  googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentPosition}
                zoom={15}
            >
            <img className='w-16 ml-8 fixed left-5 top-1' src="Uber_logo.png" alt="" />
                <Marker position={currentPosition} />
                
            </GoogleMap>
        </LoadScript>
    
    )
}

export default LiveTracking



// import React, { useEffect, useState } from 'react'
// import {LoadScript, GoogleMap, Marker} from '@react-google-maps/api'

// const containerStyle = {
//     width: '100%',
//     height: '100%'
// };

// const center = {
//     lat: -3.745,
//     lng: -38.523
// };

// const libraries = ['places'];
// const LiveTracking = () => {

//     const [currentPosition, setCurrentPosition] = useState(center);


//     useEffect(() => {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const {latitude, longitude} = position.coords;
//         setCurrentPosition({
//             lat: latitude,
//             lng: longitude
//         })
//       });

//       const watchId = navigator.geolocation.watchPosition((position) => {
//         const { latitude, longitude} = position.coords;
//         setCurrentPosition({
//             lat: latitude,
//             lng: longitude
//         })
//       });

//       return () => {
//         navigator.geolocation.clearWatch(watchId);
//       }
//     }, []);

//     useEffect(() => {
//         const updatePosition = () => {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 const {latitude, longitude} = position.coords;

//                 console.log('Position updated', latitude, longitude);
//                 setCurrentPosition({
//                     lat: latitude,
//                     lng: longitude
//                 });
//             })
//         }

//         updatePosition(); 

//         const intervalId = setInterval (updatePosition, 10000);
//         return () => clearInterval(intervalId);
//     }, []);

//   return (
//     <LoadScript 
//         googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
//         libraries={libraries}
//         >
//         <GoogleMap 
//             mapContainerStyle={containerStyle}
//             center={currentPosition}
//             zoom={15}
//             >
//          {window.google?.maps && (

//             <Marker 
//                 position={currentPosition}
//                 icon={{
//                     url:'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png', 
//                     scaledSize: new window.google.maps.Size(50, 50), // Resize icon
//                     origin: new window.google.maps.Point(0, 0), // Anchor
//                     anchor: new window.google.maps.Point(25, 25), // Center the icon
//                 }} />
//          )}

//         </GoogleMap>
//     </LoadScript>
//   )
// }

// export default LiveTracking