import React, { useEffect, useState } from "react";
import LinkMangementTableBody from "./LinkMangementTableBody";

function SupportLinkManagement(){
    const [linkList, setLinkList]= useState([]);
    const [loaded, setLoaded] = useState(false);
    const [filteredLinks, setFilteredLinks] = useState([])

    const onLinkSearchChanged = (e) => {
        console.log(e.target.value)
        // const filteredLinks = linkList.filter(user =>{
        //     return user.email.toLowerCase().includes(e.target.value.toLowerCase())
        // })
        // setFilteredLinks(filteredLinks)
        // console.log(filteredLinks);
    }

    useEffect(() =>{
        if(!loaded){
            fetch('http://localhost:5001/supportLinks',{
                        method: 'get',
                        headers: {'Content-Type': 'application/json'}
                    })
                    .then(data => { 
                        return data.json();
                    })
                    .then(jsonData => {
                        setLinkList(() => { return jsonData })
                        setFilteredLinks(() =>{return jsonData})
                        setLoaded(() =>{return true});
                    });
        }
    },[loaded])
    
    if(!loaded){
        return (
            <div>
                <h1>Support Link Management</h1>
                <p>Loading content...</p>
            </div>
        )
        
    } else {
        return (
            <div>
                <h1>Support Link Management</h1>
                {/* <SearchBox emailSearchChange ={onLinkSearchChanged}/> */}
                <LinkMangementTableBody linkList ={linkList} setStateLoaded = {setLoaded}/>
            </div>
        );
    }
}

export default SupportLinkManagement;