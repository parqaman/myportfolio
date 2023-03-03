import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import GitHub from '../assets/github.png'
import Node from '../assets/node.png'
import Tailwind from '../assets/tailwind.png'
import chakraui from '../assets/chakraui.png'
import docker from '../assets/docker.png'
import postgresql from '../assets/postgresql.png'

export const TechStack = () => {
  return (
    <div id='tech-stacks' className="min-h-screen flex  flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        <div>
          <h1 className='text-4xl font-semibold'>Tech Stack.</h1>
          <p className='text-xl'>
            Technologies I'm familiar with.
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8'>
            <div className='shadow-sm rounded-lg shadow-[#222222] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="JS icon" />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-sm rounded-lg shadow-[#222222] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-sm rounded-lg shadow-[#222222] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt="Node JS icon" />
                <p className='my-4'>NODE JS</p>
            </div>
            <div className='shadow-sm rounded-lg shadow-[#222222] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={postgresql} alt="Postgresql icon" />
                <p className='my-4'>POSTGRESQL</p>
            </div>
            <div className='shadow-sm rounded-lg shadow-[#222222] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                <p className='my-4'>TAILWIND</p>
            </div>
            <div className='shadow-sm rounded-lg shadow-[#222222] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={chakraui} alt="Chakra UI icon" />
                <p className='my-4'>CHAKRA UI</p>
            </div>
            <div className='shadow-sm rounded-lg shadow-[#222222] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={docker} alt="Docker icon" />
                <p className='my-4'>DOCKER</p>
            </div>
            <div className='shadow-sm shadow-[#222222] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                <p className='my-4'>GITHUB</p>
            </div>
        </div>
      </div>
    </div>
  )
}
