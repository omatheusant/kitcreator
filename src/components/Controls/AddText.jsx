import { useState } from 'react';
import { MdOutlineTextFields } from 'react-icons/md';
import { fabric } from 'fabric';

export const AddText = ({ canvas }) => {
 const [isAdding, setIsAdding] = useState(false);

 const handleClick = () => {
 setIsAdding(!isAdding);
 if (!isAdding) {
 const text = new fabric.Textbox('Sample Text', {
  left: 10,
  top: 10,
  fill: 'black',
  fontSize: 20,
  width: 200,
  height: 100
 });
 canvas.add(text);
 }
 };

 return (
 <li className='text-[--light] text-[1vw]'>
 <div className='flex flex-col items-center cursor-pointer'>
 <button className='text-[2vw]' onClick={handleClick}>
 <MdOutlineTextFields />
 </button>
 <span>Texto</span>
 </div>
 </li>
 );
};
