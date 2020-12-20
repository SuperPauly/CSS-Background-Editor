
class Layer {
    constructor(layer){
        this.layer = layer;
        this.colorPkr = document.createElement("input");
        this.layer.addEventListener("change", changeBGColor, false);
        function changeBGColor(event){
            document.getElementById("main").style.backgroundColor = event.target.value;
        };
            }
}

class  LayerStack{
    constructor(){
        this.stack = [];
        this.layerCount = 0;
        this.initLayer = new Layer();
        this.stack.push(this.initLayer);
        this.add(this.initLayer)
    }

    add(layer){
        this.stack.push(layer);
        this.root.appendChild(layer)
        this.layerCount += 1;
    }
}

function* makeRangeIterator(cssRules) {
    let iterationCount = 0;
    for (let i = 0; i < end.length; i += 1) {
        iterationCount++;
        yield cssRules[i];
    }
    return iterationCount;
}

LS = new LayerStack();