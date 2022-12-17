import {Link} from "react-router-dom";

function Login(){
return (
    <div>
        <h1>
          welcome  Login page
        </h1>
  <br />
  <br />
  <br />
        <button><Link to="/" >Home Page</Link></button>
        <br />
        <br />
        <button><Link to="/admin" >Admin Page</Link></button>
    </div>
)
}
export default Login