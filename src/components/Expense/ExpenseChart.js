import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
 
  const dataPoint = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "April", value: 0 },
    { label: "May", value: 0 },
    { label: "June", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    // starting as 0 as January for index
    const month = expense.date.getMonth();
    dataPoint[month].value += expense.amount;
  }
  return <Chart dataPoints={dataPoint}/>;
};

export default ExpenseChart;
