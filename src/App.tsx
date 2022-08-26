import { BrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'
import Router from './router'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  )
}
