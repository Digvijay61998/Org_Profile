
import './App.css';
import ImageProfile from './components/ImageProfile';
import { Profile } from './components/Profile';


function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Profile />
          <ImageProfile/>
        </div>
       
      </div>
    </div>
  );
}

export default App;
