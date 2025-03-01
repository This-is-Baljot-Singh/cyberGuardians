import './AiSecurity.css'

const AiSecurity = () => {
  return (
    <>
        <div id="ai-security-overview">
            <div id="active-threats-div">
                <p><span>Active Threats</span> <img id='redShield-icon' src="/icons/redShield.png"/></p>
                <p id="threats-count">129</p>
                <p id="threats-comparison">12% From Yesterday</p>
            </div>
            <div id="blocked-ips-div">
                <p><span>Blocked IPs</span> <img id='block-icon' src="/icons/block.png"/></p>
                <p id="blocked-count">12</p>
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

        <div id="warned-ips-container">
            <header id="warned-ips-header">Warned IPs</header>
            <div id="warned-ips-list">
                <div id="warned-ips-titles">
                    <p>IP Address</p>
                    <p>Action</p>
                </div>
                <div className="warned-ip-list-item">
                    <p className="warned-ip-address">123.1.123.32</p>
                    <div className="warned-ip-action">
                        <button className="block-btn">Block</button>
                        <button className="ignore-btn">Ignore</button>
                    </div>
                </div>
                <div className="warned-ip-list-item">
                    <p className="warned-ip-address">123.1.123.32</p>
                    <div className="warned-ip-action">
                        <button className="block-btn">Block</button>
                        <button className="ignore-btn">Ignore</button>
                    </div>
                </div>
                <div className="warned-ip-list-item">
                    <p className="warned-ip-address">123.1.123.32</p>
                    <div className="warned-ip-action">
                        <button className="block-btn">Block</button>
                        <button className="ignore-btn">Ignore</button>
                    </div>
                </div>
                <div className="warned-ip-list-item">
                    <p className="warned-ip-address">123.1.123.32</p>
                    <div className="warned-ip-action">
                        <button className="block-btn">Block</button>
                        <button className="ignore-btn">Ignore</button>
                    </div>
                </div>
                <div className="warned-ip-list-item">
                    <p className="warned-ip-address">123.1.123.32</p>
                    <div className="warned-ip-action">
                        <button className="block-btn">Block</button>
                        <button className="ignore-btn">Ignore</button>
                    </div>
                </div>
                <div className="warned-ip-list-item">
                    <p className="warned-ip-address">123.1.123.32</p>
                    <div className="warned-ip-action">
                        <button className="block-btn">Block</button>
                        <button className="ignore-btn">Ignore</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AiSecurity