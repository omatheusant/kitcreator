import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import 'fabric-history';

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

  useEffect(() => {
    if (canvas) {
      const handleKeyDown = (e) => {
        if (e.key === 'Delete') {
          const activeObjects = canvas.getActiveObjects();
          if (activeObjects.length > 0) {
            canvas.discardActiveObject();
            canvas.remove(...activeObjects);
            canvas.requestRenderAll();
          }
        }
        if (e.ctrlKey && e.key === 'z') {
          canvas.undo();
        }
        if (e.ctrlKey && e.key === 'y') {
          canvas.redo();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [canvas]);

  return (
    <>
      <Header canvas={canvas} />
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
