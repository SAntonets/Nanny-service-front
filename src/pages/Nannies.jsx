import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNannies } from '../firebse/db/API';
import { getNanniesList } from '../redux/nanniesSlice';


const Nannies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNannies().then(nannies => {
      dispatch(getNanniesList(nannies))
    });
    }, [dispatch])

    const nanniesList = useSelector(state => state.nannies)

  return (
    {nanniesList.length != 0 ? <ul>
      {nanniesList.map((nanny) => (
        <li key={nanny.id}>
          {nanny.name}, {nanny.experience} years experience
        </li>
      ))}
    </ul>} : null

  )
}

export default Nannies;