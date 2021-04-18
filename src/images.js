import pic from "./assets/download.png"
function Header()
{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <img src={pic} alt="logo"/>
                </div>
            </div>
        </div>
    )
}
export default Header;