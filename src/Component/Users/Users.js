import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';

const Users = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/userCollection')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    /// Delete User

    const handleUser = id => {
        // const url = (`http://localhost:5000/userCollection/${id}`)
        // fetch(url, {
        //     method: 'DELETE'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.deletedCount) {
        //             alert('Deleted Successfully')

        //             const remaining = data.filter(user => user._id !== id)
        //             setData(remaining)
        //         }
        //     })
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `http://localhost:5000/userCollection/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(datas => {
                    if (datas.deletedCount > 0) {
                        alert('Deleted Successfully')

                        const remaining = data.filter(user => user._id !== id)
                        setData(remaining)
                    }
                })
        }
    }


    return (
        <div>
            <Home />
            <h2>Users Available: {data.length}</h2>
            {
                data.map((each, index) =>

                    <li key={each._id}>{each.name} :: {each.email}
                    <Link to={`/users/update/${each._id}`}>  <button className="mx-1 border">Edit</button></Link>

                     <button className="mx-1 border" onClick={() => handleUser(each._id)} >X</button>
                      </li>



                )
            }
        </div>
    );
};

export default Users;
