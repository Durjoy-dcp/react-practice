import logo from './logo.svg';
import './App.css';


const devices = [

  { name: "Leptop", price: 31000 },
  { name: "Phone", price: 13000 },
  { name: "Camera", price: 45000 },
  { name: "Watch", price: 1000 },
]

function App() {
  return (
    <div className="App">
      {
        devices.map(device => <ShowDevice name={device.name} price={device.price}></ShowDevice>)

      }

    </div>
  );
}
function ShowDevice(props) {
  return (
    <div className="container">
      <h1>Device Name : {props.name}</h1>
      <h1>Price : {props.price}</h1>
    </div>
  )
}

export default App;
