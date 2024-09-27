import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNanniesList } from '../redux/nanniesSlice'


const Nannies = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getNanniesList()), [] })

  const nanniesList = useSelector(state => state.nannies)
  return (
    console.log(nanniesList)
  )
}

export default Nannies