import React, { useEffect, useState } from 'react'
import './BaseApp.css'

const BaseApp = () => {

    const [userData, setUserData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const URL = 'https://dummyjson.com/users';

    useEffect(() => {
        fetchUserData().catch((error) => {
            setErrorMessage(error.message);
        });
    }, []);

    const fetchUserData = async () => {
        let response = await fetch(URL);
        console.log(response.ok)
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            setErrorMessage(message);
            throw new Error(message);
        }
        let data = await response.json();
        setUserData(data.users);
    }

    return (
        <div className='main-container' >
            {errorMessage ? <h1 className='error-message'>{errorMessage} Error Occured</h1> :
                <div className="main-div">
                    <table className='table'>
                        <caption className='table-caption'> Users Data</caption>
                        <thead className='table-heading'>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Maiden Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Date Of Birth</th>
                            <th>Profile Image</th>
                            <th>Blood Group</th>
                            <th>Height</th>
                            <th>Weight</th>
                        </thead>
                        <tbody className='table-body'>
                            {
                                userData.map(data => (
                                    <tr className='table-rows'>
                                        <td className='table-data' data-label='Id'>{data.id}</td>
                                        <td className='table-data' data-label='First Name'>{data.firstName}</td>
                                        <td className='table-data' data-label='Last Name'>{data.lastName}</td>
                                        <td className='table-data' data-label='Maiden Name'>{data.maidenName}</td>
                                        <td className='table-data' data-label='Age'>{data.age}</td>
                                        <td className='table-data' data-label='Gender'>{data.gender}</td>
                                        <td className='table-data' data-label='Email'>{data.email}</td>
                                        <td className='table-data' data-label='Phone'>{data.phone}</td>
                                        <td className='table-data' data-label='Username'>{data.username}</td>
                                        <td className='table-data' data-label='Password'>{data.password}</td>
                                        <td className='table-data' data-label='Date Of Birth'>{data.birthDate}</td>
                                        <td className='table-data' data-label='Profile Image'>
                                            <img className='img' src={data.image} alt="" />
                                        </td>
                                        <td className='table-data' data-label='Blood Group'>{data.bloodGroup}</td>
                                        <td className='table-data' data-label='Height'>{data.height}</td>
                                        <td className='table-data' data-label='Weight'>{data.weight}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div >
    )
}

export default BaseApp
