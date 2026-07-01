import { useAppSelector } from "./store/store"

function App() {

  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  
  return (
    <div>
      <h1>MERN Stack App</h1>
      <h1>We are creating a simple TODO app using MERN stack. Checking if the auto deployment is happening correctly. in vercel</h1>
    </div>
  )
}

export default App
