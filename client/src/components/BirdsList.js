import React, { useState } from 'react'
import Loader from '../components/Loader'
import { useQuery } from 'react-query'
import Autocomplete from '../components/Autocomplete'

const BirdsList = (props) => {
    const [suggestions, setSuggestions] = useState()
    const setSelectedBird = props.setSelectedBird
    const setBirds = props.setBirds
    const setShowChart = props.setShowChart
    const fetchBirds = async () => {
        const res = await fetch("https://api.ebird.org/v2/ref/taxonomy/ebird?fmt=json", {
            headers: {
              'x-ebirdapitoken': process.env.REACT_APP_EBIRD_API_KEY,
            }
        })
        const bData = await res.json()
        let names = []
        let birdArr = []
        for (let i = 0; i < bData.length; i++) {
          names.push(bData[i].comName)
          birdArr.push({name: bData[i].comName, code: bData[i].speciesCode})
        }
        setSuggestions(names)
        setBirds(birdArr) 
        return bData
    }
  // const submitBird = () => {
  //   setShowChart(true)
  // }
  // const randomBird = () => {
  //   // get random index for a bird
  //   const index = Math.random() * (suggestions.length - 1)
  //   // set the random bird
  //   setSelectedBird(suggestions[index])
  //   setShowChart(true)
  // }
  // const reset = () => {
  //   window.location.reload()
  // }
  const { isLoading, error, birdData } = useQuery("birdData", fetchBirds)
  if (isLoading) return <Loader />
  if (error) return "error"
  return (
    <div className="flex flex-row">
        <div className="flex flex-col">
          {suggestions ? <Autocomplete
            suggestions={suggestions}
            setSelectedBird={setSelectedBird}
            setShowChart={setShowChart}
          /> : <Loader />}
          {/* <button type="button" onClick={() => submitBird()} className="bg-blue-900 px-4 py-2 text-4xl text-white rounded mt-2">Submit</button> */}
          {/* <button type="button" onClick={() => randomBird()} className="bg-blue-900 px-4 py-2 text-4xl text-white rounded mt-2">Random Bird</button> */}
          {/* <button type="button" onClick={() => reset()} className="bg-green-900 px-4 py-2 text-white h-12">Reset</button> */}
        </div>
    </div>  
  )
}

export default BirdsList