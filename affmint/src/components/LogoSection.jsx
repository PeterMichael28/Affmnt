
import img1 from '../assets/logo1.png'
import img2 from '../assets/logo2.png'
import img3 from '../assets/logo3.png'
import img4 from '../assets/logo4.png'



const LogoSection = () => {
  return (
      <section className='flex-between mt-5'>
           <img src={img1} alt="" className='object-contain ' />
           <img src={img2} alt="" className='object-contain ' />
           <img src={img3} alt="" className='object-contain ' />
           <img src={img4} alt="" className='object-contain ' />
    </section>
  )
}

export default LogoSection