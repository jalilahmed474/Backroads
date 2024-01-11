import Title from "./Title";
import { services } from "../data";

const Services =() =>
{
return (
<section className="section services" id="services">
            <Title title="our" subtitle="services" />
      <div className="section-center services-center">

      
      { //start of menu data 
        services.map((service)=>
        { //array to object mapping start
            return (
              <article className="service" key={service.id}>
              <span className="service-icon"><i className={service.icon}></i></span>
              <div className="service-info">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-text">
                  {service.text}
                </p>
              </div>
            </article>
            ) //end of return
        } //array to object mapping end
        )
       //end of menu   
    } 

        

       
      </div>
    </section>
)
}
export default Services