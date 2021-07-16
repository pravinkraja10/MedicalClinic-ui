import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Container,Button } from '@material-ui/core';

import illustration1 from '../../../assets/images/illustrations/pack2/online_shopping.svg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="p-4 rounded">
        <Container>  
                <div  className="d-flex align-items-center">
                <img src={illustration1} className="w-50 center " alt="..." />
                </div>

                    <div className="text-center  text-second font-weight-light font-g display-4" >
                  <span>
                  Multi strategy investment approach has proven to be the best way to navigate through various market conditions.
                  With <span className="text-first font-weight-bold">EZportfolyo,</span> you will have your ideal portfolio and <span className=" text-uppercase font-weight-bold">ready to invest in minutes.</span> 
                  </span>
                  </div>
                  <Grid item lg={12} className="d-flex font-weight-bold text-second mt-4" style={{marginLeft:'7vw'}}>
                    <div className=" d-flex align-items-center mb-3 mr-2">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-primary mr-2">
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-sm"
                        />
                      </div>
                      <span className="pt-1">No account required</span>
                    </div>
                    <div className=" d-flex align-items-center mb-3 mr-2">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-primary mr-2">
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-sm"
                        />
                      </div>
                      <span className="pt-1">No trading limits</span>
                    </div>
                
            
                    <div className="d-flex align-items-center mb-3 mr-2">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-primary mr-2">
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-sm"
                        />
                      </div>
                      <span className="pt-1">No deposit or withdrawal fees</span>
                    </div>
                    <div className="text-primary d-flex align-items-center mb-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-primary mr-2">
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-sm"
                        />
                      </div>
                      <span className="pt-1">Multiple Apps</span>
                    </div>
            
                </Grid>
           
                <span className="d-none d-lg-block text-center mt-4">
            <Button
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="rounded-lg text-nowrap font-size-lg bg-first shadow-second-sm font-weight-bold text-light font-h"
              style={{ width:'11vw', height:'3vw'}}>
              Start Trading Now
            </Button>
          </span>
          
      
        </Container>
      </div>
    </>
  );
}
