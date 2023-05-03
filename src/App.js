
import './App.css';

// function App() {
//   return (
//     <div className="App">
//        <CardList/>
//     </div>
//   );
// }
function CardList(){
  return (
      <main className='card-list'>{newFruits}</main>
    );
}

const card={
  image:"https://via.placeholder.com/150/d32776",
  title:"card title",
  description:"card description",
};

const fruits=["orange","apple"];
const newFruits = fruits.map((fruit)=><h1>{fruit}</h1>);





export default CardList;
