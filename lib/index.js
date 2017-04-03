(function(){

    window.THREE = require("three");

    window.KAVR = {
        Scene: require("./main/Scene"),
        Camera: require("./main/Camera"),
        Renderer: require("./main/Renderer"),
        Plane: require("./object/Plane"),
        material: {
            Basic: require("./material/Basic")
        }
    };

})()
