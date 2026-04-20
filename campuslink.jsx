import React from 'react';

const CampusLink = () => {
    const [auth, setAuth] = React.useState(false);
    const [feed, setFeed] = React.useState([]);
    const [confessions, setConfessions] = React.useState([]);
    const [resources, setResources] = React.useState([]);
    const [chatMessages, setChatMessages] = React.useState([]);
    const [directMessages, setDirectMessages] = React.useState([]);

    // Authentication feature (mock)
    const handleLogin = () => {
        setAuth(true);
    };

    // Fetch and manage features
    React.useEffect(() => {
        // Mock fetching feed
        setFeed(['Feed Item 1', 'Feed Item 2']);
        // Mock fetching confessions
        setConfessions(['Confession 1', 'Confession 2']);
        // Mock fetching resources
        setResources(['Resource 1', 'Resource 2']);
        // Mock fetching chat messages
        setChatMessages(['Chat Message 1', 'Chat Message 2']);
        // Mock fetching direct messages
        setDirectMessages(['DM 1', 'DM 2']);
    }, []);

    return (
        <div>
            <h1>CampusLink</h1>
            {!auth ? (
                <button onClick={handleLogin}>Login</button>
            ) : (
                <div>
                    <h2>Feed</h2>
                    <ul>{feed.map(item => <li key={item}>{item}</li>)}</ul>
                    <h2>Confessions</h2>
                    <ul>{confessions.map(item => <li key={item}>{item}</li>)}</ul>
                    <h2>Resources</h2>
                    <ul>{resources.map(item => <li key={item}>{item}</li>)}</ul>
                    <h2>Chat</h2>
                    <ul>{chatMessages.map(msg => <li key={msg}>{msg}</li>)}</ul>
                    <h2>Direct Messages</h2>
                    <ul>{directMessages.map(msg => <li key={msg}>{msg}</li>)}</ul>
                    <h2>Profile</h2>
                    <p>Your profile information here.</p>
                    <h2>Admin Panel</h2>
                    <p>Admin functions go here.</p>
                </div>
            )}
        </div>
    );
};

export default CampusLink;
