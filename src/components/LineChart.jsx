import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as chartjs, Title, Tooltip, LineElement,Legend,CategoryScale,LinearScale, PointElement, Filler } from 'chart.js';
import { useEffect, useState } from 'react';
chartjs.register(
  Title,Tooltip,LineElement,Legend,
  CategoryScale,LinearScale, PointElement,Filler
)
export const LineChart = () => {
    const [data, setData] = useState({
        labels:["Jan","Feb","March","April","may","June","July","August","Septempber","October","November","December"],
        datasets:[
          {
            label:"First Dataset",
            data:[10,20,30,42,51,31,59,61,73,91,58,70],
            backgroundColor:"blue",
            borderColor:"blue",
            tension:0.4,
            fill:true,
            pointBorderColor:'blue',
            pointBackgroundColor:'white'
          }
        ]
      })
    
      useEffect(()=> {
        const arr=[];
        fetch('https://sushant-server.herokuapp.com/api/income')
          .then(res => res.json())
          .then(json => {console.log("json",json)
            json.map((item,index)=> {
              arr.push(item.price)
              // arr.reverse();
            })
            setData({
              labels:["Nov 1","Nov 4","Nov 8","Nov 12","Nov 16"],
              datasets:[
                {
                  label:"First Dataset",
                  data:arr,
                  backgroundColor:"blue",
                  borderColor:"blue",
                  tension:0.4,
                  fill:true,
                  pointBorderColor:'blue',
                  pointBackgroundColor:'white'
                }
              ]
            })}  
          )
          console.log("arr",arr);
            
          },[])
  return (
    <div style={{width:"500px",height:"500px",marginLeft:"20px"}}> 
        <Line data={data}>Hello Sushant</Line>
    </div>
  )
}
