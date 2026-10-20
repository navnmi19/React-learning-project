
function Header(props) {
  //header component to be later used in app
  return (
    <h1>{props.title}</h1>
  );
}

function App() {
  return (
    <div>
      <Header title= "My tasks"/>   {/*the reason why title=""because in header function we have defined title*/}
      <Header title="Completed tasks"/> {/*here header used is the function defined above*/}
      <button>Add My First Task</button>
    </div>
  );
}

export default App;
