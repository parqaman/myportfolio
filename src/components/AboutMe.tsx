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
                I am currently in my final year at Darmstadt University of Applied Sciences.
                During one of my semesters I took electives modules such as Data Warehouse Technologies and Advanced Web Development, 
                which I found very interesting.
            </p>
        </div>
    </div>
    )
}
