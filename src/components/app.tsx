import { useContext } from "react"
import LoadingContext from "./context-providers/app-loading/context/context"
import Main from "./main/main"

const App = (): JSX.Element => {
  const { appLoading } = useContext(LoadingContext)

  return (
    <>
      {/* <Loader /> */}

      {!appLoading && <Main />}
    </>
  )
}

export default App
