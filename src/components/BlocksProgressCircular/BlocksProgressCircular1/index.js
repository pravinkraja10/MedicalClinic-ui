import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Box, Card, Button } from '@material-ui/core';

import {
  CircularProgressbar,

} from 'react-circular-progressbar';

export default function LivePreviewExample() {
  return (
    <>
      <div className="mb-spacing-6">
        <Grid container spacing={4}>
          <Grid item xl={6} className="d-flex">
            <Card className="card-box w-100 d-flex align-items-center">
              <Box className="card-tr-actions">
                <Button
                  variant="text"
                  className="p-0 d-30 border-0 btn-transition-none text-dark"
                  disableRipple>
                  <FontAwesomeIcon
                    icon={['fas', 'ellipsis-v']}
                    className="font-size-lg"
                  />
                </Button>
              </Box>
              <div className="d-flex flex-column flex-grow-1 justify-content-center w-100">
                <div className="card-header-alt d-flex justify-content-center px-4 pt-4 pb-2">
                  <h6 className="font-weight-bold font-size-xl mb-1 text-black">
                 Invest
                  </h6>
                </div>
                <div className="mx-auto">
                  <CircularProgressbar
                    value={56}
                    text={56 + '%'}
                    strokeWidth={8}
                    className="m-3 circular-progress-xxl circular-progress-primary"
                  />
                </div>
                <div className="px-4 pb-4 pt-2">
                  <div className="d-flex text-uppercase justify-content-center text-black-50 font-size-xs font-weight-bold mb-4">
                    <div className="d-flex align-items-center">
                      <div className="badge badge-light badge-circle mx-2">
                        available
                      </div>
                      <span className="d-20 w-auto">Available</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="badge badge-danger badge-circle mx-2">
                        total
                      </div>
                      <span className="d-20 w-auto">Total</span>
                    </div>
                  </div>
                  <Button
                    fullWidth
                    className="btn-neutral-dark font-weight-bold text-uppercase font-size-sm hover-scale-sm">
                    Invest
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
         
          <Grid item xl={6} className="d-flex">
            <Card className="card-box w-100 d-flex align-items-center">
              <Box className="card-tr-actions">
                <Button
                  variant="text"
                  className="p-0 d-30 border-0 btn-transition-none text-dark"
                  disableRipple>
                  <FontAwesomeIcon
                    icon={['fas', 'ellipsis-v']}
                    className="font-size-lg"
                  />
                </Button>
              </Box>
              <div className="d-flex flex-column flex-grow-1 justify-content-center w-100">
                <div className="card-header-alt d-flex justify-content-center px-4 pt-4 pb-2">
                  <h6 className="font-weight-bold font-size-xl mb-1 text-black">
                  Historical Performance
                  </h6>
                </div>
                <div className="mx-auto">
                  <CircularProgressbar
                    value={56}
                    text={56 + '%'}
                    strokeWidth={8}
                    className="m-3 circular-progress-xxl circular-progress-primary"
                  />
                </div>
                <div className="px-4 pb-4 pt-2">
                  <div className="d-flex text-uppercase justify-content-center text-black-50 font-size-xs font-weight-bold mb-4">
                    <div className="d-flex align-items-center">
                      <div className="badge badge-success badge-circle mx-2">
                        available
                      </div>
                      <span className="d-20 w-auto">Available</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="badge badge-danger badge-circle mx-2">
                        total
                      </div>
                      <span className="d-20 w-auto">Total</span>
                    </div>
                  </div>
                  <Button
                  href="/performance"
                    fullWidth
                    className="btn-neutral-dark font-weight-bold text-uppercase font-size-sm hover-scale-sm">
                   Performance
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
         
        </Grid>
      </div>
    </>
  );
}
