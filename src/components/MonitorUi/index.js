
import React from 'react';
import { Grid } from '@material-ui/core';

import  ChartsApex1 from '../../components/ChartsApex/ChartsApex1';
import  BlocksChartsSmall1 from '../../components/BlocksChartsSmall/BlocksChartsSmall1';
import  BlocksSparklinesSmall3 from '../../components/BlocksSparklinesSmall/BlocksSparklinesSmall3';
export default function LivePreviewExample() {
  return (
    <>
     <Grid container spacing={0}>

     <Grid item md={3}>
  <div className="d-flex justify-content-center">
         <Grid  className="mt-5">
      <div className="">  
  <div className="frame-ui">
    <div className="camera-ui"></div>
    <div className="bg-second">
    <BlocksChartsSmall1 />
    </div>

    <div className="button-ui"></div>
  </div>
  <div className="base-ui"></div>
  <div className="foot-ui"></div>
 </div>
   


      <div className="mt-5">  
  <div className="frame-ui">
    <div className="camera-ui"></div>
    <div className="bg-second">
    <BlocksChartsSmall1 />
    </div>

    <div className="button-ui"></div>
  </div>
  <div className="base-ui"></div>
  <div className="foot-ui"></div>
 </div>
   
 </Grid>
 </div>
 </Grid>


        <Grid item md={6} className="   mt-5">
      <div className="mx-2">  
  <div className="frame-ui">
    <div className="camera-ui"></div>
    <div className="bg-second">
 
    <BlocksSparklinesSmall3 />
    </div>

    <div className="button-ui"></div>
  </div>
  <div className="base-ui"></div>
  <div className="foot-ui"></div>
 </div>
   
 </Grid>
 <Grid item md={3}>
  <div className="d-flex justify-content-center">
         <Grid  className="mt-5">
      <div className="">  
  <div className="frame-ui">
    <div className="camera-ui"></div>
    <div className="bg-second">
    <BlocksChartsSmall1 />
    </div>

    <div className="button-ui"></div>
  </div>
  <div className="base-ui"></div>
  <div className="foot-ui"></div>
 </div>
   


      <div className="mt-5">  
  <div className="frame-ui">
    <div className="camera-ui"></div>
    <div className="bg-second">
    <ChartsApex1 />
    </div>

    <div className="button-ui"></div>
  </div>
  <div className="base-ui"></div>
  <div className="foot-ui"></div>
 </div>
   
 </Grid>
 </div>
 </Grid>



 </Grid>
   
       
    
    </>
  );
}
