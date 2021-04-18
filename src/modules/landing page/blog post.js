import "../landing page/blogpost.css"
function BlogPost(props)
{
    return(
        <div className="container-fluid">
            
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10" id="content">
                        <h5><a id="mainLink" href="#">{props.heading}</a></h5>
                        <p>{props.detail}</p>
                        <h6 id = "blogpostlinks"><a id = "blogpostlinks" href="#">{props.firstLink}</a>,<a id = "blogpostlinks" href="#">{props.secondLink}</a></h6>
                        <ul>
                            <li><a href="">{props.firstLi}</a></li>
                            <li><a href="">{props.secondLi}</a></li>
                        
                        </ul>
                    </div>
                    <div className="col-1"></div>
                </div>
           
        </div>

    )
}
export default BlogPost;