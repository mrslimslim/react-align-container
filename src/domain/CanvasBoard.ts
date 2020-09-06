import { fabric } from 'fabric';

class CanvasBoard {
  canvas: any;
  constructor(props:any) {
    this.canvas = null
  }

  initCanvas() {
    if(!this.canvas && document.querySelector('c')){
      this.canvas = new fabric.Canvas('c');
    }
  }

}

export default CanvasBoard;