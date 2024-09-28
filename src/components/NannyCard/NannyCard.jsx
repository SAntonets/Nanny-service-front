import React from 'react'
import { calculateAge } from '../../untils/ageCalc';

const NannyCard = ({ nanny, ...rest }) => {
  return (
    <li>
      <img src={nanny.avatar_url} alt={nanny.name} width={250}/>
      <p>Nanny</p>
      <p>{nanny.name}</p>
      <p>Age: {calculateAge(nanny.birthday) }</p>
    </li>
  )
}

export default NannyCard

 // {
 //   "name": "Anna Shevchenko",
 //   "avatar_url": "https://ftp.goit.study/img/avatars/23.jpg",
 //   "birthday": "1996-04-10T22:25:57.010+00:00",
 //   "experience": "5 years",
 //   "reviews": [
 //     {
 //       "reviewer": "Olga K.",
 //       "rating": 5,
 //       "comment": "Anna is wonderful! My kids loved her and she was always punctual."
 //     },
 //     {
 //       "reviewer": "Petr S.",
 //       "rating": 4,
 //       "comment": "She's great, but sometimes she had to reschedule on short notice."
 //     }
 //   ],
 //   "education": "Bachelor's in Early Childhood Education, First Aid Certified",
 //   "kids_age": "1 to 6 years old",
 //   "price_per_hour": 15,
 //   "location": "Kyiv, Ukraine",
 //   "about": "I love children and have been working with them for over 5 years. I believe in creating a positive and nurturing environment for kids. I also love outdoor activities and crafts.",
 //   "characters": ["patient", "energetic", "creative", "punctual"],
 //   "rating": 4.5
 // }