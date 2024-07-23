import React from 'react'
import { useState, useEffect } from 'react'


// userEffect is a hook that allows you to perform side effects in your functional components 
// הוא וו המאפשר לך לבצע תופעות לוואי ברכיבים הפונקציונליים שלך 

// useState is a hook that allows you to have state variables in functional components 
//  הוא הוק המאפשר לך לקבל משתני מצב ברכיבים פונקציונליים


export default function Effect() {

    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [inputValue, setInputValue] = useState('')

    // Component lifecycle
    // Mount -> Update -> Unmount

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))

        return () => {
            console.log(' Finished ')
        }
    }, [])


    useEffect(() => {
        setFilteredUsers(users)
    }, [users, inputValue])

    useEffect(() => {
        const filter = users.filter(user => user.name.toLowerCase().includes(inputValue))
        setFilteredUsers(filter)
    
    }, [inputValue, users])



    return (
        <>

            <input type="text" className='search' onInput={e => setInputValue(e.target.value)} />
            {filteredUsers.map(
                user => <h3 key={user.id}>  {user.name}</h3>
            )}
        </>
    )
}

