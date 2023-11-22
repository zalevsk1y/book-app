import ReactDOM from 'react-dom/client';
import './index.css';
import { Main } from './pages/components/Main';
import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './entities/books/reducer/books.reducer';
import { widgetsReducer } from './widgets';
import { Provider } from 'react-redux';
import { fetchBooksData } from './utils/index';

fetchBooksData().then((books) => {
  const store = configureStore({
    reducer: { books: booksReducer, widgets: widgetsReducer },
    preloadedState: {
      books,
      widgets: {
        modal: {
          isOpen: false,
          action: undefined,
          id: undefined,
          initValues: undefined
        }
      }
    }
  }
  )
  ReactDOM.hydrateRoot(document.getElementById('root') as HTMLElement,
    <Provider store={store}>
      <Main />
    </Provider>)
})



