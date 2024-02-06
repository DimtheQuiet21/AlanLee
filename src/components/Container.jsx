import { useState } from 'react';
import Head from './UI/Head';
import Nav from './UI/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

export default function Container() {
   
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);
    const renderPage = () => {
        if (currentPage === 'About') {
        return <About />;
        }
        if (currentPage === 'Contact') {
        return <Contact />;
        }
        if (currentPage === 'Portfolio') {
        return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Home />;
    };

    const header_style = {
      'background-color': 'rgb(8, 138, 23)',
      'border-radius': '10px',
      'box-shadow': '0 0 10px rgba(0, 0, 0, 0.1)',
      'border': '20px solid transparent',
      'border-image-source':'url("src/assets/images/border1.png")',
      'border-image-slice': '90', /* Define slicing and fill */
      'border-image-width': '45px', /* Set border image width */
      'border-image-repeat': 'round', /* Set border image repeat mode */
      'align-items':'center'
  }

  return (
    <div>
      <header style ={header_style}>
        <Head />
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} /> 
      </header>
      <br></br>
      <main className="mx-3">{renderPage()}</main>  
    </div>
    
  );
}
