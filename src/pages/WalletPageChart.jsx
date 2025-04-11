import React, {useEffect, useState} from "react";
import { Chart } from "react-google-charts";

function  Pie(props) {

    let array = props.listUser


    const options = {
        title: "",
    };
    return (
        <div>

            <Chart
                chartType="PieChart"
                data={array}
                options={options}
                width={"100%"}
                height={"400px"}
            />

        </div>

    )
}

export default Pie