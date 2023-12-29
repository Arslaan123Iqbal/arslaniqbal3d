
import Image from 'next/image'
const HomeInfo = ({ currentStage }) => {
    if (currentStage === 0)
    return (
<div className="bg-blue-500 rounded-lg">
Loading
</div>
    );
  if (currentStage === 1)
    return (
<div className="bg-blue-500 rounded-lg">
<h1 className='px-8 py-4 mx-5 text-center text-white sm:text-xl sm:leading-snug neo-brutalism-blue'>
       {`Hi , I'm`}
        <span className='mx-2 font-semibold text-white'>Arslan Iqbal</span>
        👋
        <br />
        A Software Engineer from Pakistan 🇵🇰
      </h1>
</div>
    );

  if (currentStage === 2) {
    return (
      <div className='p-5 bg-blue-500 rounded-lg info-box'>

        <p className='font-medium text-center text-white sm:text-xl'>
         Currently working as Software Engineer @  <Image src={'/brand-logo.svg'} height={150} width={150} alt='brand'/>
        </p>

       
      </div>
    );
  }

  if (currentStage === 3) {
    return (
        <div className='p-5 text-white bg-blue-500 rounded-lg info-box'>

  <h1>    I like to make creative projects</h1>
       
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='flex p-5 bg-blue-500 rounded-lg info-box flex-column'>
      <p className='font-medium text-center text-white sm:text-xl'>
        Need a project done or looking for a dev? <br/>  Just contact me @ 
      </p>

      <a href='https://www.linkedin.com/in/arslan-iqbal-7989961a0/'>
      <Image  src={'/linkedin.png'}  height={100} width={100} alt='linkedin'/>
      </a>
    </div>
    );
  }

  return null;
};

export default HomeInfo;