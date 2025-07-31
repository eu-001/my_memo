import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

interface TestType {
  content: string,
  createdDt: string,
  id: number,
  title: string

}

const Test1: React.FC = () => {
  const fetchData=async () => {
    try{
      let response: any = await axios
        .get("http://localhost:3001/api/test1")
      console.log(`## response:`, Response)
      response = response?.data?.data
      let data: TestType = response;
      console.log(`## response.data:`, Response)
    } catch (error:any) {

    }
  }
  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Test1;
