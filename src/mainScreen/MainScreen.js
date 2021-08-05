import "./firstScreen.css";

const MainScreen= () => {
    return (
        <div className="blackBackground">
            <center>
                <img src="infoIcon.png" className="img" alt='infoLogo'/>
            </center>
            <center>
                <p className="firstScreenText">Attendance Check System </p>
            </center>
        </div>
    );
};

export default MainScreen