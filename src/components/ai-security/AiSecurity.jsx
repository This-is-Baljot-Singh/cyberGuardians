import './AiSecurity.css'

const AiSecurity = () => {
  return (
    <>
        <div id="ai-security-overview">
            <div id="active-threats-div">
                <p><span>Active Threats</span> <img id='redShield-icon' src="/icons/redShield.png"/></p>
                <p id="threats-count">0</p>
                <p id="threats-comparison">12% From Yesterday</p>
            </div>
            <div id="blocked-ips-div">
                <p><span>Blocked IPs</span> <img id='block-icon' src="/icons/block.png"/></p>
                <p id="blocked-count">0</p>
                <p id="blocked-stat">+84 in last 24h</p>
            </div>
            <div id="response-time-div">
                <p><span>Response Time</span> <img id='thunder-icon' src="/icons/thunder.png"/></p>
                <p id="response-time-taken">0.3s</p>
                <p id="response-time-stat">Average</p>
            </div>
            <div id="ai-accuracy-div">
                <p><span>AI Accuracy</span> <img id='bluerobo-icon' src="/icons/bluerobo.png"/></p>
                <p id="accuracy-percentage">99.8%</p>
                <p id="accuracy-duration">Last 7 days</p>
            </div>
        </div>

        <div id="attack-logs-and-blocked-ips-container">
            <div id="attack-log-container">
                <header id="attack-log-header">Live Attack Logs</header>
                <div id="attack-log-items">
                    <div id="attack-log-heads">
                        <p id="attack-log-time">Time</p>
                        <p id="attack-log-ip">IP Address</p>
                        <p id="attack-log-type">Type</p>
                        <p id="attack-log-status">Status</p>
                        <p id="attack-log-action">Action</p>
                    </div>
                    <div id="attack-logs">
                        <div className="attack-log-item">
                            <p className='attack-time'>10:30:00</p>
                            <p className="attacked-ip">19.168.1.105</p>
                            <p className="attack-type">SQL Injection</p>
                            <p className="attack-status">Blocked</p>
                            <button className="attack-action">Details</button>
                        </div>
                        <div className="attack-log-item">
                            <p className='attack-time'>02:30:00</p>
                            <p className="attacked-ip">19.168.1.105</p>
                            <p className="attack-type">DDos Attack</p>
                            <p className="attack-status">Investigating</p>
                            <button className="attack-action">Details</button>
                        </div>
                        <div className="attack-log-item">
                            <p className='attack-time'>11:35:00</p>
                            <p className="attacked-ip">19.168.1.105</p>
                            <p className="attack-type">Brute Force</p>
                            <p className="attack-status">Resolved</p>
                            <button className="attack-action">Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="blocked-ips-container">
                <header id="blocked-ips-header">Blocked IPs</header>
                <div id="blocked-ips-list">
                    <div className="blocked-ip-item">
                        <div id="blocked-ip-details">
                            <p className="blocked-ip">192.168.1.105</p>
                            <p className="blocked-time">Blocked 2m ago</p>
                        </div>
                        <img id='redBlocked-icon' src="/icons/redBlocked.png"/>
                    </div>
                    <div className="blocked-ip-item">
                        <div id="blocked-ip-details">
                            <p className="blocked-ip">192.168.1.198</p>
                            <p className="blocked-time">Blocked 5m ago</p>
                        </div>
                        <img id='redBlocked-icon' src="/icons/redBlocked.png"/>
                    </div>
                    <div className="blocked-ip-item">
                        <div id="blocked-ip-details">
                            <p className="blocked-ip">192.168.1.221</p>
                            <p className="blocked-time">Blocked 9m ago</p>
                        </div>
                        <img id='redBlocked-icon' src="/icons/redBlocked.png"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AiSecurity