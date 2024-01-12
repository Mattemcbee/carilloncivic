// import disposed from '../images/dog.jpg'
// import disposed2 from '../images/space.jpg'

// import { Link } from 'react-router-dom'




 const CONTACT = [
    {
        id: 0,
        name: 'A SYMBOL OF HEALING AND TRADITION',
        text:'Learn more about our vibrant history',
        buttons:'history',

        website: <a className='unstyleLink' style={{ color: '#fefae0' }} href='https://disposedkings.netlify.app/'>
            Visit Website</a>

    },
    {
        id: 1,
        name: 'MEMBERSHIP',
        buttons:'members',
        text:'Learn more about the CCA and apply to join',

        website: <a className='unstyleLink' style={{ color: '#fefae0' }} href='https://disposedkings.netlify.app/'>
            Visit Website</a>

    },
    {
        id: 2,
        name: 'NEWS',
        text:'Everything you need to know about the neighborhood, events and community updates:',
        buttons:'news',

        website: <a className='unstyleLink' style={{ color: '#fefae0' }} href='https://disposedkings.netlify.app/'>
            Visit Website</a>

    }

];

export default CONTACT;