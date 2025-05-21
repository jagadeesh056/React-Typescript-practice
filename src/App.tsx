// import { Greet } from './components/Greet';
// import { PersonObj } from './components/PersonObj';
// import { PersonList } from './components/PersonList';
import './App.css';
import { Status } from './components/Status';

function App() {
  // const personObj = {
  //   first: "Partheev",
  //   last: "Patel"
  // }

  // const personList = [
  //   {
  //     first: "Virat",
  //     last: "Kohli"
  //   },
  //   {
  //     first: "MS",
  //     last: "Dhoni"
  //   },
  //   {
  //     first: "Rohit",
  //     last: "Sharma"
  //   }
  // ]
  return (
    <div className="App">
     <Status status="suc" />
    </div>
  );
}

export default App;
