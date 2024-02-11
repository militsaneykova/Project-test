import React from "react";
import {useEffect, useState} from 'react'

const TourData = () => {

    const [tourData, setToursData] = useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/api/tours")
            // .then(response => response.json()
        .then(
            data => {
                setToursData(data)
                console.log(data)
            }
            
        )
    },[])
    return (
        <div className='homePage'>
            <p>{tourData.tour_name}</p>
            <p>{tourData.description}</p>
            <p>{tourData.price}</p>
            {/* {tourData.maps(tour =>{
                <div className="tourData">
                    <>{tour.description}</>
                    <>{tour.tour_name}</>
                </div>
            })
            } */}
        </div>
    
    )
}
export default TourData