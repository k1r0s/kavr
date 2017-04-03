var _scene = new KAVR.Scene();

var _camera = new KAVR.Camera({
    vangle: 45,
    aspect: window.innerWidth / window.innerHeight,
    near: 10,
    far: 2000
});

var plane = new KAVR.Plane({
    width: 200,
    height: 200,
    material: new KAVR.material.Basic({
        textureMap: "img/239_preview.jpg",
        repeat: true
    }
});

plane.position.y = -0.5;
plane.rotation.x = Math.PI / 2;
_scene.add( plane );

_camera.position.set(0,250,250);
_camera.lookAt(_scene.position);

_scene.init(_camera);

setTimeout(function(){
    _scene.pause();
}, 4000);

setInterval(function(){
    plane.rotation.x += 0.001;
}, 10);
