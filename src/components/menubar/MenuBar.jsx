import React from 'react';
import './MenuBar.css'

const MenuBar = () => {
  return (
    <div className='menuBar-div'>
        <header id='secureguard-header'><img id='shield-icon' src="/icons/shield.png"/> SecureGuard</header>
        <div className="menuBar-buttons">
            <button className='menuBar-button'><img id='home-icon' src="/icons/home.png"/> Overview</button>
            <button className='menuBar-button'><img id='exclamation-icon' src="/icons/exclamation.png"/> Threat Monitoring</button>
            <button className='menuBar-button'><img id='bug-icon' src="/icons/bug.png"/> Vulnerability Scanner</button>
            <button className='menuBar-button'><img id='roboface-icon' src="/icons/roboface.png"/> AI Security</button>
            <button className='menuBar-button'><img id='people-icon' src="/icons/people.png"/> User Activity</button>
            <button className='menuBar-button'><img id='docs-icon' src="/icons/docs.png"/> Reports & Logs</button>
        </div>
    </div>
  )
}

export default MenuBar