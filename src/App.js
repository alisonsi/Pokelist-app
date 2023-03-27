import './App.css';
import Pokerlist from "./pages/PokerList";
import PokerItemDetail from "./pages/PokerItemDetail";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CounterProvider from './context/ContextAPI';
import {PaginationProvider} from './context/Pagination';
import PokerListProvider from './context/PokerListaData';
import FormAddProvider from './context/FormAdd';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pokerlist />,
  },
  {
    path: "/item-detail",
    element: <PokerItemDetail />,
  },
]);
function App() {
  return (
    <PokerListProvider>
      <FormAddProvider>
        <PaginationProvider>
          <CounterProvider>

            <div className='App'>
              <RouterProvider router={router} />
            </div>
          </CounterProvider>

        </PaginationProvider>

      </FormAddProvider>
    </PokerListProvider>
  );
}

export default App;
