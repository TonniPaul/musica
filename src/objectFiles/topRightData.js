import { v4 as uuid } from 'uuid';
import image1 from '../assets/newmusic.svg'
import image2 from '../assets/tommorrow.svg'
import golden from '../assets/golden.svg'

export  const RigthObjectData = [
   {
      id : uuid(),
      images: golden,
      title: 'Golden age 0f 80s ',
      artist : 'TonniPaul',
      time : "2:27:12 "
   },
   {
      id : uuid(),
      images: image1,
      title: 'Reggae "n" blues',
      artist : 'Ronn AA',
      time : "2: 34:45 "
   },
   {
      id : uuid(),
      images: image2,
      title: 'Tommorow\'s Tune',
      artist : 'Ife Pearl',
      time : "2: 34:45 "
   },
]