import giphy from '../assets/giphy.gif'

export const HomeSection = () => {
  return (
    <div id='home' className="min-h-screen flex flex-col items-center justify-center">
        <div className="content opacity-0 transition-all duration-1000 max-w-3xl flex flex-col gap-5">
            <p className='text-lg'>Hello there! My name is</p>
            <h1 className='text-5xl sm:text-7xl font-semibold'>
                Farouq Abdurrahman
            </h1>
            <p className='text-lg'>
                I'm a Computer Science student with experience in various programming languages and a passion for learning and exploring new technologies.
            </p>
            <div className='flex md:justify-end justify-center'>
                <img src={giphy} className="max-h-48 transform -scale-x-100 bg-transparent"/>
            </div>
        </div>
    </div>
    )
}
