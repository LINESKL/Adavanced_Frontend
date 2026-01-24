export default function Greeting() {
   const newDate = new Date();
   const hours = newDate.getHours();
   let greeting;
   let color;
   let backgroundColor;

    switch (true) {
        case (hours >= 6 && hours < 12):
            greeting = 'Good Morning';
            color = '#FF8C00';
            backgroundColor = '#292720';
            break;
        case (hours >= 12 && hours < 18):
            greeting = 'Good Afternoon';
            color = '#1E90FF';
            backgroundColor = '#292720';
            break;
        default:
            greeting = 'Good Evening';
            color = '#4B0082';
            backgroundColor = '#292720';
    }

   const containerStyle = {
    backgroundColor: backgroundColor,
    padding: '40px 60px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    textAlign: 'center' as 'center',
    minWidth: '300px',
    transition: 'all 0.3s ease'
   };

   const headingStyle = {
    fontSize: '2.5em',
    fontWeight: 'bold' as 'bold',
    color: color,
    fontFamily: 'Arial, sans-serif',
    margin: '0 0 20px 0',
   };

   const timeStyle = {
    fontSize: '1.5em',
    color: color,
    fontFamily: 'Arial, sans-serif',
    margin: '0',
    opacity: 0.8
   };

   return (
    <div style={containerStyle}>
        <h1 style={headingStyle}>{greeting}</h1>
        <h2 style={timeStyle}>{newDate.toLocaleTimeString()}</h2>
    </div>
   )
}