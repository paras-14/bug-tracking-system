import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './routes/Home';
import Layout from './components/Layout/Layout';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      {/* <ChakraProvider> */}
      <Provider store={store}>
        <BrowserRouter>
           <Layout>
           <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false} 
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover={false}
              theme="light"
            />
            <Home/>
           </Layout>
        </BrowserRouter>
      </Provider>
      {/* </ChakraProvider> */}

    </div>
  )
}

export default App
