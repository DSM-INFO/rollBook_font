import "./firstScreen.css";
import infoLogo from "../img/infoIcon.png";

const MainScreen = () => {
    return (
        <div className="blackBackground">
            <center>
                <img src={infoLogo} className="img" alt="infoLogo" />
            </center>
            <center>
                <p className="firstScreenText">Attendance Check System </p>
            </center>
        </div>
    );
};

export default MainScreen;
