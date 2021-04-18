import "../landing page/feature.css"
function Features(props) {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row" id="mar">
                <div className="col-12">
                        <h5 id="head">{props.heading}</h5>
                        <p id="det">{props.details}</p>
                    </div>
                </div>
            </div>
        </div>
        // <div className="container-fluid">
        //     <div className="container">
        //         <div className="row" id="mar">
                    // <div className="col-4">
                    //     <h5 id="head">Continuous Integration And Continuous Delivery</h5>
                    //     <p id="det">As an extensible automation server, Jenkins can be used as a simple
                    //      CI server or turned into the continuous delivery hub for any project.</p>
                    // </div>
        //             <div className="col-4">
        //                 <h5 id="head">Easy installation</h5>
        //                 <p id="det">Jenkins is a self-contained Java-based program, ready to run out-of-the-box, with packages for Windows, Linux, macOS and other Unix-like operating systems.</p>
        //             </div>
        //             <div className="col-4">
        //                 <h5 id="head">Easy Configuration</h5>
        //                 <p id="det">Jenkins can be easily set up and configured via its web interface, which includes on-the-fly error checks and built-in help.</p>
        //             </div>
        //         </div>
        //         <div className="row" id="mar">
        //             <div className="col-4">
        //                 <h5 id="head">Plugins</h5>
        //                 <p id="det">With hundreds of plugins in the Update Center, Jenkins
        //                  integrates with practically every tool in the continuous integration and 
        //                  continuous delivery toolchain.</p>
        //             </div>
        //             <div className="col-4">
        //                 <h5 id="head">Extensible</h5>
        //                 <p id="det">Jenkins can be extended via its plugin architecture,
        //                  providing nearly infinite possibilities for what Jenkins can do.</p>
        //             </div>
        //             <div className="col-4">
        //                 <h5 id="head">Distributed</h5>
        //                 <p id="det">Jenkins can easily distribute work across multiple machines, helping drive builds,
        //                  tests and deployments across multiple platforms faster.</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
export default Features;