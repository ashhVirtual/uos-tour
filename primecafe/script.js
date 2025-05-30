(function(){
    var script = {
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "id": "rootPlayer",
 "children": [
  "this.MainViewer"
 ],
 "scrollBarVisible": "rollOver",
 "start": "this.init()",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "definitions": [{
 "items": [
  {
   "media": "this.panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_camera"
  },
  {
   "media": "this.panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_camera"
  },
  {
   "media": "this.panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_camera"
  },
  {
   "media": "this.panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_camera"
  },
  {
   "media": "this.panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_camera"
  },
  {
   "media": "this.panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_camera"
  },
  {
   "media": "this.panorama_E449018C_EE0F_2C26_41C0_1531A255324B",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E449018C_EE0F_2C26_41C0_1531A255324B_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "primecafe2",
 "id": "panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE",
 "overlays": [
  "this.overlay_E0A145D7_EE15_1421_41C2_4C68454B2333",
  "this.overlay_E1D4946F_EE0D_F4E1_41E2_D4039CF2785A"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": -0.01,
 "adjacentPanoramas": [
  {
   "yaw": 19.37,
   "class": "AdjacentPanorama",
   "backwardYaw": 164.74,
   "panorama": "this.panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98",
   "distance": 1
  },
  {
   "yaw": -179.43,
   "class": "AdjacentPanorama",
   "backwardYaw": 74.37,
   "panorama": "this.panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41",
   "distance": 1
  }
 ],
 "vfov": 64,
 "thumbnailUrl": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -15.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_49F1917E_5957_2DA1_41D2_CB73997187FA"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "primecafe1",
 "id": "panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882",
 "overlays": [
  "this.overlay_E2FF5406_EE0D_3423_41E7_83B3309F4DF6",
  "this.overlay_E3B57F7A_EE13_34E2_41E9_22B1E994CA2A"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0.01,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D"
  },
  {
   "yaw": -178.83,
   "class": "AdjacentPanorama",
   "backwardYaw": -33.94,
   "panorama": "this.panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F",
   "distance": 1
  }
 ],
 "vfov": 64,
 "thumbnailUrl": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "initialPosition": {
  "yaw": -105.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_484ED1CD_5957_2CE0_4199_7B04DEDE718F"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "primecafe1.5",
 "id": "panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98",
 "overlays": [
  "this.overlay_E09CD13E_EE15_6C62_41DF_3BB264BB69EE",
  "this.overlay_56922E54_5951_37E0_41B3_D602F6770A7F"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": -6.21,
 "adjacentPanoramas": [
  {
   "yaw": -1.86,
   "class": "AdjacentPanorama",
   "backwardYaw": 164.54,
   "panorama": "this.panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F",
   "distance": 1
  },
  {
   "yaw": 164.74,
   "class": "AdjacentPanorama",
   "backwardYaw": 19.37,
   "panorama": "this.panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE",
   "distance": 1
  }
 ],
 "vfov": 63.52,
 "thumbnailUrl": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 175.09,
  "class": "PanoramaCameraPosition",
  "pitch": -9
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_camera"
},
{
 "initialPosition": {
  "yaw": 128.6,
  "class": "PanoramaCameraPosition",
  "pitch": -5.73
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_camera"
},
{
 "initialPosition": {
  "yaw": -53.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_49E79174_5957_2DA1_41C4_4A956901E778"
},
{
 "initialPosition": {
  "yaw": -175.7,
  "class": "PanoramaCameraPosition",
  "pitch": 3.28
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_camera"
},
{
 "initialPosition": {
  "yaw": 56.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_49ACD1B0_5957_2CA1_41D2_6531CA3BE05B"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "primecafe6",
 "id": "panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D",
 "overlays": [
  "this.overlay_FE189E36_EE3F_3462_41E9_EEA9BD9607E8"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 4.33,
 "adjacentPanoramas": [
  {
   "yaw": -123.99,
   "class": "AdjacentPanorama",
   "backwardYaw": 54.95,
   "panorama": "this.panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F",
   "distance": 1
  }
 ],
 "vfov": 65.16,
 "thumbnailUrl": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -160.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4981118E_5957_2D61_41C5_D631BECEF072"
},
{
 "initialPosition": {
  "yaw": 1.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_499CB1A7_5957_2CAF_41A5_5AEAB46D2480"
},
{
 "initialPosition": {
  "yaw": -15.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_49BE81BB_5957_2CA0_41D4_85DDCCB40FE0"
},
{
 "initialPosition": {
  "yaw": -174.06,
  "class": "PanoramaCameraPosition",
  "pitch": 1.65
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_camera"
},
{
 "initialPosition": {
  "yaw": -13.52,
  "class": "PanoramaCameraPosition",
  "pitch": -7.37
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E449018C_EE0F_2C26_41C0_1531A255324B_camera"
},
{
 "initialPosition": {
  "yaw": -125.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_49C99155_5957_2DE3_41A0_371308F11016"
},
{
 "initialPosition": {
  "yaw": 178.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4993C19C_5957_2D60_41C8_96E550268C06"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "primecafe3",
 "id": "panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41",
 "overlays": [
  "this.overlay_E1D4D434_EE0F_7466_41E4_31F97CE3CF8E",
  "this.overlay_FE9185FE_EE33_F7E3_41C5_243232658BEE"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 1.61,
 "adjacentPanoramas": [
  {
   "yaw": 74.37,
   "class": "AdjacentPanorama",
   "backwardYaw": -179.43,
   "panorama": "this.panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE",
   "distance": 1
  },
  {
   "yaw": -4.94,
   "class": "AdjacentPanorama",
   "backwardYaw": 126.52,
   "panorama": "this.panorama_E449018C_EE0F_2C26_41C0_1531A255324B",
   "distance": 1
  }
 ],
 "vfov": 65.76,
 "thumbnailUrl": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 175.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_493D3145_5957_2DE3_41D5_727358EEC9F1"
},
{
 "initialPosition": {
  "yaw": 146.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4937F145_5957_2DE3_41AA_983A350528A4"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "primecaferoom",
 "id": "panorama_E449018C_EE0F_2C26_41C0_1531A255324B",
 "overlays": [
  "this.overlay_56A98B08_592F_FD60_41C1_064F071425D4"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": -0.28,
 "adjacentPanoramas": [
  {
   "yaw": 126.52,
   "class": "AdjacentPanorama",
   "backwardYaw": -4.94,
   "panorama": "this.panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41",
   "distance": 1
  }
 ],
 "vfov": 65.17,
 "thumbnailUrl": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 144.78,
  "class": "PanoramaCameraPosition",
  "pitch": -5.72
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_camera"
},
{
 "initialPosition": {
  "yaw": -169.35,
  "class": "PanoramaCameraPosition",
  "pitch": 2.46
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "primecafe4",
 "id": "panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F",
 "overlays": [
  "this.overlay_E3A2A96F_EE15_1CE2_41DF_D2F46B8685BD",
  "this.overlay_E01718AE_EE15_1C62_41ED_7B8E35C3771B",
  "this.overlay_E076C619_EE17_142E_41CB_FDDB1B61D203"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": -1.89,
 "adjacentPanoramas": [
  {
   "yaw": 164.54,
   "class": "AdjacentPanorama",
   "backwardYaw": -1.86,
   "panorama": "this.panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98",
   "distance": 1
  },
  {
   "yaw": -33.94,
   "class": "AdjacentPanorama",
   "backwardYaw": -178.83,
   "panorama": "this.panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882",
   "distance": 1
  },
  {
   "yaw": 54.95,
   "class": "AdjacentPanorama",
   "backwardYaw": -123.99,
   "panorama": "this.panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D",
   "distance": 1
  }
 ],
 "vfov": 64.99,
 "thumbnailUrl": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_49D69165_5957_2DA0_41B7_727BB441613B"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.24,
   "yaw": 19.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98, this.camera_49BE81BB_5957_2CA0_41D4_85DDCCB40FE0); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E1DE4FF8_EE1D_13EF_41E3_D6C4011F9BD5",
   "pitch": -22.58,
   "hfov": 14.24,
   "yaw": 19.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E0A145D7_EE15_1421_41C2_4C68454B2333",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.11,
   "yaw": -179.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41, this.camera_484ED1CD_5957_2CE0_4199_7B04DEDE718F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_FEE53B7A_EE0D_7CE3_41D8_B06C0555CF55",
   "pitch": -7.21,
   "hfov": 11.11,
   "yaw": -179.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E1D4946F_EE0D_F4E1_41E2_D4039CF2785A",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.73,
   "yaw": 82.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E1DFDFF7_EE1D_13E2_41C0_651401D67E4B",
   "pitch": -5.98,
   "hfov": 9.73,
   "yaw": 82.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2FF5406_EE0D_3423_41E7_83B3309F4DF6",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.61,
   "yaw": -178.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F, this.camera_4937F145_5957_2DE3_41AA_983A350528A4); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E1DFBFF8_EE1D_13EF_41EC_E920AFEB2909",
   "pitch": -11.06,
   "hfov": 9.61,
   "yaw": -178.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E3B57F7A_EE13_34E2_41E9_22B1E994CA2A",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.44,
   "yaw": 164.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE, this.camera_4981118E_5957_2D61_41C5_D631BECEF072); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E1D00FF1_EE1D_13FE_41ED_95DF2EF24394",
   "pitch": -15.93,
   "hfov": 8.44,
   "yaw": 164.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E09CD13E_EE15_6C62_41DF_3BB264BB69EE",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.24,
   "yaw": -1.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F, this.camera_49F1917E_5957_2DA1_41D2_CB73997187FA); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4920D128_5957_2DA1_41C6_FFDF7491BD6A",
   "pitch": -24.23,
   "hfov": 6.24,
   "yaw": -1.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_56922E54_5951_37E0_41B3_D602F6770A7F",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.18,
   "yaw": -123.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F, this.camera_49C99155_5957_2DE3_41A0_371308F11016); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_FFD5EC31_EE3D_147E_41E9_3E8958E1080D",
   "pitch": -6.83,
   "hfov": 11.18,
   "yaw": -123.99,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FE189E36_EE3F_3462_41E9_EEA9BD9607E8",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.52,
   "yaw": -4.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E449018C_EE0F_2C26_41C0_1531A255324B, this.camera_49E79174_5957_2DA1_41C4_4A956901E778); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E19C40E8_EE0E_EDEF_41C7_9EE624A05351",
   "pitch": -8.93,
   "hfov": 10.52,
   "yaw": -4.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E1D4D434_EE0F_7466_41E4_31F97CE3CF8E",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.84,
   "yaw": 74.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE, this.camera_49D69165_5957_2DA0_41B7_727BB441613B); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1B93C3D2_1746_00F9_41B2_88F21E49DAB7",
   "pitch": -13.78,
   "hfov": 9.84,
   "yaw": 74.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FE9185FE_EE33_F7E3_41C5_243232658BEE",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.75,
   "yaw": 126.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41, this.camera_493D3145_5957_2DE3_41D5_727358EEC9F1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_480D8E93_592F_3767_41C7_89D2DBDFEA6B",
   "pitch": -0.15,
   "hfov": 7.75,
   "yaw": 126.52,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_56A98B08_592F_FD60_41C1_064F071425D4",
 "data": {
  "label": "Arrow Transparent Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.59,
   "yaw": 164.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98, this.camera_4993C19C_5957_2D60_41C8_96E550268C06); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E1DE3FF9_EE1D_13E1_41D6_99032EA8BF87",
   "pitch": -4.62,
   "hfov": 8.59,
   "yaw": 164.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E3A2A96F_EE15_1CE2_41DF_D2F46B8685BD",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.59,
   "yaw": 54.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D, this.camera_49ACD1B0_5957_2CA1_41D2_6531CA3BE05B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E1DEEFF9_EE1D_13E1_41E7_E4D3C3996A9D",
   "pitch": -4.77,
   "hfov": 8.59,
   "yaw": 54.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E01718AE_EE15_1C62_41ED_7B8E35C3771B",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.55,
   "yaw": -33.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882, this.camera_499CB1A7_5957_2CAF_41A5_5AEAB46D2480); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E1DD5FF9_EE1D_13E1_41E7_9D42E8C68A92",
   "pitch": -6.85,
   "hfov": 8.55,
   "yaw": -33.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E076C619_EE17_142E_41CB_FDDB1B61D203",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_E1DE4FF8_EE1D_13EF_41E3_D6C4011F9BD5",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E44ABEF1_EE0D_15FE_41D4_160A90F86BCE_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_FEE53B7A_EE0D_7CE3_41D8_B06C0555CF55",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_E1DFDFF7_EE1D_13E2_41C0_651401D67E4B",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E447B9AC_EE0D_3C66_41B9_D040F4320882_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_E1DFBFF8_EE1D_13EF_41EC_E920AFEB2909",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_E1D00FF1_EE1D_13FE_41ED_95DF2EF24394",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E47DD4B2_EE0D_1462_41EA_0CFB45AC4A98_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_4920D128_5957_2DA1_41C6_FFDF7491BD6A",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E4491A3F_EE0F_7C61_4199_5F883ADF2B3D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_FFD5EC31_EE3D_147E_41E9_3E8958E1080D",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_E19C40E8_EE0E_EDEF_41C7_9EE624A05351",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E44952BB_EE0E_EC62_41DA_87D64BA31B41_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_1B93C3D2_1746_00F9_41B2_88F21E49DAB7",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E449018C_EE0F_2C26_41C0_1531A255324B_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_480D8E93_592F_3767_41C7_89D2DBDFEA6B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_E1DE3FF9_EE1D_13E1_41D6_99032EA8BF87",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_E1DEEFF9_EE1D_13E1_41E7_E4D3C3996A9D",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E4495D64_EE0F_34E6_41E4_5B868658DF7F_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_E1DD5FF9_EE1D_13E1_41E7_9D42E8C68A92",
 "rowCount": 5,
 "frameCount": 20
}],
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getKey": function(key){  return window[key]; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player455"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
