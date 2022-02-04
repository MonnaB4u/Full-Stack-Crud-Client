import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Home from '../Home/Home';

const UpdateUser = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    const [name, setName] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/userCollection/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])


    const handleNameChange = e => {
        const updateName = e.target.value
        const updateUser = { name: updateName, email: user.email };
        setUser(updateUser)
    }
    const handleEmailChange = e => {
        const updateEmail = e.target.value
        const updateUser = { name: user.name, email: updateEmail };
        setUser(updateUser)
    }

    const handleUpdateuser = e => {
        const url = `http://localhost:5000/userCollection/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
           if(data.modifiedCount > 0){
               alert('Updated Successfully')
               setUser({});
           }
        })
        e.preventDefault()
    }

    return (
        <div>
            <Home></Home>
            <h2>{user.name} :::::: {user.email} udpate users</h2>

            <form action="" onSubmit={handleUpdateuser}>
                <input type="text" onChange={handleNameChange} value={user.name || ''} />
                <input type="email" onChange={handleEmailChange} name="" value={user.email || ''} />
                <input type="submit" value="Update" />
            </form>

        </div>
    );
};

export default UpdateUser;
