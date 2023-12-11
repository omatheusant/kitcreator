/* eslint-disable react/prop-types */
import { fabric } from 'fabric';
import { FaCloudUploadAlt } from 'react-icons/fa';

export const AddImage = ({ canvas }) => {

  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const imgObj = new Image();
      imgObj.src = event.target.result;
      imgObj.onload = () => {
        const fabricImage = new fabric.Image(imgObj);
        fabricImage.set({
          selectable: true,
          hasControls: true,
          cornerColor: 'rgba(255, 255, 255, 0.7)',
          cornerStrokeColor: 'rgba(255, 255, 255, 0.7)',
          transparentCorners: false,
          borderColor: 'rgba(80, 0, 133, 0.7)',
          cornerStyle: 'circle',
        });
        canvas.centerObject(fabricImage);
        canvas.add(fabricImage);
        canvas.setActiveObject(fabricImage);
        canvas.discardActiveObject();
        canvas.renderAll();
      }
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <li className='text-[--light] text-[1vw]'>
      <div className='flex flex-col items-center cursor-pointer'>
        <label className='flex flex-col items-center cursor-pointer' htmlFor="file_input">
          <FaCloudUploadAlt className='text-[2vw]' />
          Uploads
        </label>
        <input className='hidden' id="file_input" type="file" onChange={handleImage} />
      </div>
    </li>
  )
}