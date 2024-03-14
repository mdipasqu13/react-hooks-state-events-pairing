import video from "../data/video.js";
import Header from "./Header.js"
import Video from "./Video.js"
import Buttons from "./Buttons.js"
import Comments from "./Comments.js"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={ video }/>
      <Header video={ video} />
      <Buttons video={ video } />
      <Comments video={ video }/>
    </div>
  );
}

export default App;