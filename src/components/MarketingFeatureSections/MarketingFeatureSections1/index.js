import React from 'react';

import { Grid, Container } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import illustration1 from '../../../assets/images/illustrations/pack2/financial_analyst.svg';
export default function LivePreviewExample() {
  return (
    <>
      <div className="feature-box py-3 py-xl-5">
        <Container className="py-3 py-xl-5">
          <Grid container spacing={6}>
            <Grid item xl={6}>
              <div className="py-0 pb-5 py-xl-5">
                <div className="pr-0 pr-xl-5">
                  <span className="display-1 mb-3 font-g text-first">
                  We are investors    </span>
                  <h1 className="display-3 mb-3 font-weight-bold font-h">
                  And we want the most <span className="text-first">efficient way</span> to access portfolios that suits us.
                  </h1>

                  <div className="text-second d-flex align-items-center mt-4">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-primary mr-2">
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-sm "
                        />
                      </div>
                      <span className="pt-1 font-h font-size-sm font-weight-bold ">View thematic portfolio that fits your interest</span>
                    </div>

                    <div className="text-second d-flex align-items-center mt-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-primary mr-2">
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-sm "
                        />
                      </div>
                      <span className="pt-1 font-h font-size-sm font-weight-bold ">Follow instruction on entry and exit with automated alerts</span>
                    </div>

                    <div className="text-second d-flex align-items-center mt-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-primary mr-2">
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-sm "
                        />
                      </div>
                      <span className="pt-1 font-h font-size-sm font-weight-bold ">Access historical strategy results with simulations</span>
                    </div>
               
                </div>
              </div>
            </Grid>
            <Grid item xl={6} className="d-none d-xl-flex align-items-center">
              <img alt="..." className="w-100" src={illustration1} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
