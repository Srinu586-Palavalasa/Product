import { Card, Carousel } from 'antd';
import React from 'react';
import { Avatar } from 'react-rainbow-components';
import './App.css';


const avatarSmall = { width: 72, height: 72, marginRight: 24 };

const App = () => {
  const contentStyle = {
    height: 'auto',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
    background: '#fff',
  };

  return (
    <div className='body'>
    
      <nav className='navbar'>
        <div className='logo'>
          <img src='Gems1 Logo.png' alt='company-logo' className='navbar-logo' />
        </div>
        <ul className='navbar-menu'>
  <li>
    <a href="#home">Home</a>
    {/* No dropdown for Home */}
  </li>
  <li>
    <a href="https://www.canva.com/design/DAGS-3AqwZQ/bj5p0jxq6BJ4rqGG7WBQHA/view?utm_content=DAGS-3AqwZQ&utm_campaign=designshare&utm_medium=link&utm_source=editor">About Us</a>
    <div className="dropdown">
      <div className="dropdown-column">
        <span className="dropdown-title">Company</span>
        <a href="#overview">Overview</a>
        <a href="#team">Our Team</a>
        <a href="#values">Our Values</a>
      </div>
      <div className="dropdown-column">
        <span className="dropdown-title">Media</span>
        <a href="#news">News</a>
        <a href="#press">Press Releases</a>
      </div>
    </div>
  </li>
  <li>
    <a href="#problem">Problem</a>
    {/* Dropdown for Problem */}
    <div className="dropdown">
      <div className="dropdown-column">
        <span className="dropdown-title">Industrial Challenges</span>
        <a href="#high-cmd">High CMD Issues</a>
        <a href="#low-pf">Low PF Challenges</a>
      </div>
    </div>
  </li>
  <li>
    <a href="#solution">Solution</a>
    <div className="dropdown">
      <div className="dropdown-column">
        <span className="dropdown-title">Our Solutions</span>
        <a href="#gems1">GEMS1 Overview</a>
        <a href="#iot-integration">IoT Integration</a>
      </div>
    </div>
  </li>
  <li>
    <a href="#product">Product</a>
    {/* Dropdown for Products */}
    <div className="dropdown">
      <div className="dropdown-column">
        <span className="dropdown-title">Product Line</span>
        <a href="#gems-basic">GEMS1 Basic</a>
        <a href="#gems-pro">GEMS1 Pro</a>
      </div>
    </div>
  </li>
  <li>
    <a href="#service">Service</a>
    <div className="dropdown">
      <div className="dropdown-column">
        <span className="dropdown-title">Service Plans</span>
        <a href="#basic">Basic Plan</a>
        <a href="#pro">Pro Plan</a>
      </div>
    </div>
  </li>
</ul>
      </nav>

      {/* Problem Section */}
      <div className='problem'>
        <section className='problem' id="problem">
          <h1>Problem:</h1>
          <div className='problem-content'>
            <div className='text-left'>
              <p>
                Industries monitor Current Demand (CMD) and Power Factor (PF) to optimize energy usage and reduce costs. High CMD can result in hefty penalties from utility companies, so regular monitoring ensures demand stays within limits. Power Factor, a measure of energy efficiency, is critical because a low PF increases losses and leads to extra charges. To manage this, industries employ automated monitoring systems that provide real-time data and alerts. Corrective actions like capacitor banks are used to improve PF, ensuring smooth operations and cost efficiency.
              </p>
            </div>
            <div className='image-right'>
              <img src='industry.jpg' alt='industry' className='img2' />
            </div>
          </div>

          <h1>Solution:</h1>
          <div className='solution-content' id="solution">
            <div className='image-left'>
              <img src='product.jpg' alt='product-img' className='img3' />
            </div>
            <div className='text-right'>
              <p>
                GEMS1 plays a crucial role in modern industrial operations by enabling real-time monitoring and data collection through IoT integration. It enhances operational efficiency by automating processes, reducing human intervention, and minimizing errors. The system provides valuable insights for predictive maintenance, reducing downtime and costs. By optimizing resource usage, GEMS1 contributes to energy conservation and sustainability. It improves decision-making by offering actionable data and analytics. Overall, GEMS1 fosters innovation and competitiveness in industries, aligning them with Industry 4.0 standards.
              </p>
            </div>
          </div>

          <div className='service'>
          <h1>Service:</h1>
          <div className='service-content'>
            <div className='text-left'>
              <p>
              GEMS1 offers two service tiers—GEMS1 Basic and GEMS1 Pro—tailored to meet diverse customer needs in energy monitoring and management. Both plans come with a robust suite of customer services that include Dedicated Account Management to provide personalized assistance, ensuring that each client receives focused attention for smooth operations. Additionally, GEMS1 prioritizes continuous improvement through regular Feedback and Improvement loops, which enable ongoing enhancements based on user input. With 24/7 Technical Support, clients are assured of around-the-clock assistance to resolve any technical issues swiftly. To further empower users, Awareness and Training programs are provided, ensuring that users are well-versed in the system's features and functionality.

              </p>
            </div>
            <div className='image-right'>
              <img src='service.jpg' alt='service' className='img4' />
            </div>
          </div>
          </div>
          <h1>Software:</h1>
          <div className='software-content' id="software">
            <div className='image-left'>
              <img src='software.jpeg' alt='software-img' className='img5' />
            </div>
            <div className='text-right'>
              <p>GEMS1 is a cutting-edge platform designed to integrate React.js, Node.js, and Express.js alongside the Internet of Things (IoT) and advanced machine learning algorithms. This powerful combination of modern web technologies and smart systems allows GEMS1 to deliver comprehensive tools for real-time monitoring, analysis, and optimization of operations.
By utilizing React.js for a dynamic, responsive front-end interface, GEMS1 provides users with an intuitive and interactive experience, making data visualization and management seamless. The back-end, built with Node.js and Express.js, ensures fast, scalable, and efficient server performance, capable of handling complex data streams and user requests in real-time.
</p>
            </div>
          </div>
          <div className='hardware'>
          <h1>Hardware:</h1>
          <div className='hardware-content'>
            <div className='text-left'>
              <p>
              This system utilizes a multi-function meter, Raspberry Pi 4B, RS-485 adaptor, and a server to create an efficient data monitoring and visualization setup.
              The multi-function meter captures key metrics, RS-485 serves as the communication protocol, the Raspberry Pi 4B processes the data, and the server enables data visualization, providing actionable insights through interactive charts and graphs.
              </p>
            </div>
            <div className='image-right'>
              <img src='hardware.jpeg' alt='hardware' className='img6' />
            </div>
          </div>
          </div>
          <h1>Data Centers:</h1>
          <div className='datacenters-content' id="datacenter">
            <div className='image-left'>
              <img src='datacenters.jpeg' alt='datacenter-img' className='img7' />
            </div>
            <div className='text-right'>
              <p>For data centers, GEMS1 utilizes the advanced capabilities of MongoDB, a highly scalable NoSQL database known for its flexibility and performance. MongoDB is designed to handle large volumes of data, which is critical for the real-time monitoring and analytics provided by GEMS1. Its schema-less architecture allows the platform to efficiently store and manage data from diverse sources, such as IoT devices, with ease and precision. By leveraging MongoDB, GEMS1 ensures that the system can grow alongside the expanding needs of modern industries, accommodating large datasets without compromising performance.
</p>
            </div>
          </div>
       </section>
      </div>
      <div className='industries-approach'>
       <center> <h1 className='head'>Industries We are Tied With</h1></center>
      <Carousel autoplay autoplaySpeed={1000} className='carousel'>  
      <center><div className='overview' style={contentStyle}>
      <Card className='card' title="Industrial Approach" >
      <center><Avatar
            style={avatarSmall}
            assistiveText="user icon"
            title="user icon"
            backgroundColor="#FE4849"
        /></center>
          <p>Two companies were approached us to integrate our product into their industry one is Radha Krishna Rice mills in Bhimavaram, they were faced problems on monitoring power factor so, they approached us to integrate our product into their Industry by using our product they saved upro 30% from last 2 months</p>

  </Card>
      </div>
      </center>
      <center>
     <div className='over' style={contentStyle}>
      <Card className='card1' title="Industrial Approach" >
      <center><Avatar
            style={avatarSmall}
            assistiveText="user icon"
            title="user icon"
            backgroundColor="violet"
        /></center>
          <p>The Other Company was approached us is The Coca-Cola company from medchal, Telangana State. We are very happy that our product is very helpful for large scale industries. They see our Product in instagram and they approached us to integarte our system into their company. We are in the beginner state. we visited coca-cola company and we took the measurements for the coca-cola company</p>
  </Card>
  </div></center>
  </Carousel>
  </div>
      <footer className="footer">
      <div className="footer-top">
        <h2>Green Fusion IoT Solutions</h2>
        <button className="location-btn">
          <span role="img" aria-label="location">
            📍
          </span>{' '}
         <a href='https://www.google.com/maps/place/Vishnu+Institute+of+Technology/@16.5659704,81.5199376,17z/data=!3m1!4b1!4m6!3m5!1s0x3a37cd4e8d1d1d8d:0xab52da15615ac690!8m2!3d16.5659653!4d81.5225125!16s%2Fm%2F09gldj9?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D'>Vishnu Institute of Technology | English</a>
        </button>
      </div>
      <hr />
      <div className="footer-links">
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><a href="https://www.coca-colacompany.com/media-center?contentTypeQuery=All&order=newest&page=1">Media Center</a></li>
            <li><a href="https://vems-five.vercel.app/">GEMS1 Foundation</a></li>
            <li><a href="https://investors.coca-colacompany.com/">Investors</a></li>
            <li><a href="https://www.coca-colacompany.com/policies-and-practices">Policies and Practices</a></li>
            <li><a href="https://www.coca-colacompany.com/careers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Need Help?</h3>
          <ul>
            <li><a href="https://www.google.com/about-us/faq">FAQ</a></li>
            <li><a href="https://www.coca-colacompany.com/about-us/contact-us">Contact Us</a></li>
            
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li><a href="https://www.coca-cola.com/us/en/legal/privacy-policy">Privacy Policy</a></li>
            <li><a href="https://www.coca-cola.com/us/en/legal/cookies-policy">Cookies Policy</a></li>
            <li><a href="https://www.coca-cola.com/us/en/legal/privacy-policy#privacy-rights-and-choices-for-specific-jurisdictions">Notice at Collection</a></li>
            <li><a href="https://www.coca-cola.com/us/en/legal/do-not-sell-or-share-my-personal-information">Do Not Sell or Share My Personal Information</a></li>
            <li><a href="https://www.coca-cola.com/us/en/legal/terms-of-service">Terms of Service</a></li>
            
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://www.facebook.com/srinu.palavalasa.50"><i className="fab fa-facebook-f"></i></a>
          <a href="https://in.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/s_r_i_n_u_586_/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/@GreenFusionIoTSolutions"><i className="fab fa-youtube"></i></a>
        </div>
        <p>© 2024 Green Fusion IoT Solutions. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default App;
