function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: { lat: 36.04920213819668, lng: 138.08346270479805 },
      mapId: "mogi-map-419303",
    });
    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    const tourStops = [
      {
        position: { lat: 35.647850036621094, lng: 139.712646484375 },
        title: "恵比寿ビジネスタワー",
      },
      {
        position: { lat: 35.276969322753494, lng: 139.16672806574945 },
        title: "マツダ小田原小田原店",
      },
      {
        position: { lat: 35.26464550529576, lng: 139.17149964319037 },
        title: "ホンダカーズ小田原小田原店",
      },
      {
        position: { lat: 35.3295518149652, lng: 139.12459017180416 },
        title: "ホンダカーズ小田原開成店",
      },
      {
        position: { lat: 35.31483248583663, lng: 139.25030104407594 },
        title: "ホンダカーズ小田原 二宮店",
      },
      {
        position: { lat: 36.70219152314356, lng: 137.2565968553539 },
        title: "富山ダイハツ販売(株) 富山店",
      },
      {
        position: { lat: 36.638029198251, lng: 137.24217729992563 },
        title: "富山ダイハツ販売(株) 富山南店",
      },
      {
        position: { lat: 36.84141132202099, lng: 137.43603465238502 },
        title: "富山ダイハツ販売(株) 魚津店",
      },
      {
        position: { lat: 36.76334686807134, lng: 137.01894781638936 },
        title: "富山ダイハツ販売(株) 高岡店",
      },
      {
        position: { lat: 36.73259061148919, lng: 137.03963927005685 },
        title: "富山ダイハツ販売(株) 高岡南店",
      },
      {
        position: { lat: 36.64238176172795, lng: 137.00655690416318 },
        title: "富山ダイハツ販売(株) 砺波店",
      },
      {
        position: { lat: 36.717603236896664, lng: 137.22100192894064 },
        title: "トヨタモビリティ富山 本社",
      },
      {
        position: { lat: 36.69549705140526, lng: 137.23532604312217 },
        title: "トヨタモビリティ富山 ランドマークSOTY 双代",
      },
      {
        position: { lat: 36.677666195384056, lng: 137.23378531930496 },
        title: "トヨタモビリティ富山 Y-town山室",
      },
      {
        position: { lat: 36.650838262873954, lng: 137.21422715997443 },
        title: "トヨタモビリティ富山 富山南",
      },
      {
        position: { lat: 36.696205123348335, lng: 137.19612989999294 },
        title: "トヨタモビリティ富山 Ｇスクエア五福",
      },
      {
        position: { lat: 36.75901745111923, lng: 136.97791836145717 },
        title: "トヨタモビリティ富山 高岡",
      },
      {
        position: { lat: 36.72604667921078, lng: 137.02143790086896 },
        title: "トヨタモビリティ富山 高岡駅南",
      },
      {
        position: { lat: 36.63870647398004, lng: 137.02821360063564 },
        title: "トヨタモビリティ富山 砺波",
      },
      {
        position: { lat: 36.82575217812856, lng: 137.4715263450039 },
        title: "トヨタモビリティ富山 魚津",
      },
      {
        position: { lat: 36.7219281961692, lng: 137.1502777088701 },
        title: "呉羽自動車学校",
      },
    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();
  
    // Create the markers.
    tourStops.forEach(({ position, title }, i) => {
      const pinView = new google.maps.marker.PinView({
        glyph: `${i + 1}`,
      });
      const marker = new google.maps.marker.AdvancedMarkerView({
        position,
        map,
        title: `${i + 1}. ${title}`,
        content: pinView.element,
      });
  
      // Add a click listener for each marker, and set up the info window.
      marker.addListener("click", ({ domEvent, latLng }) => {
        const { target } = domEvent;
  
        infoWindow.close();
        infoWindow.setContent(marker.title);
        infoWindow.open(marker.map, marker);
      });
    });
  }
  
  window.initMap = initMap;
  // [END maps_advanced_markers_accessibility]
