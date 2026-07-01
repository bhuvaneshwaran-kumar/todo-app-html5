
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import TodoPage from "./pages/TodoPage";
import PublicRoute from "./components/PublicRoute";
import RegisterPage from "./pages/RegisterPage";

function App() {

  return (
    <div>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<TodoPage message="Welcome to the Todo Page!" />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
