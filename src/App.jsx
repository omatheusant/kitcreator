import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { AddImage } from './components/Controls/AddImage';
import { AddText } from './components/Controls/AddText';
import { Resize } from './components/Controls/Resize';
import { Background } from './components/Controls/Background';
import { Brush } from './components/Controls/Eraser';

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
      <Brush canvas={canvas} />
      <Background />
    </SideBar>

    <div className='w-full mt-10 flex justify-center z-0'>
      <canvas id="canvas"></canvas>
    </div>
  </>
 );
}

export default App;
