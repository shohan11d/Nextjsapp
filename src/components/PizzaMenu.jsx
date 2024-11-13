import { getMenu } from '../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import PizzaItem from './PizzaItem';

function PizzaMenu() {
  const dataFetched = useLoaderData();
  return (
    <div className='space-y-4'>
      {dataFetched.map((pizza) => (
        <PizzaItem data={pizza} key={pizza.id} />
      ))}
    </div>
  );
}

export async function loader() {
  const data = await getMenu();
  return data;
}
export default PizzaMenu;
