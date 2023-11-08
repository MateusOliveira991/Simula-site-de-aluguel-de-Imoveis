import './MapPage.css'
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '350px',
  height: '180px',
  border: 'solid gray',

};

const position= ({
  lat: -22.511875, 
  lng: -43.158639
})

function MapPage() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCpF9o9q-3lYHallq_DnO-SMZ28D5et4RE"
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={13}
      >
           <Marker
            position={position}
            options={{
              label: {
                text: "Posição da Casa",
                className: "map-marker",
              },
            }}
          />
        <></>
      </GoogleMap>
  ) : <></>
}

export default MapPage