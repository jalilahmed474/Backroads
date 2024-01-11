import { pageLinks,socialLinks } from "../data"

const Footer =() =>
{
return (
<footer className="section footer">
      <ul className="footer-links">
        
      { //start of menu data 
        pageLinks.map((link)=>
        { //array to object mapping start
            return (
              <li>
              <a href={link.href} className="footer-link">{link.text}</a>
            </li>
            ) //end of return
        } //array to object mapping end
        )
       //end of menu   
    } 
      </ul>
      <ul className="footer-icons">

      { //start of menu data 
        socialLinks.map((link)=>
        { //array to object mapping start
            return (
              <li>
              <a href={link.href} target="_blank" className="footer-icon"
                ><i className={link.icon}></i
              ></a>
            </li>
            ) //end of return
        } //array to object mapping end
        )
       //end of menu   
    } 
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
)
}
export default Footer