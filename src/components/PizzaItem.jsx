const data = {
  id: 2,
  name: 'Capricciosa',
  unitPrice: 14,
  imageUrl:
    'https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-2.jpg',
  ingredients: ['tomato', 'potato', 'cheese', 'sauce', '"pepperoni'],
};

export default function PizzaItem({ data }) {
  return (
    <div className="">
      <div className="flex gap-5 ">
        <img src={data.imageUrl} />
        <div>
          <div className="min-w-[200px]  px-2 ">
            <p className="bg-blue-800 font-bold text-blue-200">{data.name}</p>
            <p>{data.unitPrice}</p>
            <ul>
              {data.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <button className="mt-4 rounded-full border-2  bg-neutral-600 px-4 py-1 text-white hover:bg-yellow-400 hover:text-black">
            Order
          </button>
        </div>
      </div>
    </div>
  );
}
