import { useEffect, useState } from 'react';
import { Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, MenuItem, Select } from '@mui/material';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, LabelList, Label, CartesianGrid, Legend, Tooltip } from 'recharts';
// import { DataGrid } from '@mui/x-data-grid';

// import SongCard from '../components/SongCard';
import { formatDuration } from '../helpers/formatter';
const config = require('../config.json');

export default function TrendPage() {

  const [compareData, setCompareData] = useState([])
  const [playerName, setPlayerName] = useState([]);
  const [gameOverGameData, setGameOverGameData] = useState([]);

  const [name, setName] = useState('LeBron James');
  const [metric, setMetric] = useState('Total');
//   const [ltone, setLtone] = useState(false);
  
  let ltone = false
  const metricsList = ['Total', 'FGA', 'FGM']
  const compareChartData = {
    game_date_est: [],
    metric: [],
    value: [],
  };

  useEffect(() => {
    fetch(`http://${config.server_host}:${config.server_port}/trend/compare`)
    .then(res => res.json())
    .then(resJson => {
        setCompareData(resJson);
    });

    fetch(`http://${config.server_host}:${config.server_port}/trend/get_player_names`)
    .then(res => res.json())
    .then(resJson => {
        setPlayerName(resJson);
    });

    fetch(`http://${config.server_host}:${config.server_port}/trend/game`)
    .then(res => res.json())
    .then(resJson => {
        setGameOverGameData(resJson);
    });



    
  }, []);

  console.log('compareData')
  console.log(compareData)
  console.log('playerName')
  console.log(playerName)

  const search = () => {
    fetch(`http://${config.server_host}:${config.server_port}/trend/compare?player_name=${name}` +
      `&metrics=${metric}`
    )
    .then(res => res.json())
    .then(resJson => {
    setCompareData(resJson);
    });

    fetch(`http://${config.server_host}:${config.server_port}/trend/game?player_name=${name}&metrics=${metric}`)
    .then(res => res.json())
    .then(resJson => {
        setGameOverGameData(resJson);
    });
  
  }

  compareData.forEach(item => {
    compareChartData.game_date_est.push(item.game_date_est);
    compareChartData.metric.push(item.metric);
    compareChartData.value.push(item.rnk);
  });

  const max_metric = Math.ceil((Math.max(...compareChartData.metric) * 1.2));

  console.log('hello');
  console.log(compareChartData.metric);
  console.log(max_metric);
  console.log('compareChartData:', compareChartData);
  console.log(compareData.length);
  console.log(ltone);

  if(compareData.length == 1){
    ltone = true
  }

  // Custom formatter for YAxis tick values to display percentages
  const formatYAxisTick = (tickItem) => {
    return `${tickItem * 100}%`;
  };

//   const formatLabelListValue = (value) => {
//     return `${value}%`;
//   };

  // This component makes uses of the Grid component from MUI (https://mui.com/material-ui/react-grid/).
  // use the outline of HW3
  return (
    <Container>
      {/* {selectedSongId && <SongCard songId={selectedSongId} handleClose={() => setSelectedSongId(null)} />} */}
      <h2>Player's Trend In The Latest 5 Games</h2>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <TextField select label='Player Name' value = {name} onChange={(e) => setName(e.target.value)} style={{ width: "100%" }}>
            {playerName.map(option => (
              <MenuItem key={option.name} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField select label='Metric' value = {metric} onChange={(e) => setMetric(e.target.value)} style={{ width: "100%" }}>
            {metricsList.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Button onClick={() => search() } style={{ left: '50%', transform: 'translateX(-50%)', fontSize: '1.2rem', padding: '10px 20px' }}>
        Search
      </Button>
      {
        ltone
            ? (
                <h2>Competed less than or equal to one race in all record, recharts can only handle graphs with greater than one datapoint</h2>
            ) : ( <><h2>Latest 5 Games: metric score</h2>
            <ResponsiveContainer height={400} width="100%" aspect={3}>
              <LineChart data={compareData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="category" dataKey = "game_date_est" />
                <YAxis domain={[0, max_metric]}>
                  {/* <Label value = {metric} position="insideMiddleLeft" offset={40} /> */}
                </YAxis>
                <Tooltip />
                {/* <Legend /> */}
                <Line type = "monotone" dataKey = "metric" stroke = "#8884d8" dot={true} isAnimationActive={false}>
                  <LabelList dataKey = "metric" position = "top" />
                </Line>
                {/* <Line type="monotone" dataKey="metric" stroke="#8884d8" /> */}
              </LineChart>
            </ResponsiveContainer>
      
            <h2>Latest 5 Games: metric ranking relative to other players in the same game</h2>
      
            <ResponsiveContainer height={400} width="100%" aspect={3}>
              <LineChart data={compareData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="category" dataKey = "game_date_est" />
                <YAxis domain={[0, 10]} reversed = "True" hide = "True" />
                <Tooltip />
                <Legend />
                <Line type = "monotone" dataKey = "rnk" stroke = "#8884d8" dot={true} isAnimationActive={false}>
                  <LabelList dataKey = "rnk" position = "top" />
                </Line>
              </LineChart>
            </ResponsiveContainer> 

            <h2>Latest 5 Games: game over game % change</h2>
      
            <ResponsiveContainer height={400} width="100%" aspect={3}>
              <LineChart data={gameOverGameData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="category" dataKey = "game_date_est" />
                <YAxis tickFormatter={formatYAxisTick}/>
                {/* <YAxis/> */}
                <Tooltip />
                <Legend />
                <Line type = "monotone" dataKey = "game_over_game_pct" stroke = "#8884d8" dot={true} isAnimationActive={false}>
                  <LabelList dataKey = "game_over_game_pct" position = "top" formatter={formatYAxisTick}/>
                </Line>
              </LineChart>
            </ResponsiveContainer> 
            
            </>
            ) 
      }
      
      

    </Container>
  );
}