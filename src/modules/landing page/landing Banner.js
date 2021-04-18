import "../landing page/landingBanner.css"
function LandingBanner()
{
    return(
        <div className="container-fluid">
                <div className="row">
                    <div className="col-7">
                        <h1 id = "heading">
                            Jenkins
                        </h1>
                        <h5 id = "tagline">Build great things at any scale</h5>
                        <p id = "details">
                        The leading open source automation server, Jenkins provides hundreds
                        of plugins to support building, deploying and automating any project.
                        </p>
                    </div>
                </div>
            
        </div>
    )
}
export default LandingBanner;
