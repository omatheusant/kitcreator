import { MdOutlineTextFields } from 'react-icons/md'

export const AddText = () => {

  
  return (
    <li className='text-[--light] text-[1vw]'>
      <div className='flex flex-col items-center cursor-pointer'>
        <button className='text-[2vw]'>
          <MdOutlineTextFields />
        </button>
        <span>Texto</span>
      </div>
    </li>
  )
}