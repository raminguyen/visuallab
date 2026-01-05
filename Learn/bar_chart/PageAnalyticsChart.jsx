import { ChartContainer } from '@mui/x-charts/ChartContainer';

import { BarPlot } from '@mui/x-charts/BarChart';

import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';

import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';


function PageAnalyticsChart() {

  const data = [
    { page: 'Page A', uv: 1890 },
    { page: 'Page B', uv: 2000 },
    { page: 'Page C', uv: 2390 },
    { page: 'Page D', uv: 2780 },
    { page: 'Page E', uv: 3000 },
    { page: 'Page F', uv: 3490 },
    { page: 'Page G', uv: 4000 }
  ];


  return (

    <div>

      <h2 style={{ textAlign: 'left', marginBottom: '20px', color: 'white' }}>Sales Growth 2025</h2>

      <ChartContainer
        width={500}
        height={300}
        series={[
          {
            type: 'bar',
            data: data.map(item => item.uv),
            id: 'uv'
          }
        ]}
        xAxis={[
          {
            data: data.map(item => item.page),
            scaleType: 'band',
            id: 'pages'
          }
        ]}
        yAxis={[
          {
            id: 'value'
          }
        ]}
        sx={{
          '& .MuiBarElement-root': {
            fill: 'url(#gradient)',
            rx: 4
          },
          '& .MuiChartsAxis-left .MuiChartsAxis-line': {
            stroke: 'white !important'
          },
          '& .MuiChartsAxis-left .MuiChartsAxis-tick': {
            stroke: 'white !important'
          },
          '& .MuiChartsAxis-left .MuiChartsAxis-tickLabel': {
            fill: 'white !important'
          },
          '& .MuiChartsAxis-bottom .MuiChartsAxis-line': {
            stroke: 'white !important'
          },
          '& .MuiChartsAxis-bottom .MuiChartsAxis-tick': {
            stroke: 'white !important'
          },
          '& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel': {
            fill: 'white !important'
          }
        }}
      >

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>


        <BarPlot borderRadius={8} bargap={10} />

        <ChartsXAxis axisId="pages" position="bottom" />

        <ChartsYAxis axisId="value" position="left" />

      </ChartContainer>

    </div>

  );

}


export default PageAnalyticsChart;
