import oldtower from '../images/carillionold2.jpg'
import civ from '../images/civ.jpg'
import star from '../images/star.jpg'
import gate from '../images/gate.jpg'
import bun from '../images/bun.jpg'


const ABOUT = [
  {
    id: 0,
    name: 'A SYMBOL OF HEALING AND TRADITION',
    text: 'Learn more about our vibrant history',
    buttons: 'HISTORY',
    pic: oldtower,
    website: '/history'
  },
  {
    id: 1,
    name: 'MEMBERSHIP',
    buttons: 'MEMBERSHIP',
    text: 'Learn more about the CCA and apply to join our community',
    pic: civ,
    website: '/member'
  },
  {
    id: 2,
    name: 'NEWS',
    text: 'Everything you need to know about the neighborhood, events and community updates',
    buttons: 'NEWSLETTERS',
    pic: bun,

    website: '/newsletter'
  },
  {
    id: 3,
    name: 'RESOURCES',
    buttons: 'RESOURCES',
    text: 'All of the resources on information about the Carillion, in one convenient place ',
    pic: star,

    website: '/resources'
  },
  {
    id: 4,
    name: 'CONTACT',
    buttons: 'CONTACT',
    text: 'Need to get in touch? Contact us here',
    pic: gate,

    website: '/contact'
  }

];

export default ABOUT;