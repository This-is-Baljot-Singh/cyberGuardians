import './UserActivity.css'

const UserActivity = () => {
  return (
    <>
        <div id="user-activity-stats">
            <div id="active-users-div">
                <p><span>Active Users</span> <img id='community-icon' src="/icons/community.png"/></p>
                <p id="active-users-count">0</p>
            </div>
            <div id="connected-devices-div">
                <p><span>Connected Devices</span> <img id='target-icon' src="/icons/target.png"/></p>
                <p id="connected-devices-count">0</p>
            </div>
            <div id="alerts-today-div">
                <p><span>Alerts Today</span> <img id='alert-icon' src="/icons/alert.png"/></p>
                <p id="alerts-count">0</p>
            </div>
            <div id="system-load-div">
                <p><span>System Load</span> <img id='monitor-icon' src="/icons/monitor.png"/></p>
                <p id="load-percentage">0%</p>
            </div>
        </div>

        <div id="active-users-and-system-resources">
            <div id="active-users-and-alerts-container">
                <header id="active-users-header">Active Users & Alerts</header>

            </div>
            <div id="user-system-resources-container">
                <header id="system-resources-header">System Resources</header>
                <div id="system-resources-meter">
                    <div id='system-cpu-usage-div'>
                        <p id="system-cpu-usage">CPU Usage <span id='cpu-usage-value'>0%</span></p>
                        <div className="mapping-bar">
                            <div className="mapping-bar-inner" id='system-cpu-usage-bar'></div>
                        </div>
                    </div>
                    <div id='system-memory-usage-div'>
                        <p id="system-memory-usage">Memory <span id='memory-usage-value'>0%</span></p>
                        <div className="mapping-bar">
                            <div className="mapping-bar-inner" id='system-memory-usage-bar'></div>
                        </div>
                    </div>
                    <div id='system-network-usage-div'>
                        <p id="system-network-usage">Network <span id='network-usage-value'>0%</span></p>
                        <div className="mapping-bar">
                            <div className="mapping-bar-inner" id='system-network-usage-bar'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="connected-iot-devices-container">
            <header id="connected-iot-devices-header">Connected IoT Devices</header>
            <div id="connected-iot-devices-grid">
                <div id="security-camera-div">
                    <img id='camera-icon' src="icons/camera.png"/>
                    <p>Security Camera</p>
                </div>
                <div id="temperature-div">
                    <img id='temperature-icon' src="icons/temperature.png"/>
                    <p> Temperature Sensor</p>
                </div>
                <div id="access-control-div">
                    <img id='door-icon' src="icons/door.png"/>
                    <p>Access Control</p>
                </div>
                <div id="network-switch-div">
                    <img id='connection-icon' src="icons/connection.png"/>
                    <p>Network Switch</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default UserActivity