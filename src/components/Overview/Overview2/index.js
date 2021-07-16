import React from 'react';
import { Grid } from '@material-ui/core';
import stock1 from '../../../assets/img1.png';
import stock2 from '../../../assets/img2.png';
import stock3 from '../../../assets/img3.png';
import stock4 from '../../../assets/img4.png';
import stock5 from '../../../assets/img5.png';
import stock6 from '../../../assets/img6.png';
import stock7 from '../../../assets/img7.png';
import stock8 from '../../../assets/img8.png';

export default function LivePreviewExample() {
  return (
    <>
      <Grid item xl={12} className="mt-5">
        <div className="bg-info">
          <Grid container spacing={0}>
            <Grid item md={3}>
              <div className="text-center">
                <div className="mt-2 line-height-sm">
                  <b className="font-size-lg text-white text-uppercase">
                    SPORTS
                    <br />
                    MEDICINE
                  </b>
                </div>
                <img src={stock1} className="card-img-top mt-2" alt="..." />
              </div>
            </Grid>
            <Grid item md={3}>
              <div className="text-center">
                <div className="mt-2 line-height-sm">
                  <b className="font-size-lg text-white text-uppercase">
                    Total ankle <br /> replacement
                  </b>
                </div>
                <img src={stock2} className="card-img-top mt-2" alt="..." />
              </div>
            </Grid>
            <Grid item md={3}>
              <div className="text-center">
                <div className="mt-2 line-height-sm">
                  <b className="font-size-lg text-white text-uppercase">
                    ankle
                    <br />
                    arthroscopy
                  </b>
                </div>
                <img src={stock3} className="card-img-top mt-2" alt="..." />
              </div>
            </Grid>
            <Grid item md={3}>
              <div className="text-center">
                <div className="mt-2 line-height-sm">
                  <b className="font-size-lg text-white text-uppercase">
                    Minimal invasive
                    <br />
                    Surgery
                  </b>
                </div>
                <img src={stock4} className="card-img-top mt-2" alt="..." />
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>

      <Grid item xl={12} className="mt-5">
        <div className="bg-info">
          <Grid container spacing={0}>
            <Grid item md={3}>
              <div className="text-center">
                <div className="mt-2 line-height-sm">
                  <b className="font-size-lg text-white text-uppercase">
                    Trauma and fracture <br />
                    care
                  </b>
                </div>
                <img src={stock5} className="card-img-top mt-2" alt="..." />
              </div>
            </Grid>
            <Grid item md={3}>
              <div className="text-center">
                <div className="mt-2 line-height-sm">
                  <b className="font-size-lg text-white text-uppercase">
                    club foot
                    <br />
                    deformity correction
                  </b>
                </div>
                <img src={stock6} className="card-img-top mt-2" alt="..." />
              </div>
            </Grid>
            <Grid item md={3}>
              <div className="text-center">
                <div className="mt-2 line-height-sm">
                  <b className="font-size-lg text-white text-uppercase">
                    limb deformity
                    <br />
                    correction
                  </b>
                </div>
                <img src={stock7} className="card-img-top mt-2" alt="..." />
              </div>
            </Grid>
            <Grid item md={3}>
              <div className="text-center">
                <div className="mt-2 line-height-sm">
                  <b className="font-size-lg text-white text-uppercase">
                    platelet rich
                    <br />
                    plasma INJECTION
                  </b>
                </div>
                <img src={stock8} className="card-img-top mt-2" alt="..." />
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
