import Counter from './Counter';

export const metadata = {
   title: 'Cabins',
   description: 'Explore luxury cabins',
};

export default async function Page() {
   const res = await fetch('https://jsonplaceholder.typicode.com/users');

   const data = await res.json();
   console.log(data);
   return (
      <div>
         <h1>Cabins page</h1>
         <ul>
            {data.map((user) => (
               <li key={user.id}>{user.name}</li>
            ))}
         </ul>

         <Counter />
      </div>
   );
}
