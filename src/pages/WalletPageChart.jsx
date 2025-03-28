import React from "react";
import { Chart } from "react-google-charts";

function  Pie() {
    const data = [
        ["Task", "Hours per Day"],
        ["Work", 1],
        ["Eat", 1],
        ["Commute", 1],
        ["Watch TV", 1],
        ["Sleep", 2],
    ];

    const options = {
        title: "My Daily Activities",
    };
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"800px"}
        />
    );
}
export  default Pie