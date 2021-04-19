import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import LandingHeader from "./modules/landing page/landingHeader"
import LandingBanner from "./modules/landing page/landing Banner"
import Header from "./images"
import Features from "./modules/landing page/feature"
import Video from "./modules/landing page/video"
import RecentBlogPost from "./modules/landing page/RecentBlogPost"
import BlogPost from "./modules/landing page/blog post"
import FooterImages from "./footerimages"
function App() {
  return (
    <div className="App">
      <LandingHeader />
      <div className="container-fluid">
        <div className="row">
          <div className="col-6" id="logo">
            <Header />
          </div>
          <div className="col-6">
            <LandingBanner />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4"><Features heading="Continuous Integration and Continuous Delivery" details="As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project." />
          </div>
          <div className="col-4"><Features heading="Easy installation" details="Jenkins is a self-contained Java-based program, ready to run out-of-the-box, with packages for Windows, Linux, macOS and other Unix-like operating systems." />
          </div>
          <div className="col-4"><Features heading="Easy Configuration" details="Jenkins can be easily set up and configured via its web interface, which includes on-the-fly error checks and built-in help." />
          </div>
        </div>
        <div className="row">
          <div className="col-4"><Features heading="Plugins" details="With hundreds of plugins in the Update Center, Jenkins integrates with practically every tool in the continuous integration and continuous delivery toolchain." />
          </div>
          <div className="col-4"><Features heading="Extensible" details="Jenkins can be extended via its plugin architecture, providing nearly infinite possibilities for what Jenkins can do." />
          </div>
          <div className="col-4"><Features heading="Distributed" details="Jenkins can easily distribute work across multiple machines, helping drive builds, tests and deployments across multiple platforms faster." />
          </div>
        </div>
      </div>
      <Video />
      <div className="container-fluid" id = "blog-Background">
        <div className="row">
          <RecentBlogPost/>
        </div>
          <div className="row" id="row">
            <div className="col-1"></div>
            <div className="col-10" id="blogcontent">
              <BlogPost
                heading="Jenkins operator becomes an official subproject!"
                detail="
              We are happy to announce that Jenkins Operator officially became an official Jenkins sub-project.
              What does it mean for the project?
              Becoming an official part of the Jenkins project was a major step towards better alignment with the overall Jenkins’ roadmap and more opportunities to increase adoption of the Jenkins Operator project.
              Finally, with a dedicated team at VirtusLab actively maintaining the project we can engage with...
              " firstLink="Bartek Antoniak" secondLink="Saylwia Brant" firstLi = "Kubernetes" secondLi="operator"/>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row" id="row">
            <div className="col-1"></div>
            <div className="col-10" id="blogcontent">
              <BlogPost
                heading="Welcome the SheCodeAfrica Contributhon participants!"
                detail="
                The SheCodeAfrica Contributhon started April 1, 2021.
                The SheCodeAfrica Contributhon is a boot camp where African women are paid to work with open source organizations on selected projects with dedicated mentors.
                This program aims to create a more diverse, inclusive, and innovative culture within the African open source ecosystem by matching African women in technology with sponsor and mentor open source organizations.
                The 5 mentees joining the...
                "
               firstLink="Mark Waite" secondLink="" firstLi = "events" secondLi="community"/>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row" id="row">
            <div className="col-1"></div>
            <div className="col-10" id="blogcontent">
              <BlogPost
                heading="Welcome the SheCodeAfrica Contributhon participants!"
                detail="
                The SheCodeAfrica Contributhon started April 1, 2021.
                The SheCodeAfrica Contributhon is a boot camp where African women are paid to work with open source organizations on selected projects with dedicated mentors.
                This program aims to create a more diverse, inclusive, and innovative culture within the African open source ecosystem by matching African women in technology with sponsor and mentor open source organizations.
                The 5 mentees joining the...
                "
               firstLink="Mark Waite" secondLink="" firstLi = "events" secondLi="community"/>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row" id="row">
            <div className="col-1"></div>
            <div className="col-10" id="blogcontent">
              <BlogPost
                heading="Welcome the SheCodeAfrica Contributhon participants!"
                detail="
                The SheCodeAfrica Contributhon started April 1, 2021.
                The SheCodeAfrica Contributhon is a boot camp where African women are paid to work with open source organizations on selected projects with dedicated mentors.
                This program aims to create a more diverse, inclusive, and innovative culture within the African open source ecosystem by matching African women in technology with sponsor and mentor open source organizations.
                The 5 mentees joining the...
                "
               firstLink="Mark Waite" secondLink="" firstLi = "events" secondLi="community"/>
            </div>
            <div className="col-1"></div>
          </div>
      </div>
      <FooterImages/>
    </div>
  );
}

export default App;
