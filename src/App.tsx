import {PageFormat, HelloWorld} from './styles/PageFormat'

function App() {
  return (
    <>
      <PageFormat message={ HelloWorld() } theme="light" />
    </>
  )
}

export default App
