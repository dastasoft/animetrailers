import { BrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'
import { FavContextProvider } from './context/FavContext'
import Router from './router'

export default function App() {
  return (
    <BrowserRouter>
      <FavContextProvider>
        <Layout>
          <Router />
        </Layout>
      </FavContextProvider>
    </BrowserRouter>
  )
}
