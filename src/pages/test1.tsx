import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const test1: React.FC = () => {
  useEffect(()=>{
    alert("welcome")
  },[])

  return (
    <div>
      <div></div>
    </div>
  );
};

export default test1;
