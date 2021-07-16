import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';

import CountUp from 'react-countup';
import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
 

 
  const chartsSmall1COptions = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      color: '#1bc943',
      curve: 'smooth',
      width: 2
    },
    colors: ['#1bc943'],
    fill: {
      color: '#1bc943',
      opacity: 0.3
    },
    legend: {
      show: false
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chartsSmall1CData = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6, 3.2]
    }
  ];
  return (
    <>
     
       
      
         
            <div className="card-tr-actions">
              <Button
                variant="text"
                className="p-0 d-30 border-0 btn-transition-none text-dark"
                disableRipple>
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </Button>
            </div>
            <div className="px-4 pt-4 pb-3">
              <div className="text-uppercase text-black">
              <b>portfolio performance</b>
              </div>
              <div className="d-flex align-items-center pt-3 font-weight-bold display-4">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-success mr-2 font-size-md"
                />
                $
                <span>
                  <CountUp
                    start={0}
                    end={1.54}
                    duration={6}
                    delay={2}
                    separator=""
                    decimals={3}
                    decimal=","
                  />
                </span>
                <span className="text-danger pl-2 font-size-md">- 20%</span>
              </div>
            </div>
            <div className="rounded-bottom overflow-hidden">
              <Chart
                options={chartsSmall1COptions}
                series={chartsSmall1CData}
                type="area"
                height={142}
              />
            </div>
          
     
  
    </>
  );
}
