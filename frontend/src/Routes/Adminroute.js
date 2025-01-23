import { useState, useEffect } from "react";
import { useAuth } from "../context/auth";
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";

export default function AdminRoute() {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth();
  
    useEffect(() => {
      const authCheck = async () => {
        if (!auth?.token) {
          setOk(false);
          return;
        }
  
        try {
          const { data } = await axios.get("https://mernproject-1-836a.onrender.com/api/v1/auth/admin", {
            headers: { Authorization: `Bearer ${auth.token}` },
          });
  
          setOk(data.ok);
        } catch (error) {
          console.error("Authorization failed:", error.message);
          setOk(false);
        }
      };
  
      authCheck();
    }, [auth?.token]);
  
    if (!auth?.token);
  
    return ok ? <Outlet /> : <div>Access denied. Redirecting...</div>;
  }
