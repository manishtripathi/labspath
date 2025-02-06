
import Toggle from "../../Component/toggle"
import Logo from '../../assets/img/logo.svg'


const Login = () => {
    return (
        <>
            <div className='backgroundimage'>                
              
            </div>
            <div className="login-container">
                <div className="login">
                        <h1> <img src={Logo} alt="logo" title="labslogo" /></h1>
                        <h4> Effortless Laboratory Management</h4>
                        <h3> Choose Account Type</h3>               
                            <div style={{padding: '20px'}}>
                                <Toggle/>
                            </div>                
                </div>
           </div>
        </>
    )
        
    
}
export default Login