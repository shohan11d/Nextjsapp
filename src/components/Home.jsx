import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateName } from '../slices/userSlice';
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const updatedName = useSelector((store) => store.user.userName);
  return (
    <div className="grid place-items-center space-y-4 py-20 text-xl font-bold">
      <h1>THE BEST PIZZA</h1>
      <h2 className="text-yellow-400">
        Straing out of the oven, straight to you.
      </h2>
      <button
        onClick={() => dispatch(updateName('rohan'))}
        className="rounded-full bg-yellow-400 px-4 py-1 text-sm"
      >
        Continue Ordering{' '}
      </button>
      <p>{updatedName}</p>
    </div>
  );
}

export default Home;
