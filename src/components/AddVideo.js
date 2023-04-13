import React, { useEffect, useState, useContext } from 'react'
import './AddVideo.css'
import VideoDispatch from '../context/VideoDispatch'

const initialState = {
    time: '3 month ago',
    channel: 'Coder Dost',
    verified: false,
    title: '',
    views: ''
}

const AddVideo = ({ editableVideo }) => {
    const dispatch = useContext(VideoDispatch)
    const [video, setVideo] = useState({ ...initialState })
    function handleSubmit(e) {
        e.preventDefault()
        if (editableVideo) {
            dispatch({ type: 'UPDATE', payload: video })
        } else {
            dispatch({ type: 'ADD', payload: video })
        }
        setVideo(initialState)
    }

    function handleChange(e) {
        e.stopPropagation()
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (editableVideo) {
            setVideo(editableVideo)
        }
    }, [editableVideo])
    return (
        <div>
            <form >
                <input type="text" name='title' onChange={handleChange} placeholder='title' value={video.title} />
                <input type="text" name='views' onChange={handleChange} placeholder='views' value={video.views} />
                <button
                    onClick={handleSubmit}
                >{editableVideo ? 'Edit' : 'Add'} VIdeo</button>
            </form>
        </div>
    )
}

export default AddVideo
