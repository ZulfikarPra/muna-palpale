import React, { Component, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import borderL from '../data/lanobake.json'; 
import borderM from '../data/moolo.json';

function MapLF(){
  const position = [-4.79338, 122.8680];

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
      <GeoJSON style = {borderLanobake} data={borderL.features} />
      <GeoJSON style = {borderMoolo} data={borderM.features} />
    </MapContainer>
  )
}

export default MapLF;