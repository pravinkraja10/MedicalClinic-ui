import React from 'react';

import { Grid, Card,} from '@material-ui/core';

import GaugeChart from 'react-gauge-chart';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';

export default function LivePreviewExample() {


  return (
    <>
   

        
       
                    
                    <Grid item md={12}>
                      <Card className="bg-second card-box-hover-rise card-box-hover rounded-lg text-center p-3 p-xl-4 d-block">
                        <div className="d-100 object-skew hover-scale-sm icon-blob btn-icon text-warning mx-auto">
                          <svg
                            className="blob-wrapper opacity-1"
                            viewBox="0 0 600 600"
                            xmlns="http://www.w3.org/2000/svg">
                            <g transform="translate(300,300)">
                              <path
                                d="M155,-128.8C192.2,-77,207.7,-13,197.7,50.9C187.7,114.8,152.2,178.6,96.7,208.2C41.1,237.9,-34.6,233.4,-102.6,204C-170.6,174.7,-231.1,120.6,-246.7,55.4C-262.4,-9.9,-233.2,-86.3,-184.6,-140.7C-136,-195.2,-68,-227.6,-4.6,-223.9C58.9,-220.3,117.8,-180.6,155,-128.8Z"
                                fill="currentColor"
                              />
                            </g>
                          </svg>
                          <div className="blob-icon-wrapper">
                            <SettingsTwoToneIcon />
                          </div>
                        </div>
                        <h5 className="font-weight-bold font-size-lg text-white mb-2">
                          Berlin Data Center
                        </h5>
                        <p className="mb-4 text-white-50">
                          View any of the 5+ live previews we&#39;ve set up to
                          learn why this dashboard template is the last one
                          you&#39;ll ever need!
                        </p>
                        <GaugeChart
                          id="chartsGauges1B"
                          nrOfLevels={24}
                          colors={['rgba(0,2,255,0.6)', 'rgba(255,11,244,0.8)']}
                          arcWidth={0.3}
                          percent={0.43}
                        />
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="transition-base rounded-pill py-2 px-4 text-capitalize font-size-sm bg-white-10 text-white mt-3 d-inline-flex">
                          <span>View Dashboard</span>
                        </a>
                      </Card>
                    </Grid>
               

 
    </>
  );
}
