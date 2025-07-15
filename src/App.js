import { Route,Routes, BrowserRouter as Router } from 'react-router-dom'
import AuthPage from './SignIn'
import Home from './pages/Home'
import HomeRoutes from './components/Route'

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/home/*" element={<Home />} >
              <Route path="*" element={<HomeRoutes />} />
            </Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App