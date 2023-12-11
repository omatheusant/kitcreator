import { FaEraser } from 'react-icons/fa'

export const Eraser = () => {
  return (
    <li className='text-[--light] text-[1vw]'>
      <div className='flex flex-col items-center cursor-pointer'>
        <button className='text-[2vw]'>
          <FaEraser />
        </button>
        <span>Apagar</span>
      </div>
    </li>
  )
}