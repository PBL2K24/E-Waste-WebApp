import React, { useState, useEffect, useRef } from "react";
import getLocation from "../utils/getlocation";
import mapboxgl , {Map, Popup} from "mapbox-gl";
import { facility } from "../data/facility";
import { calculateDistance } from "../utils/calculateLocation";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

const Facility = {
  address: "",
  distance: 0,
  name: "",
  capacity: 0,
  lon: 0,
  lat: 0,
  contact: "",
  time: "",
  verified: false,
};

const Efacilty = () => {
  const [facilityData, setFacilityData] = useState(Facility);
  const [clientLocation, setClientLocation] = useState([]);
  const markersRef= useRef([]);
  const mapRef = useRef(Map | null);
  const userMarkersRef= useRef(mapboxgl.Marker | null);
  const [selectedFacility, setSelectedFacility] =useState(-1);
  const cardContainerRef = useRef(null)
  useEffect(() => {
    // Initialize map when component mounts
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2h1ZW5jZSIsImEiOiJjbG9wcmt3czMwYnZsMmtvNnpmNTRqdnl6In0.vLBhYMBZBl2kaOh1Fh44Bw";

    setClientLocation([75.7139, 19.7515]);
  }, []);

  useEffect ( () => {
    if (clientLocation.length > 0) {
      const sortedFacilities = facility
        .map((facility) => ({
          ...facility,
          distance: calculateDistance(
            clientLocation[1],
            clientLocation[0],
            facility.lat,
            facility.lon
          ),
        }))
        .sort((a, b) => a.distance - b.distance);
  
      setFacilityData(sortedFacilities);
      console.log("Facility DATA: ", facilityData);
      console.log("Sorted List: ", sortedFacilities)
  
      // Initialize map once clientLocation is available
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: clientLocation,
        zoom: 10,
      });
      
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      });
  
      map.addControl(geocoder);
  
      geocoder.on("result", function(event) {
        const { geometry, place_name } = event.result;
      
        if (geometry && geometry.coordinates) {
          const center = geometry.coordinates;
      
          const selectedLocationMarker = new mapboxgl.Marker()
            .setLngLat(center)
            .addTo(map);
      
          const popup = new mapboxgl.Popup().setHTML(
            `<h3 class="font-bold text-emerald-600 text-2xl">Selected Location</h3>
            <p>Address: ${place_name || "Address not available"}</p>`
          );
      
          selectedLocationMarker.setPopup(popup);
      
          // Find the nearest facility
          let nearestFacility = facility[0];
          let nearestDistance = calculateDistance(
            center[1],
            center[0],
            facility[0].lat,
            facility[0].lon
          );
      
          facility.forEach(facility => {
            const distance = calculateDistance(
              center[1],
              center[0],
              facility.lat,
              facility.lon
            );
      
            if (distance < nearestDistance) {
              nearestFacility = facility;
              nearestDistance = distance;
            }
          });
          // getDirections(center, [nearestFacility.lon, nearestFacility.lat]);
        }
      }
      );
      map.addControl(new mapboxgl.NavigationControl(), "bottom-right")

      const userMarker = new mapboxgl.Marker({ color: "#256dd9" })
        .setLngLat(clientLocation)
        .addTo(map);

        userMarkersRef.current = userMarker;

      sortedFacilities.forEach((facility,index)=>{
        const popup1= new Popup().setHTML(
          `<h3 class="font-bold text-emerald-600 text-2xl">${facility.name}</h3>
              <p>Capacity: ${facility.capacity}</p>
              <p>Address: ${facility.address}</p>
              <p class="text-gray-600">Contact: ${facility.contact}</p>
              <p class="text-gray-600">Time: ${facility.time}</p>
              <p class="text-gray-600 ">Distance: ${facility.distance.toFixed(
                2
              )} km away</p>`
        );

        const marker = new mapboxgl.Marker({
          color: selectedFacility === index? "#02703f" : "#22b371",
        })
          .setLngLat([facility.lon,facility.lat])
          .setPopup(popup1)

        markersRef.current.push(marker);

        marker.addTo(map);

        marker.getElement().addEventListener("click", () => {
          const marker = markersRef.current[index];
          const popup1 = marker.getPopup();
          console.log("Hello:- ", markersRef, "Index", index);
          if (popup1) {
            if (popup1.isOpen()) {
              popup1.remove();
            } else {
              if (mapRef.current) {
                popup1.addTo(mapRef.current);
              }
            }
          }
          setSelectedFacility(index);
        });
        
        popup1.on("close", () => {
          setSelectedFacility(null);
        });

      });

      return () => {
        map.remove();
      };

    }
  }, [clientLocation,selectedFacility]); // Add clientLocation as a dependency
  
  useEffect(() => {
    if (
      selectedFacility !== null &&
      cardContainerRef.current &&
      mapRef.current
    ) {
      cardContainerRef.current.scrollTo({
        top: selectedFacility * 120,
        behavior: "smooth",
      });
    }
  }, [selectedFacility]);

  useEffect(() => {
    if (selectedFacility !== null && mapRef.current && markersRef.current) {
      const selectedMarker = markersRef.current[selectedFacility];
      const selectedMarkerLngLat = selectedMarker.getLngLat();

      mapRef.current.flyTo({
        center: selectedMarkerLngLat,
        essential: true,
      });

      markersRef.current.forEach((marker, index) => {
        marker.getElement().addEventListener("click", () => {
          setSelectedFacility(index);
        });
      });

      selectedMarker.getElement().click();
    }
  }, [selectedFacility])
  
  return(
    <>
    <h1>This is  Map Page</h1>
    <div id="map" className="w-[100%] h-[500px]"></div>
    </>
  )
      

  };
export default Efacilty;
