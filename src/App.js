import { useState } from 'react';
import './App.css';
import MenuList from './components/MenuList';

function App() {
  const resource = [
    {
      itemName: "Caesar's Salad",
      description: "The original Caesar's Salad recipe",
      foodImage: 'https://bit.ly/2GJFu5W',
      price: 12,
      isFavorite: false,
    },
    {
      itemName: 'Spaghetti Carbonara',
      description: "Better than your nonna's! All local and fresh ingredients",
      foodImage: 'https://bit.ly/2GBnz1n',
      price: 15,
      isFavorite: false,
    },
    {
      itemName: 'Grilled Whole Fish',
      description: 'Fish of the day, grilled whole with a side of vegetables',
      foodImage: 'https://bit.ly/3d6iKsJ',
      price: 20,
      isFavorite: false,
    },
    {
      itemName: 'Steak Florentine',
      description: 'Meat!',
      foodImage: 'https://bit.ly/3ddiSH1',
      price: 30,
      isFavorite: false,
    }]

    const [foodItems, setFootItems] = useState(resource)

  return (
    <div>
      <h1>ConBo Restaurant's Menu</h1>
      <MenuList foodItems={foodItems} setFootItems={setFootItems}/>
    </div>
  );
}

export default App;
