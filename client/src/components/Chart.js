import React, {useEffect, useState} from "react"
import Loader from "./Loader"
import getShapesForConfig from "../lib/getShapesForConfig"
import getSpeciesByName from "../lib/getSpeciesByName"
import { useQuery } from "react-query"
import Map from "./Map"
import Message from "./Message"

const Chart = (props) => {
    const [lat, setLat] = useState()
    const [lng, setLng] = useState()
    const [shapes, setShapes] = useState(
        [
            {
              type: "zingchart.maps",
              options: {
                id: "world",
                name: "world.continents",
                ignore: ["AK", "HI"]
              }
            }
        ]
    )
    const [config, setConfig] = useState()
    const fetchObservations = async () => {
        const species = getSpeciesByName(props.birds, props.selectedBird)
        const geo = navigator.geolocation
        await geo.getCurrentPosition((pos) => {
          setLat(pos.coords.latitude)
          setLng(pos.coords.longitude)
          return pos
        })
        const res = await fetch(`https://api.ebird.org/v2/data/nearest/geo/recent/${species}?lat=${lat ? lat : 40}&lng=${lng ? lng : -74}`, {
          headers: {
            'x-ebirdapitoken': process.env.REACT_APP_EBIRD_API_KEY,
          },
        })
        const observations = await res.json()
        const shapeConfig = getShapesForConfig(observations, shapes)
        setShapes(shapeConfig)
    }
    useEffect(() => {
        if (shapes.length > 1) {
            console.log(shapes)
            setConfig({shapes: shapes})
        }
    }, [shapes])
    useEffect(() => {
        if (config) {
            console.log(config)
        }
    }, [config])
    const { isLoading, error, data } = useQuery(["data", props.birds, props.selectedBird], fetchObservations)
    if (isLoading) return <Loader />
    if (error) return <Message error={true} message={error} />
  return (
    <div className="flex flex-row">
        {config ? <Map config={config} /> : null}
    </div>
  )
}

export default Chart