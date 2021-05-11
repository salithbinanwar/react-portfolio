import './App.css';
import About from './About/About';
import Main from './Main/Main';
import Skills from './skills/Skills';
import Work from './Works/Work';
import Services from './Services/Services';
import Contacts from './Contacts/Contacts';

function App() {
    return (
        <div className="App">
            <header>
                <Main/>
                <About/>
                <Skills/>
                <Work/>
                <Services/>
                <Contacts/>
            </header>
        </div>
    );
}

export default App;
