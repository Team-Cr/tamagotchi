import CatDead from '../assets/images/CatDead.png';

export interface EndScreen {
  title: string;
  text: string;
  imgSrc: string;
}

export const endScreen: EndScreen = {
  title: 'Cat has a new home now',
  text: 'He has been without food for too long. Game over.',
  imgSrc: CatDead,
};
