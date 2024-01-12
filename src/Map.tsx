import "./App.css";
import { useEffect } from "react";
import EsriMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

function Map() {
  useEffect(() => {
    const map = new EsriMap({
      basemap: "topo-vector",
    });

    // @ts-ignore
    const view = new MapView({
      map: map,
      center: [-77, 39],
      zoom: 7,
      container: "mapDiv",
    });
  }, []);

  return <div id="mapDiv"></div>;
}

export default Map;
