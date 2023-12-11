
// eslint-disable-next-line react/prop-types
export const SideBar = ({children}) => {
  return (
    <div className='min-h-full bg-[--bg-color] w-[15vh] absolute left-0 z-10'>
      <div className='py-5'>
        <ul className='flex flex-col justify-evenly h-[80vh] items-center'>
          {children}
        </ul>
      </div>
    </div>
  )
}