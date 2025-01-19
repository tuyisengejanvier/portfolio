
import janvier from '../assets/janvier.jpeg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={janvier} alt='/'/>
          <div className='flex flex-col justify-center'> 
            <p className='text-[#f9a8d4]] font-bold'>My picture Good</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Did you se This pucture if is Good</h1>
            <p>Ibyo wasezeranijwe ugiye kubibona muri iki gihe cyo gushima Imana, 
              nugendera m'ubushake bw'Imana, ukumvira amategeko 
              y'Imana kandi ukamenya gusobanukirwa no ...</p>
              <button className='bg-[#fde047] w-[200px] rounded-md font-medium p-1 my-6 mx-auto px-6'>Get Started</button>
          </div>
      </div>
    </div>
  )
}

export default Analytics