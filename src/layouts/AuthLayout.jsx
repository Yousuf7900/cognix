import Logo from '../components/Logo'

export default function AuthLayout({ children, title }) {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="container-app w-full">
        <div className="mx-auto max-w-md">
          <div className="flex justify-center mb-6"><Logo /></div>
          <div className="card p-6">
            <h1 className="mb-4 text-2xl font-bold">{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
