import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Paper, makeStyles } from '@material-ui/core'
import { Line } from 'react-chartjs-2';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const useStyles = makeStyles((theme) => ({
  root: {
     width: '100%',
     height:'70vh',
    
  } 
})
)

const Stats = () => {
 
  const classes = useStyles();
  const jabs = useSelector((state) => state.jab.jabs)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'number of people that have taken first and second jabs',
      },
    },
  };

  


  const firstJab = jabs.filter((jab) => {
    return jab.jabName === "first"
  })
  const secondJab = jabs.filter((jab) => jab.jabName === "second")

 
  const labels = ['','first','second','']
  const data = {
    labels,
    datasets: [
      {
        label: 'jabs',
        data: ['',firstJab.length,secondJab.length,''],
        borderColor: 'green',
       
      }
    ]
  };
  
 
  return <div className={classes.root}>
    <Paper
      className={classes.root}
      variant='outlined'>
      <Grid container
      spacing={6}
        justifyContent="center"
        alignItems="center">
        <Grid item sm={7}>
          <Line options={options} data={data} />;
        </Grid>
        <Grid item sm={3}>
          <p>{`First Jab        :${firstJab.length}`}</p>
          <p>{`Second Jab :${secondJab.length}`}</p>
          <p>{`Total doses given :${firstJab.length + secondJab.length }`}</p>
        </Grid>
      </Grid>
    </Paper>
  </div>;
};

export default Stats;
