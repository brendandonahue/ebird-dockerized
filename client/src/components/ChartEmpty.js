import Message from "./Message"
const ChartEmpty = (props) => {
  return (
    <div className="flex flex-row">
        <Message error={false} message="Select a bird with recent results and click Submit to show map." />
    </div>
  )
}

export default ChartEmpty