export const AboutMe = () => {
  return (
    <div id='about' className="min-h-screen flex  flex-col items-center justify-center">
        <div className="content opacity-0 transition-all duration-700 max-w-3xl flex flex-col gap-5">
            <h1 className='text-4xl font-semibold'>About me.</h1>
            <p className='text-xl'>
                Ever since I was young, I have been fascinated by computers and technology.
                As I grew older, I became increasingly interested in programming and software development.
                This led me to pursue a degree in computer science.
            </p>
            <p className='text-xl'>
                I am currently in my final year at <strong>Darmstadt University of Applied Sciences</strong>.
                During one of my semester, I had the opportunity to take two elective modules, 
                namely <strong>Data Warehouse Technologies</strong> and <strong>Advanced Web Development</strong>,
                which provided me with hands-on experience and exposure to the latest technologies in these fields. 
            </p>
        </div>
    </div>
    )
}
