/* eslint-disable react/prop-types */
import { FaEraser } from 'react-icons/fa'
import { fabric } from 'fabric';
import { useEffect, useRef, useState } from 'react';

export const Eraser = ({ canvas }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(50);
  const [showSize, setShowSize] = useState(false);
  
  const brush = useRef(null);

  const handleClick = () => {
    setIsDrawing(!isDrawing);
    canvas.isDrawingMode = !isDrawing;
    canvas.freeDrawingBrush.width = brushSize;
    canvas.freeDrawingBrush.color = 'white';
    setShowSize(!showSize);
  };

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const pointer = canvas.getPointer(e);
    brush.current = new fabric.Path('M ' + pointer.x + ' ' + pointer.y, {
      fill: '',
      stroke: '#000',
      strokeWidth: brushSize
    });
    canvas.add(brush.current);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const pointer = canvas.getPointer(e);
    brush.current.path = 'M ' + brush.current.path + ' L ' + pointer.x + ' ' + pointer.y;
    canvas.renderAll();
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  useEffect(() => {
    if (canvas) {
      canvas.on('mouse:down', handleMouseDown);
      canvas.on('mouse:move', handleMouseMove);
      canvas.on('mouse:up', handleMouseUp);
    }
    return () => {
      if (canvas) {
        canvas.off('mouse:down', handleMouseDown);
        canvas.off('mouse:move', handleMouseMove);
        canvas.off('mouse:up', handleMouseUp);
      }
    };
  }, [canvas]);

  const handleChange = (e) => {
    setBrushSize(e.target.value);
    canvas.freeDrawingBrush.width = e.target.value;
  };

  return (
    <li className='text-[--light] text-[1vw]'>
      <div className='flex flex-col items-center cursor-pointer'>
        <button className='text-[2vw]' onClick={handleClick}>
          <FaEraser />
        </button>
        <span>Apagar</span>
        {showSize &&
          <div className='absolute flex justify-center items-center rounded left-[5vw] bg-[--bg-color] w-[15vw]' >
            <input
              type="range"
              min="1"
              max="500"
              id="brushSize"
              value={brushSize}
              onChange={handleChange}
              className=" w-[10vw]"
            />
          </div>}
      </div>
    </li>
  )
}