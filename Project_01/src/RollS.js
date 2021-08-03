import React, {useEffect} from 'react'
import axios from 'axios';
import RollsTable from './RollSTable';

const RollS = () => {


    useEffect(()=> {
        const fetchEvents = async () =>{
          const res = axios.get("http://122.34.166.121:5090/")
          console.log(res);
        }
        fetchEvents();
      }) 



    return (
        <div>
            <div className="title">
                <h2>출석현황</h2>
                <select className="grade" 
                    onChange={
                    () => {
                        const res = axios.get("http://122.34.166.121:5090/")
                    }}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
               <RollsTable/>
            </div>
        </div>
    )
}

export default RollS;