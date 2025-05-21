// import { Greet } from './components/Greet';
// import { PersonObj } from './components/PersonObj';
// import { PersonList } from './components/PersonList';
import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
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
     <Status status="success" />
     <Greet name='Vishwas' isLoggedIn={true} />
     <Heading>This is heading </Heading>
     <Oscar>
       <Heading>Oscar show is on 24th May</Heading>
     </Oscar>
    </div>
  );
}

export default App;
