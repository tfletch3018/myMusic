import React from 'react';
import { Collapsible } from 'collapsible-react-component';
import 'collapsible-react-component/dist/index.css'
import { Link } from "react-router-dom";
import "./style.css";

const Collapse = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <>
        <div className='center'>
        <button className="center collapseBtn" type="button" onClick={() => {
            setOpen(!open)
        }}
        >
            {open ? "Close" : "Open"}
        </button>
        </div>
        <Collapsible open={open}>
        <p className='center'>
            Tales as Old as Time
        </p>
        <Link className="center" 
        to="/home/talesAsOldAsTime">
        <button className="modalBtn">Learn more...
        
        </button>
        </Link>
        </Collapsible>
        </>
    )
}

export default Collapse;