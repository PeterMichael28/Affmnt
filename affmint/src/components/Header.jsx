import logo from '../assets/logo.png'

const Header = () => {


  return (
      <header className='bg-white flex-between w-full py-5'>
          <div className='flex-between w-full max-w-[1100px] mx-auto'>
              
          <div className='flex-center gap-8'>
              <img src={logo} alt="logo" className='w-[6rem] h-[1.6rem]'/>

              <nav>
                  <ul className='flex-center gap-7'>
                      <li className='nav-li' >About</li>
                      <li className='nav-li'>Contact Us</li>
                      <li className='nav-li'>FAQs</li>
                  </ul>
              </nav>
          </div>

          {/* btns */}
          <div className='flex-center gap-4'>
              <button className='flex-center px-7 py-2 border border-ter rounded-[.7rem] text-sm text-pry hover:bg-pry hover:text-white transition-all duration-300'>Sign In</button>
              <button className='flex-center px-7 py-2 border bg-sec rounded-[.7rem] text-sm text-white transition-all duration-300 hover:border hover:border-sec hover:text-sec hover:bg-white'>Become an Affiliate</button>
          </div>
        </div>
    </header>
  )
}

export default Header