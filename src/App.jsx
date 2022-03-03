import { Routes, Route } from 'react-router-dom';

//SASS
import './App.scss'

//Components
import Home from './Components/Home/Home';
import Product from './Components/Products/Product';
import SubCategry from './Components/SubCategory/SubCategory';
import Bascet from './Components/Bascet/Bascet';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subcategory/:cat_id" element={<SubCategry />} />
        <Route path="/product/:sub_id" element={<Product />} />
        <Route path="/bascet" element={<Bascet />} />
      </Routes>
    </>
  );
}

export default App;