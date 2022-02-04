import React, { useRef } from 'react';
import Home from '../Home/Home';

const AddUser = () => {

    const nameRef = useRef();
    const eamilRef = useRef();

    const handleUser = e => {
        const name = nameRef.current.value;
        const email = eamilRef.current.value;
        const newUser = { name, email }
        console.log(newUser);
        fetch('http://localhost:5000/addUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('User Inserted Successfully')
                    e.target.reset() //for clear form input
                }
            })


        e.preventDefault();
    }

    return (
        <div className='mt-5'>
             <Home />
            <h2>Pleasre Add an User</h2>
            <form className='form-control ' action="" onSubmit={handleUser}>
                <input type="text" ref={nameRef} />
                <input className="mx-5  " type="email" name='' ref={eamilRef} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;
