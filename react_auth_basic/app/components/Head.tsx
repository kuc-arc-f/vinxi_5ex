import React from "react";
import {Link } from 'react-router-dom';
//
function Page() {
    return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about" className="mx-2" > [ about ]</Link>
        <Link to="/login" className="mx-2" > [ login ]</Link>
        <hr />
    </div>
    );
}
export default Page;
