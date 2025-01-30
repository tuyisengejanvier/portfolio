
import janvier from '../assets/janvier.jpeg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={janvier} alt='/'/>
          <div className='flex flex-col justify-center'> 
            <p className='text-[#f9a8d4]] font-bold'>HI,I'm Tuyisenge Janvier</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4'>I'm Youtuber Menyanibi.media</h1>
            <p>On the YouTube platform, you can gain significant benefits by learning different skills such as technology, driving knowledge,
               and learning the English language.</p>
              <button className='bg-[#03b500] w-[200px] rounded-md font-medium p-1 my-6 mx-auto px-6'>Get Started</button>
          </div>
      </div>
    </div>
  )
}

export default Analytics