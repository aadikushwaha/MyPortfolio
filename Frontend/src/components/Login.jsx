import axios from "axios";
import React from "react";
import { useState } from "react";

const Login = () => {
 const [mobile, setmobile] = useState();
 const [password, setpassword] = useState();


 
 return (<div>
 <input type="text" placeholder="Enter your phone no." />
 <input type="password" placeholder="Enter your password" />
    </div>)
}
export default Login;
