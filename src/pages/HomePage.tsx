import { AppLayout } from '../layout/AppLayout'

export const HomePage = () => {
  return (
    <AppLayout>
      <div className="hero min-h-screen">
          <div className="hero-content flex-col text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Hello there</h1>
                <p className="py-6">I'm Farouq, a Computer Science student at the University of Applied Sciences Darmstadt.</p>
            </div>
          </div>
      </div>
    </AppLayout>
  )
}
