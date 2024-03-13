import React from "react";
import { useState } from "react";

import UserContext from './UserContext';

const UserContextProvider= ({children}) => {
     const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}


// import { useState } from "react";
// import UserContext from './UserContext';

// const UserContextProvider = ({children}) => {
//   const [user, setUser] = useState(null);

//   return (
//     <UserContext.Consumer>
//       {(value) => (
//         <UserContext.Provider value={{ ...value, user, setUser }}>
//           {children}
//         </UserContext.Provider>
//       )}
//     </UserContext.Consumer>
//   ); 
// };
export default UserContextProvider;