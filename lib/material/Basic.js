var Class = require("kaop").Class;
var Three = require("three");

module.exports = Camera = Class.inherits(Three.MeshBasicMaterial, {

    texture: null,

    constructor: [
        "override",
        function(parent, options){

            this.texture = new THREE.TextureLoader().load( options.textureMap );
            if(options.repeat){
                this.texture.wrapS = THREE.RepeatWrapping;
                this.texture.wrapT = THREE.RepeatWrapping;
                this.texture.repeat.set( 4, 4 );
            }
            parent({
                map: this.texture,
                side: THREE.DoubleSide
            });
        }
    ]
});
