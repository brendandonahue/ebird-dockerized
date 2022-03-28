import React, {useState} from 'react'
import Chart from './Chart'
import BirdsList from './BirdsList'
import ChartEmpty from './ChartEmpty'

const Main = () => {
  const [selectedBird, setSelectedBird] = useState()
  const [birds, setBirds] = useState()
  const [showChart, setShowChart] = useState(false)
  return (
    <div className="block">
      <div className="flex flex-col items-center justify-center text-center space-y-12">
        <h1 className="text-9xl text-blue-300 font-bold">Ebird</h1>
        <p className="text-2xl text-slate-500">Search to find birds by their common name 
        and view their recent observations.</p>
        <BirdsList setSelectedBird={setSelectedBird} setBirds={setBirds} setShowChart={setShowChart} />
      </div>
      <div className="flex flex-col justify-center text-center">
        {showChart ? <Chart birds={birds} selectedBird={selectedBird} /> : <ChartEmpty />}
      </div>
    </div>
  )
}

export default Main