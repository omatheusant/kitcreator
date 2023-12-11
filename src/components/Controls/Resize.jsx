import { GiResize } from 'react-icons/gi'

export const Resize = () => {
  return (
    <li className='text-[--light] text-[1vw]'>
      <div className='flex flex-col items-center cursor-pointer'>
        <button className='text-[2vw]'>
          <GiResize />
        </button>
        <span>Tamanho</span>
      </div>
    </li>
  )
}