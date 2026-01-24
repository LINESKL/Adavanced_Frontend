import reactLogo from '../assets/react.svg'

export default function ProfileCard() {

    const UserData = {
        name: 'Aliar',
        button: 'Follow',
        bio: "I am a frontend developer",
        image: reactLogo,
    }


    const profileStyle = {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        width: '200px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif'
    };

    const imageStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginBottom: '16px'
    };

    const buttonStyle = {
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
        marginTop: '12px'
    };

    const nameStyle = {
        margin: '0',
        fontSize: '1.5em',
        marginBottom: '8px',

    };

    const bioStyle = {
        textAlign: 'center' as 'center',
        fontSize: '1em',
        color: '#666',
    };


    return (
        <div style={profileStyle}>
            <img src={UserData.image} alt="Profile Image" style={imageStyle} />
            <h2 style={nameStyle}>{UserData.name}</h2>
            <p style={bioStyle}>{UserData.bio}</p>
            <button style={buttonStyle}>{UserData.button}</button>
        </div>

    )
}