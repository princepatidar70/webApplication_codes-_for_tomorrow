import React, { useState } from 'react'
import Form from './Form'

const Sidebar = ({ toggle, setToggle }) => {
    const [openForm, setOpenForm] = useState(false)

    return (
        <div style={{ width: '300px', height: '100vh', backgroundColor: 'aliceblue', padding: '20px', boxShadow: '10px, 10px,lightblue' }}>
            <div style={{ width: '250px', display: "flex", flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderRadius: '20px' }}>
                <div>
                    <h2>Hi Reader,</h2>
                    <p>Here's your News!</p>
                </div>
            </div>
            <div style={{ width: '250px', height: '100px', backgroundColor: 'white', borderRadius: '20px' }}>
                <h1 style={{ display: 'flex', justifyContent: 'center', }}>View Toggle</h1>
                <button style={{ justifyContent: 'center', textAlign: 'center', backgroundColor: 'green', borderRadius: '5px' }} onClick={() => setToggle(!toggle)}>Toggle</button>
            </div>
            <div style={{ width: '250px', height: '150px', backgroundColor: 'white', borderRadius: '20px' }}>
                <h1 style={{ display: 'flex', justifyContent: 'center' }}> have a Feedback?</h1>
                <div style={{ backgroundColor: 'green', width: '200px', height: '50px', justifyContent: 'center', textAlign: 'center', alignContent: 'center', borderRadius: '10px' }} onClick={()=>setOpenForm(!openForm)}>
                    <p>We're Listening!</p></div>
            </div>
           {openForm? <Form/>:''}
        </div>
    )
}

export default Sidebar