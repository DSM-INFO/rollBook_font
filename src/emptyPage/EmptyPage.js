import "./emptyPage.css";
import message404 from "../img/Message.png";
import cat404 from "../img/empty.png";
import githubLink from "../img/github.png";

const EmtpyPage = () => {
    return (
        <div>
            <div className="emptyPage_background">
                <img src={message404} className="emptyMessage" alt="Message" />
                <img src={cat404} className="cat404" alt="404Cat" />
            </div>
            <div className="showDevelopersScreen">
                <div className="DeveloperScreenToCenter">
                    <div className="showDevelopers">
                        <h1 className="DevelopmentPart">Font-End</h1>
                        <center>
                            <p className="developer">이서유</p>
                            <p className="developer">배준수</p>
                        </center>
                    </div>
                    <div className="showDevelopers">
                        <h1 className="DevelopmentPart">Server</h1>
                        <center>
                            <p className="developer">정대현</p>
                        </center>
                    </div>
                </div>
                <div className="showProjectInfo">
                    <span className="projectName">2021 INFO RollBook</span>
                    <div>
                        <a href="https://github.com/DSM-INFO" target="_blank">
                            <img
                                src={githubLink}
                                className="githubIcon"
                                alt="githubLogo"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmtpyPage;
