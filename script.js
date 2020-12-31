class Picker{
    constructor(){
        this.colorPkr = document.createElement("canvas");
        this.canvas = this.colorPkr.getContext("2d");
        this.rgbGen();
    };

    rgbGen(){
        let end = 255;
        let step = 5;
        for (let r = 0; r < end; r++){
            for (let g = 0; g < end; g++){
                for(let b = 0; b < end; b++){
                    this.canvas.fillStyle = "rgb(${r}, ${g}, ${b})"
                    this.canvas.fillRect(r,g,1,1);
                }
            }
        }

    };

    getCanvasElement(){
        return this.colorPkr;
    }

    slider(id="", min=0, max=1, step=1){
        var s = document.createElement("input");
        s.min = min;
        s.max = max;
        s.step = step;
        s.id = id;
        s.class = "slider";
        return s;
    };
};


class Layer {
    constructor(){
        this.layer = new Array();
        this.layer.push(new Picker().getCanvasElement());

    };

    getLayer(){
        return this.layer;
    };
};

class  LayerStack{
    constructor(){
        this.layerCount = 0;
        this.initLayer = new Layer();
        this.add(this.initLayer);
    };

    add(layer){
        this.insertAfter(layer['layer'][0], document.getElementById("layers"));
        this.layerCount += 1;
    };

    insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
};

l1 = new Layer();
LS = new LayerStack();
LS.add(l1.getLayer());