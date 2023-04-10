import React, { useState } from 'react'
import './AddVideo.css'

const initialState = {
    time: '3 month ago',
    channel: 'Coder Dost',
    verified: false,
    title: '',
    views: ''
}

const AddVideo = ({ addVideos }) => {
    const [video, setVideo] = useState({ ...initialState })
    function handleSubmit(e) {
        e.preventDefault()
        addVideos(video)
        setVideo(initialState)
    }

    function handleChange(e) {
        e.stopPropagation()
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <form >
                <input type="text" name='title' onChange={handleChange} placeholder='title' value={video.title} />
                <input type="text" name='views' onChange={handleChange} placeholder='views' value={video.views} />
                <button
                    onClick={handleSubmit}
                // onClick={() => {

                // }}
                >Add VIdeo</button>
            </form>
        </div>
    )
}

export default AddVideo
