import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import books from '../src/components/data/history.json'
import Booklist from './components/Booklist'


import Singlebooks from './components/Singlebooks'
function App() {
  return (
    <div className="container">
      <WarningSign  Title='Ako'/>
      <MyBadge colour='primary' Title='Ako'/>
      <Singlebooks book={books[1]}/>
     
      <Booklist bookpage={books}/>
      
    </div>
  );
}

export default App;
