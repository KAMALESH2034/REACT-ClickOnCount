import "bootstrap/dist/css/bootstrap.min.css"
import Count from './Count'
import Header from "./header"
import './App.css'

function App() {

  return <>
    <Header/>
  <h1 className="title text-center pt-4">Count On Every Click</h1>
    < Count/>
  </>
}

export default App
