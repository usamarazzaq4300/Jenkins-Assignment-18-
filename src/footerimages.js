import "./footerimages.css"
import pic1 from "./assets/cloudbees.png"
import pic2 from "./assets/osuosl.png"
import pic3 from "./assets/cdf.png"
import pic4 from "./assets/redhat.png"
import pic5 from "./assets/aws.png"
import pic6 from "./assets/github.png"
import pic7 from "./assets/jfrog.png"
import pic8 from "./assets/foot.png"
function FooterImages() {
    return (
        <div className="container-fluid" id="main">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <h6 id="greet">We thank the following organizations for their major commitments to support the Jenkins project.</h6>
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row" id="img">
                <div className="col-2" id="align">
                    <img src={pic1} alt="logo" />
                </div>
                <div className="col-3">
                    <img src={pic2} alt="logo" />
                </div>
                <div className="col-2" id="align">
                    <img src={pic3} alt="logo" />
                </div>
                <div className="col-2">
                    <img src={pic4} alt="logo" />
                </div>
                <div className="col-3" id="align">
                    <img src={pic5} alt="logo" />
                </div>
            </div>
            <div className="row" id="img2">
                <div className="col-6" id="github">
                    <img src={pic6} alt="logo" />
                </div>
                <div className="col-6">
                    <img src={pic7} alt="logo" />
                </div>
            </div>
            <div className="row" id="greetlinks">
                <div className="col-1"></div>
                <div className="col-10">
                    <h6 id="greet">We thank the following organizations for their support of the Jenkins project through free and/or open source licensing programs.</h6>
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row"  id="greetlinks">
                <div className="col-1"></div>
                <div className="col-10">
                    <ul>
                        <li className="footerlinks"><a className="footerlinks" href="#">Atlassian</a></li>
                        <li className="footerlinks"><a className="footerlinks" href="#">Data Dog</a></li>
                        <li className="footerlinks"><a className="footerlinks" href="#">Mac Cloud</a></li>
                        <li className="footerlinks"><a className="footerlinks" href="#">pagerDuty</a></li>
                        <li className="footerlinks"><a className="footerlinks" href="#">Sentary</a></li>
                        <li className="footerlinks"><a className="footerlinks" href="#">XMission</a></li>
                        <li className="footerlinks"><a className="footerlinks" href="#">Tsinghua University </a></li>
                        <li className="footerlinks"><a className="footerlinks" href="#">Fastly</a></li>
                        <li className="footerlinks"><a className="footerlinks" href="#">SpinUp</a></li>
                        <li className="footerlinks"><a className="footerlinks" href="#">IBM</a></li>
                    </ul>
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row" id="footer">
                <div className="col-1"></div>
                <div className="col-3" id="footerAlignment">
                    <p><a href="#" className="footlinks">Improve this page |</a> <a className="footlinks" href="#">Report a problem</a></p>
                    <img src={pic8} alt="logo" />
                    <br /><br />
                    <p className="footlinks">The content driving this site is licensed under the Creative Commons
                            Attribution-ShareAlike 4.0 license.</p>
                </div>
                <div className="col-2" id="footerAlignment">
                    <ul>
                        <li className="first"><hr/></li>
                        <li className="first"><h5 className="footlinks">Resources</h5></li>
                        <li className="first"><a className="footlinks" href="#">Downloads</a></li>
                        <li className="first"><a className="footlinks" href="#">Blog</a></li>
                        <li className="first"><a className="footlinks" href="#">Documentation</a></li>
                        <li className="first"><a className="footlinks" href="#">Plugins</a></li>
                        <li className="first"><a className="footlinks" href="#">Security</a></li>
                        <li className="first"><a className="footlinks" href="#">Contributing</a></li>

                    </ul>
                </div>
                <div className="col-2" id="footerAlignment">
                    <ul>
                        <li className="first"><hr/></li>
                        <li className="first"><h5 className="footlinks">Project</h5></li>
                        <li className="first"><a className="footlinks" href="#">Structure and governance</a></li>
                        <li className="first"><a className="footlinks" href="#">Issue tracker</a></li>
                        <li className="first"><a className="footlinks" href="#">Roadmap</a></li>
                        <li className="first"><a className="footlinks" href="#">GitHub</a></li>
                        <li className="first"><a className="footlinks" href="#">Jenkins on Jenkins</a></li>
                       

                    </ul>
                </div>
                <div className="col-2" id="footerAlignment">
                    <ul>
                        <li className="first"><hr/></li>
                        <li className="first"><h5 className="footlinks"> Community</h5></li>
                        <li className="first"><a className="footlinks" href="#">Events</a></li>
                        <li className="first"><a className="footlinks" href="#">Mailing lists</a></li>
                        <li className="first"><a className="footlinks" href="#">Chats</a></li>
                        <li className="first"><a className="footlinks" href="#">Special Interest Ggroups</a></li>
                        <li className="first"><a className="footlinks" href="#">Twitter</a></li>
                        <li className="first"><a className="footlinks" href="#">Reddit</a></li>
                    </ul>
                </div>
                <div className="col-2" id="footerAlignment">
                    <ul>
                        <li className="first"><hr/></li>
                        <li className="first"><h5 className="footlinks">Other</h5></li>
                        <li className="first"><a className="footlinks" href="#">Code of Conduct</a></li>
                        <li className="first"><a className="footlinks" href="#">Press information</a></li>
                        <li className="first"><a className="footlinks" href="#">Merchandise</a></li>
                        <li className="first"><a className="footlinks" href="#">Artwork</a></li>
                        <li className="first"><a className="footlinks" href="#">Awards</a></li>
                    </ul>
                </div>

            </div>

        </div>
        // </div>
    )
}
export default FooterImages;



