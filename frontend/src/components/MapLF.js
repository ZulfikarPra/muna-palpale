import React, { Component, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import borderL from '../data/lanobake.json'; 
import borderM from '../data/moolo.json';

function MapLF(){
  const position = [-4.79338, 122.8680];
  const mangrove = [-4.78, 122.8561];
  const labonsa = [-4.7652, 122.8735];

  const markerIcon = new L.Icon({
    iconUrl: require('../asset/marker.png'),
    iconSize: [25, 41],
  })

  useEffect(() => {
    console.log(borderL)
  })

  const borderLanobake = {
    fillColor: 'pink',
    color: 'red'
  }

  const borderMoolo = {
    fillColor: 'blue',
    color: 'red'
  }

  return(
    <MapContainer className = 'map' center = {position} zoom = {14} style = {{height:650, width: "100%"}}>
      <TileLayer
        attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <GeoJSON style={borderLanobake} data={borderL.features} />
      <GeoJSON style={borderMoolo} data={borderM.features} />
      <Marker position={mangrove} icon={markerIcon}>
        <Popup>
          <b>Wisata Hutan Mangrove</b>
        </Popup>
      </Marker>
      <Marker position={labonsa} icon={markerIcon}>
        <Popup>
          <b>Wisata Air Terjun Labonsa</b>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapLF;