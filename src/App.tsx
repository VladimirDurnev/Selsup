import './App.css'
import ParamEditor from './ParamEditor'
import { model, params } from './data'

function App() {


  return (
    <ParamEditor params={params} model={model}></ParamEditor>    
  )
}

export default App
