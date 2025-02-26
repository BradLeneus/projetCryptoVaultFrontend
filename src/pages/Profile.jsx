import 'react';
import { useParams } from "react-router-dom";

function Profile() {
    const { username } = useParams(); // Extracts "username" from the URL

    return (
        <h1>Welcome, {username}!</h1>
    );
}

export default Profile;