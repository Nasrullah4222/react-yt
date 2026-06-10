import Card from "./component/card";
import Navbar from "./component/navbar";
const App = () => {
  return (
    <div>
      <div className="card">
        <Navbar />
        <Card />
      </div>
    </div>
  );
};

export default App;
