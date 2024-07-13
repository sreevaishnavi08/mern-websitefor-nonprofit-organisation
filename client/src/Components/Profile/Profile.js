import React, { useContext, useState, useEffect, useRef } from 'react'
import { CounterContext } from '../CounterContext'
import { FaUserCircle } from "react-icons/fa";
import './Profile.css'

function Profile() {
    const { user } = useContext(CounterContext)
    const [profilePic, setProfilePic] = useState(null)
    const fileInputRef = useRef(null)

    useEffect(() => {
        const savedProfilePic = localStorage.getItem('profilePic')
        if (savedProfilePic) {
            setProfilePic(savedProfilePic)
        }
    }, [])

    const handleImageUpload = (event) => {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.onloadend = () => {
            const base64Image = reader.result
            setProfilePic(base64Image)
            localStorage.setItem('profilePic', base64Image)
            // Reset the input value to allow the same file to be selected again
            fileInputRef.current.value = null
        }
        reader.readAsDataURL(file)
    }

    const handleDeleteImage = () => {
        setProfilePic(null)
        localStorage.removeItem('profilePic')
        // Reset the input value to allow a new file to be selected
        fileInputRef.current.value = null
    }

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <div style={{marginTop:'40px',paddingTop:'40px'}}>
            <div className='profile-container' style={{padding:'50px'}}>
                <div className='profile-pic-container'>
                    {profilePic ? (
                        <img src={profilePic} alt="Profile Pic" className='profile-pic' />
                    ) : (
                        <FaUserCircle size={'100px'} />
                    )}
                    <div className='upload-btn-container'>
                        <label className='custom-file-upload'>
                            <input type="file" onChange={handleImageUpload} ref={fileInputRef} />
                            Choose File
                        </label>
                        {profilePic && (
                            <button onClick={handleDeleteImage} className='delete-btn'>Delete File</button>
                        )}
                    </div>
                </div>
                <div className='profile-info'>
                    <h1>{user.firstname} {user.lastname}</h1>
                    <h5><b>First Name: </b>{user.firstname}</h5>
                    <h5><b>Last Name: </b>{user.lastname}</h5>
                    <h5><b>Email: </b>{user.email}</h5>
                </div>
            </div>
        </div>
    )
}

export default Profile
