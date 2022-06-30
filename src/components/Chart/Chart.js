
import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
    const maxExpense = Math.max(...dataPointValue);
    return (<div className="chart">
        {props.dataPoints.map(dataPnt => <ChartBar value={dataPnt.value} maxValue={maxExpense} label={dataPnt.label} key={dataPnt.label}/>)}
    </div>)
}

export default Chart; 