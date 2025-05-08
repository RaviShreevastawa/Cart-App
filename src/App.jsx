import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom'
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-600">
       <Header />
       <div className="flex flex-row">
        <Sidebar />
        <main className="flex-grow pl-4">
          <Outlet />
        </main>
       </div>
      <Footer />
    </div>
    </>
  )
}

export default App
