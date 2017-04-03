var Class = require("kaop").Class;
var Three = require("three");
var Renderer = require('./Renderer');

module.exports = Scene = Class.inherits(Three.Scene, {
    renderer: null,
    camera: null,
    proceed: true,
    constructor: [
        "override",
        function(parent, options){
            this.renderer = new Renderer();
            this.renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( this.renderer.domElement );
            parent();
        }
    ],
    init: function(currentCamera){
        this.camera = currentCamera;
        this.loop();
    },
    loop: function(){
        if(this.proceed){
            requestAnimationFrame(this.loop);
        }
        this.renderer.render(this, this.camera);
    },
    pause: function(){
        this.proceed = false;
    }
});
