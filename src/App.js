/* import logo from './logo.svg'; */
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

function App() {
  return (
    <>
    <body id="page-top">
        {/* <!-- Navigation--> */}
       <Nav/>
       {/*  <!-- Header--> */}
       <Header/>
       {/*  <!-- Content section 1--> */}
       <Section1/>
        {/* <!-- Content section 2--> */}
        <Section2/>
        {/* <!-- Content section 3--> */}
        <Section3/>
       {/*  <!-- Footer--> */}
        <Footer/>
    </body>
    </>
  );
}

export default App;
