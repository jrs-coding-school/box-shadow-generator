import './App.css';
import BrowseDesignsPage from './components/BrowseDesignsPage/BrowseDesignsPage';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
}

export default App;
