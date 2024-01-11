import logo from '../images/logo.svg';
import { pageLinks,socialLinks } from '../data';

const Navbar =() =>
{
return (
<nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
       
        <ul className="nav-links" id="nav-links">

        { //start of menu data 
        pageLinks.map((link)=>
        { //array to object mapping start
            return (
                <li key={link.id}>
            <a href={link.href} className="nav-link"> {link.text} </a>
          </li>
            ) //end of return
        } //array to object mapping end
        )
       //end of menu   
    } 

        </ul>

        <ul className="nav-icons">
            {socialLinks.map((link)=>{
           const { id,href,icon} =link;
           return (
             
            <li>
            <a href={href} target="_blank" className="nav-icon"
              ><i className={icon}></i>
            </a>
          </li>

           )
        }
            )}
        </ul>
      </div>
    </nav>
)
}
export default Navbar