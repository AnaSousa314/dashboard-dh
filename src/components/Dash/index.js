
import {FaChartLine,FaTachometerAlt,FaChartArea,FaFolder,FaTable} from 'react-icons/fa'

import './style.css'
export default function Dash(){
  return(
    <div className="dash">
      <div className="dash-admin">
        <div>
          <FaChartLine className="dash-graph"/>
          <span>ADMIN</span>
        </div>
      </div>

      <div className="dash-dashboard">
        <div>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </div>
      </div>

      <div className="dash-actions">
        <div>
          <ul>
            <li>ACTIONS</li>
            <li><FaFolder/><span className="dash-actions-icons">Pages</span></li>
            <li><FaChartArea /> <span className="dash-actions-icons">Charts</span></li>
            <li><FaTable/> <span className="dash-actions-icons">Tables</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}