import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { AddImage } from './components/Tools/AddImage';
import { AddText } from './components/Tools/AddText';
import { Resize } from './components/Tools/Resize';
import { Background } from './components/Tools/Background';
import { Eraser } from './components/Tools/Eraser';

function App() {
 const [canvas, setCanvas] = useState(null);
 const [size, setSize] = useState({ width: 1700, height: 1200 });

 const initCanvas = () => {
  if (canvas) {
   canvas.dispose();
  }
  const newCanvas = new fabric.Canvas('canvas', {
   height: size.height,
   width: size.width,
   backgroundColor: 'white'
  });
  setCanvas(newCanvas);
 };
 
 useEffect(() => {
  initCanvas();
 }, [size]);

 return (
  <>
    <Header />
    <SideBar>
      <Resize setSize={setSize} />
      <AddText canvas={canvas} />
      <AddImage canvas={canvas} />
      <Eraser canvas={canvas} />
      <Background canvas={canvas} />
    </SideBar>

    <div className='w-full mt-10 flex justify-center z-0'>
      <canvas id="canvas"></canvas>
    </div>
  </>
 );
}

export default App;
