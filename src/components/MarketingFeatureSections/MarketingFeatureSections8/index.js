import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid,Button,Card } from '@material-ui/core';



export default function LivePreviewExample() {
  return (
    <>
          <Card className="rounded card-box-hover-rise bg-first mb-spacing-6-x2 mt-5">
      <Grid container spacing={0} className="py-5">
        <Grid
          item
          xl={12}
          className="hero-wrapper bg-composed-wrapper text-white">

            <div className="p-0 p-lg-4">
         <h1 className="display-3 font-g font-weight-bold mb-3 text-center">
         We encourage and welcome our community <br /> to suggest portfolio themes and strategies.
              </h1>
              </div>
              <h5 className=" font-g font-weight-bold mt-4 text-center">
              Send us your portfolio and idea today and get featured!  </h5>

              <Button
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="rounded-lg text-nowrap font-size-lg shadow-second-sm font-weight-bold mt-4 text-first font-h"
              style={{background: 'white', width:'11vw', height:'3vw'}}>
              New Porfolio Idea
            </Button>

           
           {/*    <Grid item lg={10} xl={9} className="p-0 mx-auto">
              <span className='font-size-xl'>Help</span>
              <div className="d-flex align-items-center mb-3 mt-2">
                    <span className="pt-1 font-weight-bold">300+ components available</span>
                    <div className="d-30 rounded-pill btn-icon bg-neutral-first" style={{marginLeft:'7vw'}}>
                      <FontAwesomeIcon icon={['fa', 'chevron-right']} />
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3 mt-2">
                    <span className="pt-1 font-weight-bold">300+ components available</span>
                    <div className="d-30 rounded-pill btn-icon bg-neutral-first" style={{marginLeft:'7vw'}}>
                      <FontAwesomeIcon icon={['fa', 'chevron-right']} />
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3 mt-2">
                    <span className="pt-1 font-weight-bold">300+ components available</span>
                    <div className="d-30 rounded-pill btn-icon bg-neutral-first" style={{marginLeft:'7vw'}}>
                      <FontAwesomeIcon icon={['fa', 'chevron-right']} />
                    </div>
                  </div>
              </Grid> */}
          
        </Grid>
      {/*   <Grid item xl={6} className="bg-white">
          <div className="p-4">
            <div className="p-0 p-lg-4">
              <h1 className="display-4 font-weight-bold mb-3">
                Bamburgh React Admin Dashboard with Material-UI PRO
              </h1>
              <p className="font-size-lg text-black-50">
                Premium admin template powered by the most popular UI components
                framework available for React: Material-UI. Features hundreds of
                examples making web development fast and easy. Start from one of
                the individual apps included or from the general dashboard and
                build beautiful scalable applications and presentation websites.
              </p>
              <Grid container spacing={6} className="text-first mt-4">
                <Grid item sm={6}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                      <FontAwesomeIcon icon={['fas', 'check']} />
                    </div>
                    <span className="pt-1">300+ components available</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                      <FontAwesomeIcon icon={['fas', 'check']} />
                    </div>
                    <span className="pt-1">UI Kit included</span>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                      <FontAwesomeIcon icon={['fas', 'check']} />
                    </div>
                    <span className="pt-1">Unlimited custom options</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                      <FontAwesomeIcon icon={['fas', 'check']} />
                    </div>
                    <span className="pt-1">Multiple applications</span>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid> */}

      </Grid>
      </Card>
    </>
  );
}
