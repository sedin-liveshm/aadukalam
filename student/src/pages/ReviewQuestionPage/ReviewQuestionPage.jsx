import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { API_URL } from '../../config';
function ReviewQuestionPage(){
    const {uname , qname } = useParams()
    const [reviewData , setReviewData] = useState({})
    useEffect(()=>{
        const getData = async() =>{
            const review = await fetch(`${API_URL}/basic/review-question`, {
                method:"POST",
                body: JSON.stringify({uname, qname}),
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const data = await review.json()
            setReviewData(data)
        }

        if(Object.keys(reviewData).length === 0){
            getData()
        }
    },[])
    return (
        <div>
            
        </div>
    )
}
export default ReviewQuestionPage