import './Overview.css';

const Overview = () => {
  return (
    <div id="overview">
        <div id="overview-left-split">
            <header id='overview-header'>Security Overview</header>
            <p id='systemStatus'>System Status: Healthy</p>
        </div>
        <div id="overview-right-split">
            <button>
                <img id="notification-icon" src="/icons/notification.png" />
            </button>
            <button>
                <img id="profile-icon" src="/icons/profile.png" />
            </button>
        </div>
    </div>
  )
}

export default Overview