
import image1 from '../assests/odisha1.jpg'
import image2 from '../assests/odisha2.jpg'
import image3 from '../assests/mahavir1.jpg'
import image4 from '../assests/mahavir2.avif'
import image5 from '../assests/mahavir2.jpg'
import image6 from '../assests/h1.avif'
import image7 from '../assests/h2.avif'
import image8 from '../assests/goodfri.avif'
import image9 from '../assests/goodfri2.avif'
import image10 from '../assests/goodfri3.avif'
import image11 from '../assests/easter1.avif'
import image12 from '../assests/easter2.avif'
import image13 from '../assests/ambd1.avif'
import image14 from '../assests/ambd2.avif'
import image15 from '../assests/vai1.avif'
import image16 from '../assests/vai2.avif'
import image17 from '../assests/vai3.avif'
import image18 from '../assests/eid1.avif'
import image19 from '../assests/eid2.avif'
import image20 from '../assests/eid3.avif'
import image21 from '../assests/eid4.avif'
import image22 from '../assests/m1.avif'
import image23 from '../assests/labour.avif'
import image24 from '../assests/labour2.avif'
import image26 from '../assests/rbd.avif'
import image27 from '../assests/rbd2.avif'

const events = [
    {
        id: 1,
        title: "Odisha Foundation Day",
        type: "National",
        start: new Date(2023, 3, 1),
        end: new Date(2023, 3, 2),
        images: [
          {
            id: 1,
            url: image1,
          },
          {
            id: 2,
            url: image2,
          },
        ],
      },
      {
        id: 2,
        title: "Mahavir Jyonti",
        type: "Other",
        start: new Date(2023, 3, 4),
        end: new Date(2023, 3, 5),
        images: [
          {
            id: 3,
            url: image3,
          },
          {
            id: 4,
            url: image4,
          },
          {
            id: 5,
            url: image5,
          },
        ],
      },
      {
        id: 3,
        title: "World Health Day",
        type: "Other",
        start: new Date(2023, 3, 7),
        end: new Date(2023, 3, 8),
        images: [
          {
            id: 6,
            url: image6,
          },
          {
            id: 7,
            url: image7,
          },
        ],
      },
      {
        id: 4,
        title: "Good Friday",
        type: "International",
        start: new Date(2023, 3, 8),
        end: new Date(2023, 3, 9),
        images: [
          
          {
            id: 8,
            url: image8,
          },
          {
            id:9,
            url: image9,
          },
          {
            id:10,
            url: image10,
          },
        ],
      },
      {
        id: 5,
        title: "Easter Day",
        type: "National",
        start: new Date(2023, 3, 9),
        end: new Date(2023, 3, 10),
        images: [
          {
            id: 11,
            url: image11
          },
          {
            id: 12,
            url: image12
          },
        ],
      },
      {
        id: 6,
        title: "Ambedkar Jyonti",
        start: new Date(2023, 3, 14),
        end: new Date(2023, 3, 15),
        type: "National",
        images: [
          {
            id: 13,
            url: image13
          },
          {
            id: 14,
            url: image14
          },
        ],
      },
      {
        id: 7,
        title: "Vaisakhi",
        type: "Other",
        start: new Date(2023, 3, 14),
        end: new Date(2023, 3, 15),
        images: [
          {
            id: 15,
            url: image15
          },
          {
            id: 16,
            url: image16
          },
          {
            id: 17,
            url: image17
          },
        ],
      },
      {
        id: 8,
        title: "Mesadi",
        type: "Other",
        start: new Date(2023, 3, 16),
        end: new Date(2023, 3, 17),
        images: [
          {
            id:22,
            url: image22
          },
        ],
      },
      {
        id: 9,
        title: "EID UL-FITR",
        type: "International",
        start: new Date(2023, 3, 22),
        end: new Date(2023, 3, 23),
        images: [
          {
            id: 18,
            url: image18
          },
          {
            id: 19,
            url: image19
          },
          {
            id: 20,
            url: image20
          },
          {
            id: 21,
            url: image21
          },
        ],
      },
      {
        id: 10,
        title: "Labour Day",
        type: "National",
        start: new Date(2023, 4, 1),
        end: new Date(2023, 4, 2),
        images: [
          {
            id: 23,
            url: image23
          },
          {
            id: 24,
            url: image24
          },
        ],
      },
      {
        id: 11,
        title: "Budha Purnima",
        type: "",
        start: new Date(2023, 4, 5),
        end: new Date(2023, 4, 6),
        images: [
          {
            id: 25,
            url: image5 
          },
        ],
      },
      {
        id: 10,
        title: "Birthday of Rabindranath",
        type: "National",
        start: new Date(2023, 4, 9),
        end: new Date(2023, 4, 10),
        images: [
          {
            id: 26,
            url: image26
          },
          {
            id: 27,
            url: image27
          },
        ],
      },
  ];
  
  export default events;