import { Route,Routes, BrowserRouter as Router } from 'react-router-dom'
import AuthPage from './SignIn'
import Home from './pages/Home'
import HomeRoutes from './components/Route'
import { AdminLogin } from './Auth/AdminLogin'
import AdminRoutes from './admin/AdminRoutes'
import AdminHome from './admin/AdminHome'

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/home/:email" element={<Home />} >
              <Route path="*" element={<HomeRoutes />} />
            </Route>
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/home" element={<AdminHome />}>
              <Route path="*" element={<AdminRoutes />} />
            </Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App