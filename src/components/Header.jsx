/* eslint-disable react/prop-types */

import { CiSaveDown2 } from "react-icons/ci";

export const Header = ({ canvas }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = 'kit.png';
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
  };
 
  return (
    <div className='bg-[--bg-color] shadow-md shadow-black w-full h-[14vh] flex items-center z-20 px-5 justify-between'>
      <div className='w-[25vh]'>
        <img src="https://i.postimg.cc/cJnKqhgV/logo-ismafer.jpg" alt="logo" />
      </div>
      <button className='w-[10vw] h-[3vw] bg-[--brand] font-bold text-[1.4vw] gap-2 flex items-center bg-center py-2 px-5 justify-center' onClick={handleDownload}> Salvar <CiSaveDown2 className='text-[2vw]'/> </button>
    </div>
  );
 }