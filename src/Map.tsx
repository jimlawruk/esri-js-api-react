import "./App.css";
import { useEffect } from "react";
import EsriMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

function Map() {
  useEffect(() => {
    const map = new EsriMap({
      basemap: "topo-vector",
    });

    // @ts-ignore
    const view = new MapView({
      map: map,
      center: [-82.5, 40],
      zoom: 8,
      container: "mapDiv",
    });

    view.when(() => {
      const monuments = new FeatureLayer({
        url: "https://odotgis.dot.state.oh.us/arcgis/rest/services/OhROW/ROW_Monuments_Viewer/MapServer/0",
      });
      map.add(monuments);
      const plans = new FeatureLayer({
        url: "https://odotgis.dot.state.oh.us/arcgis/rest/services/OhROW/ROW_Monuments_Viewer/MapServer/1",
      });
      map.add(monuments);
      map.add(plans);
    });
  }, []);

  return <div id="mapDiv"></div>;
}

export default Map;
