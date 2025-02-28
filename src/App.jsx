import { useState } from 'react'
import './App.css'
import MenuBar from './components/menubar/MenuBar.jsx'
import Overview from './components/security-overview/Overview.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import ThreatMonitoring from './components/threat-monitoring/ThreatMonitoring.jsx'
import VulnerabilityScanner from './components/vulnerability-scanner/VulnerabilityScanner.jsx'
import AiSecurity from './components/ai-security/AiSecurity.jsx'
import Reports from './components/reports/Reports.jsx'

function App() {
  return (
    <>
      <div id="split-container">
        <div id="left-split">
          <MenuBar />
        </div>
        <div id="right-split">
          <Overview />
          <Reports />
        </div>
      </div>
    </>
  )
}

export default App
