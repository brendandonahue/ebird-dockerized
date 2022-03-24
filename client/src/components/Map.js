import React, { useEffect } from "react"
import "zingchart/es6"
import ZingChart from "zingchart-react"
import "zingchart/modules-es6/zingchart-maps.min.js"
import "zingchart/modules-es6/zingchart-maps-world-continents.min.js"

const Map = (props) => {
  useEffect(() => {
    console.log(props.config)
  }, [])
  return (
    <>
      <ZingChart 
          data={props.config} 
          height="600px"
      /> 
    </>
  )
}

export default Map