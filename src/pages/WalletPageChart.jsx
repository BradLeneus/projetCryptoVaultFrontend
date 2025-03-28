import React, {useState} from "react";
import { Chart } from "react-google-charts";

function  Pie(props) {


    const [data, setData] = useState( [
        props.listUser


    ])
    const options = {
        title: "My Daily Activities",
    };
    return (
        <div>

            <Chart
                chartType="PieChart"
                data={data[0]}
                options={options}
                width={"100%"}
                height={"400px"}
            />

        </div>

    )
}

export default Pie