import "../landing page/landingheader.css"
function LandingHeader() {
    return (
        <div className="container-fluid">
            <div className="row" id="headerRow">
                <div className="col-1">
                    <h5 id="name">Jenkins</h5>
                </div>
                <div className="col-1">
                    <h4 id ="cd">cd</h4>
                </div>
                <div className="col-10">
                    <ul>
                        <li className="navbar">Blog</li>
                        <li className="navbar">Documentation</li>
                        <li className="navbar">Plugins</li>
                        <li className="navbar">Community</li>
                        <li className="navbar">Subprojects</li>
                        <li className="navbar">About</li>
                        <li className="navbar">English</li>
                        <li className="navbar"><button id="downloadButton">Download</button></li>
                        <li className="navbar"><input id="searchform" type="search" placeholder="Search" size="20px" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default LandingHeader;