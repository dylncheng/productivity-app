import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import JSONPretty from 'react-json-pretty';

const Profile2 = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <>
                <p class='user-info'>Name: {user.nickname}</p>
                <p class='user-info'>Email: {user.email}</p>
                {/* <JSONPretty data={user} /> */}
                {/* {JSON.stringify(user, null, 2)} */}
            </>
        )
    )

}

export default Profile2;