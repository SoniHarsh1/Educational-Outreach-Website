// import './Navhead.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Head from './Head';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Top1 from './Top1';
import Mid1 from './Mid1';
import TitlePage from './TitlePage';
import Cards from './Cards';
import Bottom from './Bottom';
import Bottom1 from './Bottom1';
import IIT from './IIT';
import Coop from './Coop'
import configs from './configs.json'
import conf2 from './conf2.json'
import Nav2 from './Nav2';
import Bottom2 from './Bottom2';
import Card from './Card';
import Programs from './Programs.js'
import Picscard from './Picscard';
import NewsandAct from './NewsandAct.js'
function App() {
  return (
         <>
         <Router>
           <Head/>
           {/* <Nav2/> */}
           {/* <h1 className="text-blue-700">
                Hello world!
            </h1> */}
           <Navbar/>
           <Routes>
                <Route exact path="/" element={//home 
                    <>
                    <TitlePage />
                    <Card/>
                    <Bottom2/>
                    </>
                }/>
                <Route exact path="/about/Education_Outreach" element={ //educational outreach
                    <>
                    <Top1 />
                    <Mid1/>
                    <Bottom1/>
                    <Cards config={conf2}/>
                    </>
                }/>
                <Route exact path="/about/Our_People" element={ //educational outreach
                    <>
                    <Picscard/>
                    </>
                }/>
                <Route exact path="/about/IIT_INDORE" element={ //iit indore
                    <>
                    <IIT/>
                    </>
                }/>
                <Route exact path="/Programs" element={ //iit indore
                    <>
                    <Programs/>
                    </>
                }/>
                <Route exact path="/News_&_Events" element={ //iit indore
                    <>
                    <NewsandAct/>
                    </>
                }/>
                <Route exact path="/Cooperation_&_Engagements" element={//cooperation and engagements
                    <>
                    <Coop/>
                    </>
                }
                />
        </Routes>
        </Router>
         </>
  );
}

export default App;

