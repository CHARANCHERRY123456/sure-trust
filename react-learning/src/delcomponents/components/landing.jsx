import React, { useEffect, useState } from 'react'


const array=[{icon:"https://img.icons8.com/ios-filled/50/666666/home.png",
title:"Home"},
{icon:"https://img.icons8.com/ios-filled/50/666666/conference-call.png",
title:"My Network" },
{icon:"https://img.icons8.com/ios-filled/50/666666/briefcase.png",
title:"Jobs"},
{icon:"https://img.icons8.com/ios-filled/50/666666/bell.png",
title:"Notifications"},
{icon:"https://img.icons8.com/ios-filled/50/666666/user.png" ,
title:"Me"}];

const LoginHeader = () => {
    function hadleClickCount(){
        setCount(count + 1)
    }    
    const [count , setCount] = useState(0)
    useEffect(()=>{
        console.log("now the count is " , count);
    },[count]) 
    return <div>
        <h1>{count}</h1>
        <button onClick={hadleClickCount}>Increase Count</button>
    </div>
return (
    <div className="loginHeaderContainer">
        <div className="oorke">
            <span>charan</span>
        </div>
      <div className="loginLogoContainer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Logo" class="logo"/> 
            <div class="loginSearchBar">
                <input type="text" className="SearchBarInput" placeholder="Search"/>
                <img src="https://img.icons8.com/ios-filled/50/666666/search.png" className="SearchIcon"/>
            </div>
      </div>
      <div className="loginHeaderIconsContainer">
        {array.map((item) => (
          <div className="singleIconContainer">
            <img src={item.icon} className="singleIconImage"></img>
            <div className="iconName">{item.title} </div>
         </div>
        ))}

         
      </div>
    </div>
  )
};


export default LoginHeader;