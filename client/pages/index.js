
import { useContext } from 'react';
import { AuthContext } from '../context/auth';



function Home(){
    const [auth, setAuth]   =   useContext(AuthContext);
    return(
        <div>
           
            <h1>Home</h1>
            <pre>{JSON.stringify(auth, null, 4)}</pre>
            <br />
           
            
        </div>
    );
}

export default Home;