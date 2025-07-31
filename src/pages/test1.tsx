import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const Test1: React.FC = () => {
  useEffect(()=>{
    axios
      .get("http://localhost:3001/api/test1")
      .then((Response: any) => {
        console.log(`## response:`, Response)
      })
      .catch((err: any) => {})
  },[]);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Test1;
