// import disposed from '../images/dog.jpg'
// import disposed2 from '../images/space.jpg'
import GrantApp from '../images/CarillonGrantApplication_2017.pdf';
import GrantGuide from '../images/CarillonGrantGuidelines2017.pdf';
import Resident from '../images/CarillonResidentResources_12_1758046578.pdf';

// import { Link } from 'react-router-dom'




 const RESOURCES = [
    {
        id: 0,
        name: 'Arts in the Park Website',
        website: <a className='unstyleLink' style={{ color: '#fefae0' }} href='https://richmondartsinthepark.com//'>
            Arts in the Park Website</a>
    },
    {
        id: 1,
        name: 'Councilman Stephanie Lynchs Facebook Page',
        website: <a className='unstyleLink' style={{ color: '#fefae0' }} href='https://www.facebook.com/electstephanielynch/'>
            Councilman Stephanie Lynch's Facebook Page</a>
    },
    {
        id: 2,
        name: 'Carillon Grant Guidlines',
        website: <a className='unstyleLink' style={{ color: '#fefae0' }} href={GrantGuide}>
            Carillon Grant Guidlines</a>
    },
    {
        id: 3,
        name: 'Carillon Grant Application',
        website: <a className='unstyleLink' style={{ color: '#fefae0' }} href={GrantApp}>
            Carillon Grant Application</a>
    },
    {
        id: 4,
        name: 'Resident Resources',
        website: <a className='unstyleLink' style={{ color: '#fefae0' }} href={Resident}>
            Resident Resources</a>
    },
    {
        id: 5,
        name: 'Community Leaders ',
        website: <a className='unstyleLink' style={{ color: '#fefae0' }} href='https://www.carilloncivic.org/Carillonboard.php#committee'>
            Community Leaders</a>
    }

];

export default RESOURCES;

