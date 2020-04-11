// Create viewer
viewer = pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "Equirectangular.png",
  "hotSpots": [
    {
      "pitch": 2.5,
      "yaw": 13,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenPanel("bulletin") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "CSS bulletin"
    },
    {
      "pitch": 5,
      "yaw": 237,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenPanel("amazingPhoto") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "Historial image"
    },
    {
      "pitch": -26,
      "yaw": 40,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenPanel("newspaper") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "CSS Newspaper"
    }
  ]
});

/*begin global constants*/
var SIDEPANEL_ID = 'sidepanel';
var SIDEPANEL_CLOSE_ID = 'sidepanelClose';
var SIDEPANEL_SHOW_CLASS = 'show-sidepanel';
var CONTENT_SHOW_CLASS = 'show-content';
/*end global constants*/

function handleOpenPanel(hotspotContentId) {
  var sidepanel = document.getElementById(SIDEPANEL_ID);
  var hotspotContentDiv = document.getElementById(hotspotContentId);
  var hotspotsToHide = document.getElementsByClassName(CONTENT_SHOW_CLASS);

  sidepanel.classList.remove(SIDEPANEL_SHOW_CLASS);
  Array.prototype.forEach.call(hotspotsToHide, function (hotspot) {
    hotspot.classList.remove(CONTENT_SHOW_CLASS)
  });
  setTimeout(function () {
    sidepanel.classList.add(SIDEPANEL_SHOW_CLASS);
    hotspotContentDiv.classList.add(CONTENT_SHOW_CLASS);
  }, 500);
}

function addSidepanelActions() {
  var sidepanel = document.getElementById(SIDEPANEL_ID);
  var sidepanelClose = document.getElementById(SIDEPANEL_CLOSE_ID);

  sidepanelClose.addEventListener('click', function (event) {
    sidepanel.classList.remove(SIDEPANEL_SHOW_CLASS);
  }, false)
}

/*start pannellum setup code*/
function hotspot(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-tooltip');
  var span = document.createElement('span');
  span.innerHTML = args;
  hotSpotDiv.appendChild(span);
  span.style.width = span.scrollWidth - 20 + 'px';
  span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
  span.style.marginTop = -span.scrollHeight - 12 + 'px';
}
/*end pannellum setup code*/


/*start custom function calls*/
addSidepanelActions();
/*end custom function calls*/
