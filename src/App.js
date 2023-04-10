import './App.css';
import Video from './components/Video';
import Playbutton from './components/Playbutton';
import videoDB from './Data/Data';
import { useState } from 'react';
import AddVideo from './components/AddVideo';

function App() {
  const [videos, setVideos] = useState(videoDB)

  function addVideos(video) {
    setVideos([...videos, {
      ...video,
      id: videos.length + 1
    }])
  }
  return (
    <div className="App">
      <AddVideo addVideos={addVideos}></AddVideo>
      <div className='video' onClick={() => console.log('hi')}>
        {
          videos.map(video => <Video
            key={video.id}
            id={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
          >
            <Playbutton
              onPlay={() => console.log('playing', video.title)}
              onPause={() => console.log('Paused', video.title)}
            >{video.title}</Playbutton>
          </Video>
          )
        }
      </div>
    </div>
  );
}

export default App;