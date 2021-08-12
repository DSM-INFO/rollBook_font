import { Link } from "react-router-dom";
import axios from "axios";
import "./RollS.css";

const RollS = () => {

   
    const fetchData = async () => {
        const res = await axios
        .get("https://rollbook.kro.kr:4093/admin/:grade", {
            /*id: idRef.current.value,
            name: nameRef.current.value,
            grade: gradeRef.current.value,*/
        })
        .then((res) => {
            console.log(res);
        });

        console.log(res);      
    }

    fetchData();

    return (
        <div className="roll">
            <div className="wrapper">
                <div>
                    <h2 className="titleR">출석현황</h2>
                </div>

                <form className="btns">
                    <Link className="uBtnS" to="/rollShow1">
                        1학년
                    </Link>

                    <Link className="uBtnS" to="/rollShow2">
                        2학년
                    </Link>

                    <Link className="uBtnS" to="/rollShow3">
                        3학년
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default RollS;
