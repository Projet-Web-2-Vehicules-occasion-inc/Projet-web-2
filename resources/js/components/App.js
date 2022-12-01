import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route,BrowserRouter } from 'react-router-dom'
import Inscription from '../pages/register/Inscription'
import Header from './Header';
import Footer from './Footer';
/* pour changement de langue */
import LangueWrapper from './LangueWrapper';
import '../../css/app.css';
import inscriptionClient from '../pages/register/inscriptionClient'

function App() {
    return (
      <LangueWrapper>
        <div className="box-app container-fluid p-0 position-relative">
          <Header/>
          <Footer />
          <Routes>
            {/* <Route path="/" element={<UsersListe users = {users} />} /> */}
            <Route path="/register" element={<Inscription  />} />
            <Route path="/inscriptionClient" element={<inscriptionClient  />} />
          </Routes>
        </div>
      </LangueWrapper>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
}