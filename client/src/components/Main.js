import React, {useState} from 'react'
import Chart from './Chart'
import BirdsList from './BirdsList'
import ChartEmpty from './ChartEmpty'

const Main = () => {
  const [selectedBird, setSelectedBird] = useState()
  const [birds, setBirds] = useState()
  const [showChart, setShowChart] = useState(false)
  return (
    <div className="flex flex-col justify-center text-center">
      <div className="flex flex-row">
        <h1>Ebird</h1>
      </div>
      <div className="flex flex-row">
        <p>Search to find birds by their common name and view their hotspots.</p>
      </div>
      <BirdsList setSelectedBird={setSelectedBird} setBirds={setBirds} setShowChart={setShowChart} />
      {showChart ? <Chart birds={birds} selectedBird={selectedBird} /> : <ChartEmpty />}
    </div>
  )
}

export default Main