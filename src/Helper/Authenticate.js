import axios from "axios";
const Authenticate = () => {

    const login = () => {
        axios.post("http://192.168.1.10:5500/login", props.loginData)
        .then( res=> {
            if(res.data.status === 0){
                alert(res.data.message);
            }
            else if(res.data.status === 1)
            {
                alert(res.data.message);
            }
            else{
                alert(res.data.message);
            }
        })
    }
}
export default Authenticate;