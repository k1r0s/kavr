var Class = require("kaop").Class;
var Three = require("three");

module.exports = Plane = Class.inherits(Three.Mesh, {

    geometry: null,

    constructor: [
        "override",

        function(parent, options){

            this.geometry = new Three.PlaneGeometry(options.width, options.height, 1, 1);
            parent(this.geometry, options.material);

        }
    ]
});
