// Create viewer
viewer = pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "Equirectangular.png",
  "hotSpots": [
    {
      "pitch": 2.5,
      "yaw": 13,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenRightPanel("bulletin") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "CSS bulletin"
    },
    {
      "pitch": 5,
      "yaw": 237,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenLeftPanel("amazingPhoto") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "Historial image"
    },
    {
      "pitch": -26,
      "yaw": 40,
      "cssClass": "custom-hotspot",
      "clickHandlerFunc": function () { handleOpenModal("newspaper") },
      "createTooltipFunc": hotspot,
      "createTooltipArgs": "CSS Newspaper"
    }
  ],
  // DS 4/12/2020
  // Make it load automatically, and turn on the hotspot debugger.
  "autoLoad": true,
  "hotSpotDebug": true,
  // DS 4/12/2020
  // Here I'm going to configure the camera
  // The ceiling and floors don't look very good,
  // so let's limit the view of it.
  "maxPitch": 65,
  "minPitch": -95
  // Upon testing, this seems to work best at lower resolutions.
  // We may want to move the viewer into a fixed size window, but that might make it strange on mobile.
  // Haven't yet tested this on mobile - this change can be removed if it doesn't work out.
});

/*begin global constants*/
var RIGHT_SIDEPANEL_ID = 'rightSidepanel';
var LEFT_SIDEPANEL_ID = 'leftSidepanel';
var MODAL_ID = 'modal';
var LEFT_SIDEPANEL_CLOSE_ID = 'leftSidepanelClose';
var RIGHT_SIDEPANEL_CLOSE_ID = 'rightSidepanelClose';
var MODAL_CLOSE_ID = 'modalClose';
var SIDEPANEL_SHOW_CLASS = 'show-sidepanel';
var CONTENT_SHOW_CLASS = 'show-content';
/*end global constants*/

function handleOpenLeftPanel(hotspotContentId) {
  handleOpenPanel(hotspotContentId, LEFT_SIDEPANEL_ID);
}

function handleOpenRightPanel(hotspotContentId) {
  handleOpenPanel(hotspotContentId, RIGHT_SIDEPANEL_ID);
}

function handleOpenModal(hotspotContentId) {
  handleOpenPanel(hotspotContentId, MODAL_ID);
}

function handleOpenPanel(hotspotContentId, panelId) {
  var sidepanel = document.getElementById(panelId);
  var hotspotContentDiv = document.getElementById(hotspotContentId);
  var hotspotsToHide = document.getElementsByClassName(CONTENT_SHOW_CLASS);
  var panelsToHide = document.getElementsByClassName(SIDEPANEL_SHOW_CLASS);

  Array.prototype.forEach.call(hotspotsToHide, function (hotspot) {
    hotspot.classList.remove(CONTENT_SHOW_CLASS)
  });
  Array.prototype.forEach.call(panelsToHide, function (hotspot) {
    hotspot.classList.remove(SIDEPANEL_SHOW_CLASS)
  });

  setTimeout(function () {
    sidepanel.classList.add(SIDEPANEL_SHOW_CLASS);
    hotspotContentDiv.classList.add(CONTENT_SHOW_CLASS);
  }, 500);
}

function addSidepanelActions() {
  var rightSidepanel = document.getElementById(RIGHT_SIDEPANEL_ID);
  var leftSidepanel = document.getElementById(LEFT_SIDEPANEL_ID);
  var modal = document.getElementById(MODAL_ID);
  var rightSidepanelClose = document.getElementById(RIGHT_SIDEPANEL_CLOSE_ID);
  var leftSidepanelClose = document.getElementById(LEFT_SIDEPANEL_CLOSE_ID);
  var modalClose = document.getElementById(MODAL_CLOSE_ID);

  leftSidepanelClose.addEventListener('click', function () {
    leftSidepanel.classList.remove(SIDEPANEL_SHOW_CLASS);
  }, false)

  rightSidepanelClose.addEventListener('click', function () {
    rightSidepanel.classList.remove(SIDEPANEL_SHOW_CLASS);
  }, false)

  modalClose.addEventListener('click', function () {
    modal.classList.remove(SIDEPANEL_SHOW_CLASS);
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
