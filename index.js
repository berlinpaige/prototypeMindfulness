// Create viewer
viewer = pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "Equirectangular.png",
  "hotSpots": [
    {
      "pitch": 2.5,
      "yaw": 13,
      "cssClass": "custom-hotspot custom-hotspot-A panel-hotspot",
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "CSS bulletin"
    },
    {
      "pitch": 5,
      "yaw": 237,
      "cssClass": "custom-hotspot custom-hotspot-B panel-hotspot",
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "Historial image"
    },
    {
      "pitch": -26,
      "yaw": 40,
      "cssClass": "custom-hotspot custom-hotspot-C panel-hotspot",
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "CSS Newspaper"
    }
  ]
});

function clickHandlerCreate(hotspot, hotspotContentDiv, hotspotsToHide) {
  var sidepanel = document.getElementById('sidepanel');
  if (hotspot) {
    hotspot.addEventListener('click', function (event) {
      sidepanel.classList.remove('show-sidepanel');
      hotspotsToHide.forEach(function (element) {
        element.classList.add('hideContent');
      });
      hotspotContentDiv.classList.remove('hideContent');
      setTimeout(function () { sidepanel.classList.add('show-sidepanel'); }, 500);
    }, false)
  }
}

function addSidepanelActions(hotSpotDiv) {
  var sidepanel = document.getElementById('sidepanel');
  var sidepanelClose = document.getElementById('sidepanelClose');

  sidepanelClose.addEventListener('click', function (event) {
    sidepanel.classList.remove('show-sidepanel');
  }, false)
}

function addHotspotClickHandlers(params) {
  var HotSpotA = document.getElementsByClassName('custom-hotspot-A')[0];
  var HotSpotB = document.getElementsByClassName('custom-hotspot-B')[0];
  var HotSpotC = document.getElementsByClassName('custom-hotspot-C')[0];
  var hotspotAContent = document.getElementById('hotspotAContent');
  var hotspotBContent = document.getElementById('hotspotBContent');
  var hotspotCContent = document.getElementById('hotspotCContent');


  clickHandlerCreate(HotSpotA, hotspotAContent, [hotspotBContent, hotspotCContent])
  clickHandlerCreate(HotSpotB, hotspotBContent, [hotspotAContent, hotspotCContent])
  clickHandlerCreate(HotSpotC, hotspotCContent, [hotspotAContent, hotspotBContent])
}

function hotspot(hotSpotDiv, args) {
  /*start pannellum interaction code*/
  hotSpotDiv.classList.add('custom-tooltip');
  var span = document.createElement('span');
  span.innerHTML = args;
  hotSpotDiv.appendChild(span);
  span.style.width = span.scrollWidth - 20 + 'px';
  span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
  span.style.marginTop = -span.scrollHeight - 12 + 'px';
  /*end pannellum interaction code*/

  addSidepanelActions(hotSpotDiv);
  addHotspotClickHandlers();
}
