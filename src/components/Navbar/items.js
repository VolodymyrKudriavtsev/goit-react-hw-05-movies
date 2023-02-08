import shortid from 'shortid';

const items = [
  {
    id: shortid.generate(),
    text: 'Home',
    link: '/',
  },
  {
    id: shortid.generate(),
    text: 'Movies',
    link: '/movies',
  },
];

export default items;
