import React, { useEffect, useState } from 'react'
import NannyCard from '../components/NannyCard/NannyCard'
import { getNannies } from '../firebse/db/API'

const Nannies = () => {

  const [nannies, setNannies] = useState(null)

  useEffect(() => {
    async function fetchNannies() {
      const response = await getNannies;
    }
    fetchNannies();
  }, [])

  return (
    <>
      <div>Nannies</div>
      <NannyCard />
    </>
  )
}

export default Nannies