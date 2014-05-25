var resolutions = [0.703125, 0.3515625, 0.17578125, 0.087890625, 
  .0439453125, 0.02197265625, 0.010986328125, 
  .0054931640625, 0.00274658203125, 0.001373291015625, 
  .0006866455078125, 0.00034332275390625, 0.000171661376953125, 
  .0000858306884765625, 0.00004291534423828125, 0.000021457672119140625];

var mapExtent = {left: -180,right:180,bottom: -90,top:90};
var tileSize = 256;

var featColl = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": []
      },
      "properties": {
        "prop1": {
          "this": "that"
        },
        "prop0": "value0"
      }
    }
  ]
};

function getTileFeatures(z,x,y) {
  var width = tileSize * resolutions[z] 
  ,left = mapExtent.left + x * width
  ,bottom = mapExtent.bottom + y * width
  ,right = left + width
  ,top = bottom + width
  ,coords = [[
    [left,bottom],[right,bottom],[right,top],[left,top],[left,bottom]
  ]];
  featColl.features[0].id = z + '-' + x + '-' + y;  
  featColl.features[0].geometry.coordinates = coords;
  return featColl; 
}

module.exports = { getTileFeatures: getTileFeatures};
