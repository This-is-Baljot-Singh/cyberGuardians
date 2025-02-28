import './Reports.css'

const Reports = () => {
  return (
    <>
        <div id="report-stats-overview-container">
            <div className='report-stats-div'>
                <p>Total Reports</p>
                <p id="total-reports-count">2,487</p>
                <p id="threats-comparison">+12% From last month</p>
            </div>
            <div className='report-stats-div'>
                <p>Active Incidents</p>
                <p id="active-incidents-count">24</p>
                <p id="active-incidents-stat">+3 new today</p>
            </div>
            <div className='report-stats-div'>
                <p>System Health</p>
                <p id="resolution-rate">94.2%</p>
                <p id="resolution-stat">+2.1% improvement</p>
            </div>
        </div>

        <div id="recent-security-reports-container">
            <header id="recent-reports-header">
                Recent Security Reports
                <button id="view-all-reports-btn">View All</button>
            </header>
            <div id="recent-reports-table">
                <div id="recent-report-titles">
                    <p id="report-name-title">Report Name</p>
                    <p id="report-type-title">Type</p>
                    <p id="report-date-title">Date</p>
                    <p id="report-action-title">Action</p>
                </div>
                <div className="recent-report-items">
                    <p className="report-name">Weekly Threat Analysis</p>
                    <p className="type">Weekly</p>
                    <p className="date">Mar 15, 2025</p>
                    <p className="report-download-btn">
                        <button className="download-btn"><img className='download-icon' src="/icons/download.png"/></button>
                    </p>
                </div>
                <div className="recent-report-items">
                    <p className="report-name">Weekly Threat Analysis</p>
                    <p className="type">Weekly</p>
                    <p className="date">Mar 15, 2025</p>
                    <p className="report-download-btn">
                        <button className="download-btn"><img className='download-icon' src="/icons/download.png"/></button>
                    </p>
                </div>
            </div>
        </div>

        <div id="suggestion-and-metrices-container">
            <div id="security-sugestion">
                <header id="security-suggestion">AI Security Suggestion</header>

            </div>
            <div id="incident-response-metrices">
                <header id="response-metrices-header">Incident Response Metrices</header>
                <div id="response-metrices">
                    <div className='response-matrix'>
                        <p>Average Response Time</p>
                        <p id="response-time-take">12 minutes</p>
                    </div>
                    <div className='response-matrix'>
                        <p>Resolution Rate</p>
                        <p id="resolution-percentage">0%</p>
                    </div>
                    <div className='response-matrix'>
                        <p>Compilance Score</p>
                        <p id="compilance-score">0%</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Reports