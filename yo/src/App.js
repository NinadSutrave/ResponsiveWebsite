import './App.css';
import Header from './components/Header';
import Section from './components/Section'
import Divider from './components/Divider'

function App() {
  return (
    <>
      <Header/>
      <div className="content">
        <Section title="Create a logo yourself" description="Tell us about your brand and get a customizable logo in minutes." buttonText="Create a logo"/>
        <Divider />
        <Section title="Hire a professional designer" description="Get matched with a professional designer to create a custom logo for you" buttonText="Hire a designer"/>
      </div>
    </>
  );
}

export default App;
