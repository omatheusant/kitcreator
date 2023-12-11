
import { useState, useEffect } from 'react'
import { fabric } from 'fabric';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { AddImage } from './components/Controls/AddImage';
import { AddText } from './components/Controls/AddText';
import { Resize } from './components/Controls/Resize';
import { Background } from './components/Controls/Background';
import { Eraser } from './components/Controls/Eraser';

function App() {
  const [canvas, setCanvas] = useState(null);
 
  const initCanvas = () => {
    const newCanvas = new fabric.Canvas('canvas', {
      height: 800,
      width: 800,
      backgroundColor: 'pink'
    });
    setCanvas(newCanvas);
   };
  
   useEffect(() => {
    initCanvas();
   }, []);
 
  
  return (
    <>
      <Header />
      <SideBar>
        <Resize />
        <AddText />
        <AddImage canvas={canvas} />
        <Eraser />
        <Background />
      </SideBar>

      <div className='w-full mt-10 flex justify-center z-0'>
        <canvas id="canvas"></canvas>
      </div>
    </>
  )
}

export default App
