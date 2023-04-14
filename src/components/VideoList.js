import Video from './Video'
import PlayButton from './PlayButton';
import useVideo from '../Hooks/Videos';

const VideoList = ({ editVideo }) => {
    const videos = useVideo()
    return (
        <div className='video'>
            {
                videos.map(video => <Video
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    views={video.views}
                    time={video.time}
                    channel={video.channel}
                    verified={video.verified}
                    editVideo={editVideo}
                >
                    <PlayButton
                        onPlay={() => console.log('playing', video.title)}
                        onPause={() => console.log('Paused', video.title)}
                    >{video.title}</PlayButton>
                </Video>
                )
            }
        </div>
    )
}

export default VideoList
