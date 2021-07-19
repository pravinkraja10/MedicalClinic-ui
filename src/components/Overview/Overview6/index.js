import React from 'react';
import { Grid } from '@material-ui/core';

import logo1 from '../../../assets/img24.png';
import logo2 from '../../../assets/img13.png';
import logo3 from '../../../assets/img14.png';
import logo4 from '../../../assets/img15.png';
import logo5 from '../../../assets/img16.png';
import logo6 from '../../../assets/img17.png';
import logo7 from '../../../assets/img18.png';
import logo8 from '../../../assets/img19.png';
export default function LivePreviewExample() {
  return (
    <>
      <div className="text-center mt-5">
        <span className="text-info text-uppercase">we accept most of</span>
        <br />
        <span className="medihead linegap ">PPO and HMO plans</span>
        <Grid item xl={6} className="mx-auto px-3 my-4">
          <span className="font-size-sm">
            We may collect your insurance information prior to your first office
            visit.
            <br />
            If you have an insurance care plan in which Bay Area Foot and Ankle
            Medical Clinic is not contracted, you may still see
            <br />
            our providers by using your out of network benefits.
          </span>
        </Grid>
      </div>

      <div className="rounded">
        <div className="">
          <div className="d-flex align-items-center justify-content-center flex-wrap">
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded   bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logo2}
                  style={{ height: 100 }}
                  className="m-auto img-fluid text-white"
                  alt="..."
                />
              </div>
            </div>
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logo3}
                  style={{ height: 80 }}
                  className="m-auto img-fluid text-white"
                  alt="..."
                />
              </div>
            </div>
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logo4}
                  style={{ height: 70 }}
                  className="m-auto img-fluid text-white"
                  alt="..."
                />
              </div>
            </div>
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded  bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logo5}
                  style={{ height: 90 }}
                  className="m-auto img-fluid text-white"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded">
        <div className="">
          <div className="d-flex align-items-center justify-content-center flex-wrap">
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded   bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logo8}
                  style={{ height: 130 }}
                  className="m-auto img-fluid text-white"
                  alt="..."
                />
              </div>
            </div>
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logo1}
                  style={{ height: 120 }}
                  className="m-auto img-fluid text-white"
                  alt="..."
                />
              </div>
            </div>
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logo7}
                  style={{ height: 70 }}
                  className="m-auto img-fluid text-white"
                  alt="..."
                />
              </div>
            </div>
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded  bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logo6}
                  style={{ height: 90 }}
                  className="m-auto img-fluid text-white"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
