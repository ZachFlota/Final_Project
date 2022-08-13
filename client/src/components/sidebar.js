import '../App.css';
import characterIcon from '../assets/characterIcon.png';
import noteIcon from '../assets/noteIcon.png';
import plotIcon from '../assets/plotIcon.png';
import promptIcon from '../assets/promptIcon.png';
import settingIcon from '../assets/settingIcon.png';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Tool Bar</h3>
                </div>    
                <div>
                    <ul className="toolbox">
                        <li className="iconlist">
                            <a href="/workspace/tools/characters">
                                <img className="icon" src={characterIcon} alt="Characters"></img>
                            </a>
                        </li>
                        <li className="iconlist">
                            <img className="icon" src={settingIcon} alt="Settings"></img>
                        </li>
                        <li className="iconlist">
                            <img className="icon" src={plotIcon} alt="Plots"></img>
                        </li>
                        <li className="iconlist">
                            <img className="icon" src={noteIcon} alt="Notes"></img>
                        </li>
                        <li className="iconlist">
                            <img className="icon" src={promptIcon} alt="Writing Prompt"></img>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar