// import './searchHome.css';
import { useNavigate } from "react-router-dom";


function SearchHome() {
  let navigate = useNavigate();
  return (
    <div  >
      <button onClick={() => {
        navigate('/')
      }}> Back </button>
      divyu
      {/* <BrowserRouter>
        <nav>
     <Link to="/password" component = {searchHome}>searchHome</Link>
  
        </nav>
        </BrowserRouter> */}





    </div>

  );
}

export default SearchHome;
