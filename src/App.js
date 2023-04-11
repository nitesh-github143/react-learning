import './App.css';
import videoDB from './Data/Data';
import { useState } from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';

function App() {
  const [videos, setVideos] = useState(videoDB)
  const [editableVideo, setEditableVideo] = useState(null)
  function addVideos(video) {
    setVideos([...videos, {
      ...video,
      id: videos.length + 1
    }])
  }
  function deleteVideo(id) {
    setVideos(videos.filter(video => video.id !== id))
  }
  function editVideo(id) {
    setEditableVideo(videos.find(video => video.id === id))
  }
  function updateVideo(video) {
    const index = videos.findIndex(v => v.id === video.id)
    const newVideos = [...videos]
    newVideos.splice(index, 1, video)
    setVideos(newVideos)
  }
  return (
    <div className="App">
      <AddVideo addVideos={addVideos} editableVideo={editableVideo} updateVideo={updateVideo}></AddVideo>
      <VideoList videos={videos} deleteVideo={deleteVideo} editVideo={editVideo}></VideoList>
    </div>
  );
}

export default App;