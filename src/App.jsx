import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './components/security-dashboard/Dashboard.jsx'
import Overview from './components/overview/Overview.jsx'
import ThreatMonitoring from './components/threat-monitoring/ThreatMonitoring.jsx'
import VulnerabilityScanner from './components/vulnerability-scanner/VulnerabilityScanner.jsx'
import AiSecurity from './components/ai-security/AiSecurity.jsx'
import Reports from './components/reports/Reports.jsx'
import UserActivity from './components/user-activity/UserActivity.jsx'

function App() {
  return (
    <BrowserRouter>
      <div id="split-container">
        <div id="left-split">
          <div className='menuBar-div'>
            <header id='secureguard-header'>
              <img id='shield-icon' src="/icons/shield.png"/> SecureGuard
            </header>
            <div className="menuBar-buttons">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `menuBar-button ${isActive ? 'active' : ''}`
                }
              >
                <img id='home-icon' src="/icons/home.png"/> Overview
              </NavLink>
              <NavLink 
                to="/threat-monitoring" 
                className={({ isActive }) => 
                  `menuBar-button ${isActive ? 'active' : ''}`
                }
              >
                <img id='exclamation-icon' src="/icons/exclamation.png"/> Threat Monitoring
              </NavLink>
              <NavLink 
                to="/vulnerability-scanner" 
                className={({ isActive }) => 
                  `menuBar-button ${isActive ? 'active' : ''}`
                }
              >
                <img id='bug-icon' src="/icons/bug.png"/> Vulnerability Scanner
              </NavLink>
              <NavLink 
                to="/ai-security" 
                className={({ isActive }) => 
                  `menuBar-button ${isActive ? 'active' : ''}`
                }
              >
                <img id='roboface-icon' src="/icons/roboface.png"/> AI Security
              </NavLink>
              <NavLink 
                to="/user-activity" 
                className={({ isActive }) => 
                  `menuBar-button ${isActive ? 'active' : ''}`
                }
              >
                <img id='people-icon' src="/icons/people.png"/> User Activity
              </NavLink>
              <NavLink 
                to="/reports" 
                className={({ isActive }) => 
                  `menuBar-button ${isActive ? 'active' : ''}`
                }
              >
                <img id='docs-icon' src="/icons/docs.png"/> Reports & Logs
              </NavLink>
            </div>
          </div>
        </div>
        <div id="right-split">
          <Dashboard />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/threat-monitoring" element={<ThreatMonitoring />} />
            <Route path="/vulnerability-scanner" element={<VulnerabilityScanner />} />
            <Route path="/ai-security" element={<AiSecurity />} />
            <Route path="/user-activity" element={<UserActivity />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App