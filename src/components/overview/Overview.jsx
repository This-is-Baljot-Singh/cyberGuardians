import './Overview.css';

const Overview = () => {
// const Overview = ({ label, value }) => {
    // const filledWidth = `${value}%`;
    
  return (
    <>
        <div id="overview-stats-1">
            <div id="total-threats-div">
                <p><span>Total Warnings</span> <img id='redShield-icon' src="/icons/redShield.png"/></p>
                <p id="warning-count">37</p>
            </div>
            <div id="active-alerts-div">
                <p><span>Critical Threats</span> <img id='bell-icon' src="/icons/bell.png"/></p>
                <p id="critical-count">19</p>
            </div>
            <div id="system-health-div">
                <p><span>System Health</span> <img id='heart-icon' src="/icons/heart.png"/></p>
                <p id="health-percentage">99.2%</p>
            </div>
            <div id="network-traffic-div">
                <p><span>Network Traffic</span> <img id='traffic-icon' src="/icons/traffic.png"/></p>
                <p id="traffic-count">1.2 TB</p>
            </div>
        </div>

        <div id="overview-stats-2">
            <div id="network-activity-container">
                <div id="network-activity-bar">
                    <p id="network-activity-header">Network Activity</p>
                    <button id="24h-activity-button">24h</button>
                    <button id="7d-activity-button">7d</button>
                    <button id="1m-activity-button">1m</button>
                </div>
                <div id="network-activity-chart"></div>
            </div>
            <div id="latest-threats-container">
                <header id="latest-threats-header">Latest Threats</header>
                <div id="latest-threats-list">

                </div>
            </div>
        </div>

        <div id="overview-stats-3">
            <div id="system-resources-container">
                <header id="system-resources-header">System Resources</header>
                <div id="resources-meters">
                    <div className="meter" id="cpu-usage">
                        <p id="cpu-usage-header">CPU Usage <span id="cpu-usage-value">15.76%</span></p>
                        <div className="meter-bar" id="cpu-usage-bar"></div>
                    </div>
                    <div className="meter" id="memory-usage">
                        <p id="memory-usage-header">Memory <span id="memory-usage-value">2.65%</span></p>
                        <div className="meter-bar" id="memory-usage-bar"></div>
                    </div>
                    <div className="meter" id="disk-space">
                        <p id="disk-space-header">Disk Space <span id="disk-space-value">45%</span></p>
                        <div className="meter-bar" id="disk-space-bar"></div>
                    </div>
                </div>
            </div>
            <div id="top-vulnerabilities-container">
                <header id="top-vulnerabilities-header">Top Vulnerabilities</header>
                <div id="vulnerabilities-list">
                    
                </div>
            </div>
        </div>
    </>
  )
}

// function SystemResources() {
//     const [cpuUsage, setCpuUsage] = useState(0);
//     const [memoryUsage, setMemoryUsage] = useState(0);
//     const [diskUsage, setDiskUsage] = useState(0);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await fetch('/api/system-resources'); // Replace with your backend API endpoint
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           const data = await response.json();
//           setCpuUsage(data.cpuUsage);
//           setMemoryUsage(data.memoryUsage);
//           setDiskUsage(data.diskUsage);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       };
  
//       fetchData(); // Fetch data initially
  
//       const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds (adjust as needed)
  
//       return () => clearInterval(intervalId); // Cleanup interval on unmount
//     }, []);
  
//     return (
//       <div>
//         <Meter label="CPU Usage" value={cpuUsage} />
//         <Meter label="Memory" value={memoryUsage} />
//         <Meter label="Disk Space" value={diskUsage} />
//       </div>
//     );
//   }

export default Overview