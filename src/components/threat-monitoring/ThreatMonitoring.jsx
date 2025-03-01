import './ThreatMonitoring.css'

const ThreatMonitoring = () => {
  return (
    <>
        <div id="threats-stats">
            <div id="active-threats-div">
                <p><span>Active Threats</span> <img id='virus-icon' src="/icons/virus.png"/></p>
                <p id="active-threats-count">7</p>
            </div>
            <div id="network-status-div">
                <p><span>Network Status</span> <img id='target-icon' src="/icons/target.png"/></p>
                <p id="network-state">Stable</p>
            </div>
            <div id="systems-monitored-div">
                <p><span>Systems Monitored</span> <img id='monitor-icon' src="/icons/monitor.png"/></p>
                <p id="system-monitored-count">156</p>
            </div>
            <div id="threat-level-div">
                <p><span>Threat Level</span> <img id='alert-icon' src="/icons/alert.png"/></p>
                <p id="threat-level-state">Medium</p>
            </div>
        </div>

        <div id="threats-stats-split-container">
            <div id="threats-stats-left-split">
                <div id="suricata-alerts-container">
                    <header id="suricata-alerts-header">Real-Time Suricata Alerts</header>
                    <div id="suricata-alerts-list">
                        <div className="suricata-alert">
                            <p className="suricata-alert-header">Alert 1 <span className="suricata-alert-message">Alert 1 Message</span>
                            </p>
                            <p className="suricata-alert-time">2m ago</p>
                        </div>
                        <div className="suricata-alert">
                            <p className="suricata-alert-header">Alert 1 <span className="suricata-alert-message">Alert 1 Message</span>
                            </p>
                            <p className="suricata-alert-time">2m ago</p>
                        </div>
                    </div>
                </div>
                <div id="activity-heatmap-container">
                    <header id="activity-heatmap-header">Network Activity Heatmap</header>
                    <div id="activity-heatmap-chart">
                        <div className='heatmap-column'>
                            <p className='heatmap-bar-header' id='heatmap-low-header'>Low</p>
                            <div className='heatmap-bar' id="heatmap-low-bar">
                                <div id="heatmap-low-inner-bar"></div>
                            </div>
                        </div>
                        <div className='heatmap-column'>
                            <p className='heatmap-bar-header' id='heatmap-mid-header'>Mid</p>
                            <div className='heatmap-bar' id="heatmap-mid-bar">
                                <div id="heatmap-mid-inner-bar"></div>
                            </div>
                        </div>
                        <div className='heatmap-column'>
                            <p className='heatmap-bar-header' id='heatmap-high-header'>High</p>
                            <div className='heatmap-bar' id="heatmap-high-bar">
                                <div id="heatmap-high-inner-bar"></div>
                            </div>
                        </div>
                        <div className='heatmap-column'>
                            <p className='heatmap-bar-header' id='heatmap-crit-header'>Crit</p>
                            <div className='heatmap-bar' id="heatmap-crit-bar">
                                <div id="heatmap-crit-inner-bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="threats-stats-right-split">
                
                
                <div id="ai-threat-analysis-container">
                    <header id="ai-threat-analysis-header">AI Threat Analysis</header>
                    <div id="ai-threat-analysis-menu">
                        <button className='ai-threat-menu-item' id="pattern-recognition">
                            <p>Pattern Recognition</p>
                        </button>
                        <button className='ai-threat-menu-item' id="pattern-recognition">
                            <p>Pattern Recognition</p>
                        </button>
                    </div>
                    <div id="ai-threat-analysis-menu">
                        <button className='ai-threat-menu-item' id="pattern-recognition">
                            <p>Pattern Recognition</p>
                        </button>
                        <button className='ai-threat-menu-item' id="pattern-recognition">
                            <p>Pattern Recognition</p>
                        </button>
                    </div>
                </div>
                <div id="threat-level-indicator-container">
                    <header id="threat-level-header">Threat Level Indication</header>
                    <div id="threat-level-stat">
                        <p id="threat-level-status">Medium <span id="detected-threat-status">Elevated risk detected</span></p>
                        <img id='elevated-icon' src="/icons/elevated.png"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ThreatMonitoring