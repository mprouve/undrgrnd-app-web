// import { useContext } from 'react'
// import LoadingContext from './context-providers/app-loading/context/context'
import Main from './main/main'

const App = () => {
  // const { appLoading } = useContext(LoadingContext)

  return (
    <div>
      {/* <Loader /> */}

      {/* {!appLoading &&  */}
      <Main />
      {/* } */}
    </div>
  )
}

export default App
