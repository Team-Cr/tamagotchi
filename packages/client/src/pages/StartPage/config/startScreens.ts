import CatDead from '@/shared/assets/images/CatDead.png';
import CatStanding from '@/shared/assets/images/CatStanding.png';
import Leveling from '../assets/images/Leveling.png';

export const StartScreens = [
  {
    title: 'Welcome to Tamagochi!',
    text: 'Here you can relax and spend time with your own virtual cat ;)',
    imgSrc: CatStanding,
  },
  {
    title: 'Leveling',
    text: "Click on an action to get HP and increase your cat's level.",
    imgSrc: Leveling,
  },
  {
    title: 'Cat life',
    text: 'Do not forget to feed and play with your friend, otherwise the game is over :(',
    imgSrc: CatDead,
  },
];
