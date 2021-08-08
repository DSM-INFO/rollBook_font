import React,{useEffect} from 'react';
import axios from 'axios';
import "./RollS.css"

const RollG1 = () => {

    useEffect(()=> {
        const fetchEvents = async () =>{
          const res =  await axios.patch("http://122.34.166.121:5090/")
          console.log(res);
        }
        fetchEvents();
      }) 

    return (
        <div className="g1">
            <div className="title">
                <span>이름</span> <span>출석여부</span>
            </div>
        </div>
    )
}

export default RollG1;
