"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'

function StartInterview({params}) {
     
    const [interviewData,setInterviewData]=useState();
    const [MockInterviewQuestion,setMockInterviewQuestion]=useState();
    useEffect(()=>{
        GetInterviewDetails();

    },[])

    /**
     * Used to get Interview Details by MockId/Interview Id
     */
    const GetInterviewDetails = async () => {
          const result = await db.select().from(MockInterview)
              .where(eq(MockInterview.mockId, params.interviewId));
          const jsonMockResp = JSON.parse(result[0].jsonMockResp);
          console.log(jsonMockResp);
          setMockInterviewQuestion(jsonMockResp);
          setInterviewData(result[0]);
    }

  return (
    <div>StartInterview</div>
  )
}

export default StartInterview