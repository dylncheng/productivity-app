import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import JSONPretty from 'react-json-pretty';

const Profile2 = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                {/* <JSONPretty data={user} /> */}
                {/* {JSON.stringify(user, null, 2)} */}
            </div>
        )
    )

}

export default Profile2;