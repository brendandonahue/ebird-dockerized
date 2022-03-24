const getShapesForConfig = (observations, shapes) => {
    if (observations === null) return
    let newShapeArr = []
    newShapeArr.push(shapes[0])
    for (let i = 0; i < observations.length; i++) {
        const newShape = {
                type: 'circle', // shapeid is OPTIONAL but smart if you are targeting events to this shape
                id: `${i}`,
                map: 'world', // assigning to map name or id is necessary
                backgroundColor: '#4dd0e1',
                cursor: 'pointer',
                size: 2,
                // size: observations[i].howMany !== null || observations[i].howMany !== undefined ||
                // observations[i].howMany !== "" ? observations[i].howMany * 4 : 4,
                target: '_blank', // just like HTMl we have 
                url: '', // is how you link url to shapestarget _blank
                x: `${observations[i].lng}lon`, // hook shape based on lon/lat
                y: `${observations[i].lat}lat`, // hook shape based on lon/lat
                tooltip: {
                text: `Total seen: ${observations[i].howMany !== null || observations[i].howMany !== undefined ||
                    observations[i].howMany !== "" ? observations[i].howMany * 4 : 4}`,
                backgroundColor: '#ff9800',
                borderColor: '#333',
                borderRadius: 4,
                fontSize: 16
                }
        }
        newShapeArr.push(newShape)
    }
    return newShapeArr
}
export default getShapesForConfig