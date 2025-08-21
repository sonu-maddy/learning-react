import React from 'react'
import { UserContext } from './useContextLearn';

function ChildC() {
    const user = useContext(UserContext);
  return (
    <div>
        {user ? (
            <>  
                <h2>ChildC</h2>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
            </>
            ): 
            (
            <p>No user data available</p>
        )}
    </div>
  )
}

export default ChildC