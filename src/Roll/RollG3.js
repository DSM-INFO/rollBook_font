import React from 'react'

const RollG3 = () => {

    useEffect(()=> {
        const fetchEvents = async () =>{
          const res =  await axios.patch("http://122.34.166.121:5090/")
          console.log(res);
        }
        fetchEvents();
      }) 

ㄴ
    return (
    <div className="g3">
        <div className="title">
            <span>이름</span> <span>출석여부</span>
        </div>
    </div>
    )
}

export default RollG3
