import React, { useEffect, useState } from 'react'
import NannyCard from '../components/NannyCard/NannyCard'
import { getNannies } from '../firebse/db/API'

const Nannies = () => {

  const [nannies, setNannies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNannies = async () => {
      try {
        const data = await getNannies();
        setNannies(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }

    }
    fetchNannies();
  }, [])


  if (loading) return <div>Loading...</div>

  return (
    <>
      <div>Nannies</div>
      {console.log(nannies)}
      <div>
        {nannies && nannies.length > 0 ? (
          nannies.map(nanny => (
            <NannyCard key={nanny.id} nanny={nanny} />
          ))
        ) : (
          <div>No nannies available.</div>
        )}
      </div>
    </>
  )
}

export default Nannies