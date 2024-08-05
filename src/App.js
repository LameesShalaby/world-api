import Layout from './components/Layout';
import ContriesList from './components/CountryList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <ContriesList/>
      </Layout>
    </div>
  );
}

export default App;
