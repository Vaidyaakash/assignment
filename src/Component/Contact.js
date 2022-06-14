import React, { useState } from 'react';
import Header from './Header';

const Contact = () => {

    const [data, setData] = useState([{
        name: "",
        pass: "",
        email: "",
    }])

    const handleSubmit = (e) => {
        e.preventDefault()
        // setData({[e.target.name]: e.target.value})
        console.log(data);
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Header />
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label>UserName : </label>
                    <input value={data.name} name="Username" onChange={handleChange} type="text" /><br />
                    <label>Pasword : </label>
                    <input value={data.pass} name="Password" onChange={handleChange} type="password" /><br />
                    <label>Email : </label>
                    <input value={data.email} name="Email" onChange={handleChange} type="text" /><br />
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}

export default Contact;