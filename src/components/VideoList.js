import React from 'react'
import Video from './Video'
import Playbutton from './Playbutton';

const VideoList = ({ videos }) => {
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
                >
                    <Playbutton
                        onPlay={() => console.log('playing', video.title)}
                        onPause={() => console.log('Paused', video.title)}
                    >{video.title}</Playbutton>
                </Video>
                )
            }
        </div>
    )
}

export default VideoList
