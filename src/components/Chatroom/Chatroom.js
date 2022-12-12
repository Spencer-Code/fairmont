//import React from "react";
import React, { useState, useEffect, useRef } from "react";
// import useInterval from 'react-useinterval';
import Navigation from "../Navigation/Navigation";
import "./chatroom.css"
function Chatroom({getAppUser}){
    
    const CurrentUser = getAppUser().email
    console.log(getAppUser())
    const messageInput = useRef(null);
    function submitmessage(e) {

        e.preventDefault();
         fetch('http://localhost:5001/chatroom',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: CurrentUser,
                message: messageInput.current.value
            })
         }).then(response => response.json())
         .then(message => {
             if(message){
                
                messageInput.current.value = ""
                getmessage();
             }
         });
     }

     useEffect(() => { 
        getmessage();
     }, []);

    //  setInterval(() => {
    //     getmessage();
    // }, 5000);

     const [message, setMessage] = useState();
     
     function getmessage() {//refreshbutton
        
        
         fetch('http://localhost:5001/chatmessagepull',{
            
         }).then((response) => response.json())
         .then((json) => {
           
           console.log(json);
           setMessage(json)
           
         }).catch((err) => {
            console.log(err)
         });
     };


    return (
        <div>      
            
            <h1 id="title">Fairmont chatroom</h1>


            <div id="div1">
                <div id="div2">
                <div className="app">
                {message &&
                message.map((FMmesage) => (
                <div className="item-container">
                    User: {FMmesage.email} <div className="message">message: {FMmesage.message}</div>
                </div>
                ))}
            </div>

                </div>
            </div>

            <>

            <input ref={messageInput} type="text" placeholder="Enter message" />
            <input type="button" value="Submit" onClick={submitmessage}/>        
            <br></br>        
            <input type="button" value="Get New Messages" onClick={getmessage}/> 


            
            </>
                    

               
          
            
           
        </div>
    );
}

export default Chatroom
;