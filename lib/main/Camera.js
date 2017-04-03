var Class = require("kaop").Class;
var Three = require("three");

module.exports = Camera = Class.inherits(Three.PerspectiveCamera, {
    constructor: [
        "override",
        function(parent, options){
            parent(options.vangle, options.aspect, options.near, options.far);

        }
    ]
});
