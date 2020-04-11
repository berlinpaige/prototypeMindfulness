// Create viewer
viewer = pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "Equirectangular.png",
  "hotSpots": [
    {
      "pitch": 2.5,
      "yaw": 13,
      "hotSpotId": "123",
      "cssClass": "custom-hotspot custom-hotspot-A panel-hotspot",
      "clickHandlerFunc": function () { handleOpenPanel("hotspotAContent") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "CSS bulletin"
    },
    {
      "pitch": 5,
      "yaw": 237,
      "hotSpotId": '12345',
      "cssClass": "custom-hotspot custom-hotspot-B panel-hotspot",
      "clickHandlerFunc": function () { handleOpenPanel("hotspotBContent") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "Historial image"
    },
    {
      "pitch": -26,
      "yaw": 40,
      "hotSpotId": '1234567',
      "cssClass": "custom-hotspot custom-hotspot-C panel-hotspot",
      "clickHandlerFunc": function () { handleOpenPanel("hotspotCContent") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "CSS Newspaper"
    }
  ]
});

function handleOpenPanel(hotspotContentId) {
  var sidepanel = document.getElementById('sidepanel');
  var hotspotContentDiv = document.getElementById(hotspotContentId);
  var hotspotsToHide = document.getElementsByClassName('show-content');

  sidepanel.classList.remove('show-sidepanel');
  Array.prototype.forEach.call(hotspotsToHide, function (hotspot) {
    hotspot.classList.remove('show-content')
  });
  setTimeout(function () {
    sidepanel.classList.add('show-sidepanel');
    hotspotContentDiv.classList.add('show-content');
  }, 500);
}

function addSidepanelActions() {
  var sidepanel = document.getElementById('sidepanel');
  var sidepanelClose = document.getElementById('sidepanelClose');

  sidepanelClose.addEventListener('click', function (event) {
    sidepanel.classList.remove('show-sidepanel');
  }, false)
}

function hotspot(hotSpotDiv, args) {
  console.log('hotSpotDiv', hotSpotDiv)
  /*start pannellum interaction code*/
  hotSpotDiv.classList.add('custom-tooltip');
  var span = document.createElement('span');
  span.innerHTML = args;
  hotSpotDiv.appendChild(span);
  span.style.width = span.scrollWidth - 20 + 'px';
  span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
  span.style.marginTop = -span.scrollHeight - 12 + 'px';
  /*end pannellum interaction code*/
}

addSidepanelActions();
