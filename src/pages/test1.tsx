import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const Test1: React.FC = () => {
  const fetchData=async () => {
    try{
      let response: any = await axios
        .get("http://localhost:3001/api/test1")
      console.log(`## response:`, Response)
      response = response?.data
      console.log(`## response.data:`, Response)
    } catch (error:any) {

    }
  }
  useEffect(()=>{
  },[]);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Test1;
