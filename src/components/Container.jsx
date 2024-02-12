import { useState } from 'react';
import Head from './UI/Head';
import Nav from './UI/Nav';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

export default function Container() {
   
    const [currentPage, setCurrentPage] = useState('About');
    const handlePageChange = (page) => setCurrentPage(page);
    const renderPage = () => {

        if (currentPage === 'Contact') {
        return <Contact />;
        }
        if (currentPage === 'Portfolio') {
        return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <About />;
    };

    const header_style = {
      'backgroundColor': 'rgb(8, 138, 23)',
      'boxShadow': '0 0 10px rgba(0, 0, 0, 0.1)',
      'border': '20px solid transparent',
      'borderImageSource':'url("src/assets/images/border1.png")',
      'borderImageSlice': '90', /* Define slicing and fill */
      'borderImageWidth': '45px', /* Set border image width */
      'borderImageRepeat': 'round', /* Set border image repeat mode */
      'alignItems':'center'
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
