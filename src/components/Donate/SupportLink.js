import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SupportLink = (props) => {
    const id = useRef(props.id);
    const created = useRef(props.created);
    const [siteName, setSiteName] = useState(props.site_name);
    const [siteUrl, setSiteUrl] = useState(props.url);

    const navigate = useNavigate()

    function goToExternalSite(){
        const site = 'http://' + siteUrl.toString()
        window.location.replace(site)
    }

    return (
         <a onClick={() => goToExternalSite()}>{siteName}</a>
    );
}

export default SupportLink;