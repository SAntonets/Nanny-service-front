import React, { useEffect, useState } from 'react'
import NannyCard from '../components/NannyCard/NannyCard'
import { getNannies } from '../firebse/db/API'
import Loader from '../components/Loader/Loader';
import ErrorMesage from '../components/ErrorMesage/ErrorMesage';

const Nannies = () => {

  const [nannies, setNannies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    const fetchNannies = async () => {
      try {
        setLoading(true);
        const data = await getNanniesp();
        setNannies(data);
        setLoading(false);
      } catch (err) {
        setIsError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchNannies();
  }, [])


  if (loading) return <Loader />

  return (
    <>
      <div>Nannies</div>
      <ul>
        { nannies && Array.isArray(nannies) && nannies.length > 0 ? (
          nannies.map(nanny => (
            <NannyCard key={nanny.id} nanny={nanny} />
          ))
        ) : (
          <div>No nannies available.</div>
        )}
      </ul>
      {isError && <ErrorMesage/>}
    </>
  )
}

export default Nannies