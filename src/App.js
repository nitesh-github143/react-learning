import './App.css';
import Video from './components/Video';

function App() {
  let videos = [
    {
      id: 1,
      title: 'React JS tutorial',
      views: '999K',
      time: '1 year ago',
      channel: 'Coder Dost',
      verified: true
    }, {
      id: 2,
      title: 'Node JS tutorial',
      views: '100K',
      time: '1 month ago',
      channel: 'Coder Dost',
      verified: false
    }, {
      id: 3,
      title: 'Mongo DB tutorial',
      views: '1M',
      time: '1 month ago',
      channel: 'Coder Dost',
      verified: true
    }
  ];
  return (
    <div className="App">
      {
        videos.map(video => <Video
          id={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
        ></Video>
        )
      }
    </div>
  );
}

export default App;