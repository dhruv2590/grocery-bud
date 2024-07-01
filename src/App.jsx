import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import GroceryCart from './components/groceryCart'

function App() {

  return (
    <>
    <ToastContainer />
   <GroceryCart/>
    </>
  )
}

export default App
