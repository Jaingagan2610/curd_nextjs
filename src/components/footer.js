import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle} className='gap-16'>
        <div style={logoStyle} >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYTDZ6PUW9ajdfYrQl4eZ5ne1k4vIWZPlXrlPfvPsKpg&s" alt="BookMyShow Logo" style={logoImageStyle} />
          <span style={logoText}>BookMyShow</span>
        </div>
        <div style={linksContainerStyle}>
          <div style={footerColumnStyle}>
            <h3 style={columnHeaderStyle}>Company</h3>
            <ul style={listStyle}>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>
          <div style={footerColumnStyle}>
            <h3 style={columnHeaderStyle}>Legal</h3>
            <ul style={listStyle}>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div style={footerColumnStyle}>
            <h3 style={columnHeaderStyle}>Follow Us</h3>
            <ul style={listStyle}>
              <li>facebook</li>
              <li>tweeter</li>
              <li>instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Styles
const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '2rem 0',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  
  
};

const logoImageStyle = {
  width: '40px',
  height: '40px',
  marginRight: '1rem',
};

const logoText = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const linksContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  width: '100%',
};

const footerColumnStyle = {
  flex: '1',
  margin: '1rem',
};

const columnHeaderStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
};

export default Footer;
