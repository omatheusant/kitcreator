import { RxTransparencyGrid } from 'react-icons/rx'

export const Background = () => {
  return (
    <li className='text-[--light] text-[1vw]'>
      <div className='flex flex-col items-center cursor-pointer'>
        <button className='text-[2vw]'>
          <RxTransparencyGrid />
        </button>
        <span>Fundo</span>
      </div>
    </li>
  )
}

