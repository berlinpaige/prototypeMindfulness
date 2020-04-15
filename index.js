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
var CONTENT_CONTAINER_SHOW_CLASS = 'show-contentContainer';
var CONTENT_SHOW_CLASS = 'show-content';
/*end global constants*/

function handleOpenLeftPanel(hotspotContentId) {
  handleOpenContentContainer(hotspotContentId, LEFT_SIDEPANEL_ID);
}

function handleOpenRightPanel(hotspotContentId) {
  handleOpenContentContainer(hotspotContentId, RIGHT_SIDEPANEL_ID);
}

function handleOpenModal(hotspotContentId) {
  handleOpenContentContainer(hotspotContentId, MODAL_ID);
}

function closeAllOpenContentHolders(classThatDeterminesHideShow) {
  elementsToHide = document.getElementsByClassName(classThatDeterminesHideShow);

  Array.prototype.forEach.call(elementsToHide, function (hotspot) {
    hotspot.classList.remove(classThatDeterminesHideShow)
  });
}

function handleOpenContentContainer(hotspotContentId, contentContainerId) {
  closeAllOpenContentHolders(CONTENT_SHOW_CLASS);
  closeAllOpenContentHolders(CONTENT_CONTAINER_SHOW_CLASS);

  var contentContainer = document.getElementById(contentContainerId);
  var hotspotContentDiv = document.getElementById(hotspotContentId);

  setTimeout(function () {
    contentContainer.classList.add(CONTENT_CONTAINER_SHOW_CLASS);
    hotspotContentDiv.classList.add(CONTENT_SHOW_CLASS);
  }, 500);
}

function addCloseClickHandlers(contentContainerId, contentContainerCloseId) {
  var contentContainer = document.getElementById(contentContainerId);
  var contentContainerClose = document.getElementById(contentContainerCloseId);

  contentContainerClose.addEventListener('click', function () {
    contentContainer.classList.remove(CONTENT_CONTAINER_SHOW_CLASS);
  }, false)
}

function addSidepanelActions() {
  addCloseClickHandlers(RIGHT_SIDEPANEL_ID, RIGHT_SIDEPANEL_CLOSE_ID)
  addCloseClickHandlers(LEFT_SIDEPANEL_ID, LEFT_SIDEPANEL_CLOSE_ID)
  addCloseClickHandlers(MODAL_ID, MODAL_CLOSE_ID)
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
