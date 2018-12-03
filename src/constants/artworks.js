import weatherapp from '../assets/img/weather-forecast.png'
import weatherIcon from '../assets/img/WeatherIcon.png'
import lipstick from '../assets/img/lipstick.png';
import moonstick from '../assets/img/moonstick.png';

// Array of Object (= 配列) is exported
// Workspage.jsxでid = indexを呼び出している(Arrayなのでいちいちidを定義する必要なし)
export const artworks = [
  {
    imageUrl: weatherapp,
    title: 'Weather forecast app UI',
    categories: ['Vector', 'Artwork', 'Figma', 'UI', 'App'],
    created: '2018/10/2',
  },
  {
    imageUrl: weatherIcon,
    title: 'Weather forecast app icon',
    categories: ['Vector', 'Artwork', 'Icon', 'UI'],
    created: '2018/10/2',
  },
  {
    imageUrl: lipstick,
    title: 'Lip Stick',
    categories: ['Vector', 'Artwork'],
    created: '2018/10/2',
  },
  {
    imageUrl: moonstick,
    title: 'Moon Stick inspired by Sailor Moon',
    categories: ['Vector', 'Artwork'],
    created: '2018/10/2',
  },
];