import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-600">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
