import React from "react";
function LeftSection({imageURL,productName,productDescription,tryDemo,learnmore,googleplay,appstore}){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img className="mt-5" src={imageURL} alt='Pata ni kya hai'/>
                </div>
                
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                    <a href={tryDemo} style={{textDecoration:"None"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                    <a href={learnmore} style={{marginLeft:"50px", textDecoration:"None"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-3">
                    <a href={googleplay}><img src='media/images/googlePlayBadge.svg'/></a>
                    <a href={appstore}><img src='media/images/appstoreBadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LeftSection;