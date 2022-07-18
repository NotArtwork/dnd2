import './App.css';



function App() {
  // UseState is a function that returns an array of two elements
  // on the left is the state(variable)
  // on the right is the function that updates the variable on the left
  // This syntax is called JSX = Javascript XML
  // returns a state variable and a function
  // to update it
  return (
    <div className="screen">
      <video autoPlay muted loop id="myVideo">
        <source src="https://a2development.s3.amazonaws.com/H264HD1080.mov" type="video/mp4" />
      </video>
      <div className="" id="fs-overlay">
      <img id="header-img" src='https://1000logos.net/wp-content/uploads/2021/08/Dungeons-and-Dragons-Logo-2014.png'/>
      </div>
    </div>
  )
}

export default App;
