import MyFunc from "./script.jsx"

function App() {
  const username = 'Muhammad Tariq';
  return (
    <> {/* for adding multiple elements, as we cannot add multiple elements directly */}
    <h1> Hello {username} </h1> {/* evaluation expression (final outcome) */}
    <p> Lorem ipsum dolor set amet </p>
    <MyFunc />
    </>
  )
}

export default App
