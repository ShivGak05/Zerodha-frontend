import React from "react";
import { Link } from "react-router-dom";
function NotFound(){
    return(
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>404 - Page Not Found</h1>
            </div>
            <Link className='btn btn-primary mt-3' to='/'>Back To Home</Link>
        </div>
    );
}
export default NotFound;