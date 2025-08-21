import React, { createContext, useState } from 'react'
import ChildA from './ChildA';


// step 1: Create a context
// step 2: Create a provider component / wrap all the child inside the provider
// step 3: Use the context in the child components using useContext hook / paas the valeue
// step 4: Use in the child components using useContext hook / paas the value


const UserContext = createContext();
const UserProvider = UserContext.Provider;
function useContextLearn() {

    const [user, setUser] = useState({ name: 'Sonu Maddheshiya', age: 23 });
    return (
        <>
            <UserProvider value={user}>
                <div>
                    <h1>Use Context Example</h1>
                    <ChildA />
                </div>
            </UserProvider>
            {/* You can add ChildA, ChildB, and ChildC components here to see how they consume the context */}
        </>
    )
}

export default useContextLearn;
export { UserContext };