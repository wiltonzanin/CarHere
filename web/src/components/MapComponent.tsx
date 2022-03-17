import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Box, Flex } from "@chakra-ui/react";
import L from "leaflet";


export default function MapComponent(){

  return(
    <Box >

  <MapContainer center={[-24.9636888,-53.5074569]} zoom={15}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  <Marker position={[-24.9636888,-53.5074569]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </Box>
  )
}