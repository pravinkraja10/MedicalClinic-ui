import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import stock1 from '../../../assets/img9.png';
import stock2 from '../../../assets/img25.png';
import stock3 from '../../../assets/img26.png';
import stock4 from '../../../assets/img27.png';
import stock5 from '../../../assets/img28.png';
import stock6 from '../../../assets/img29.png';
import stock7 from '../../../assets/img30.png';
import stock8 from '../../../assets/img31.png';
import stock9 from '../../../assets/img32.png';

export default function LivePreviewExample() {
  const [service, setService] = useState(1);
  const [serviceImg, setServiceImg] = useState(stock1);
  const changeService = (s, img) => {
    setService(s);
    setServiceImg(img);
  };
  return (
    <>
      <div className="text-center mt-5">
        <span className="text-info text-uppercase">What we offer</span>
        <br />
        <span className="medihead linegap">Services</span>
      </div>

      <Grid item md={6} className="mx-auto mt-5">
        <div className="mx-3">
          <div className="d-flex justify-content-center">
            <div className="servicebox">
              <a
                href="#/"
                onClick={() => changeService(1, stock1)}
                className="card bg-box  card-box-hover-rise-alt">
                <div
                  className={`bg-composed-wrapper card ${
                    service !== 1 && 'bg-medi'
                  } border-0`}
                  style={{ maxHeight: '132px' }}>
                  <img
                    src={stock1}
                    className="card-img-top bg-box"
                    style={{
                      position: 'absolute',
                      opacity: service !== 1 ? 0.2 : 1
                    }}
                    alt="..."
                  />
                  {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                  <div className="bg-composed-wrapper--content text-second my-5 ">
                    <div>
                      <div className="text-center font-weight-bold text-uppercase">
                        {service !== 1 && 'sports injuries'}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="servicebox">
              <a
                href="#/"
                onClick={() => changeService(2, stock2)}
                className="card bg-box  card-box-hover-rise-alt">
                <div
                  className={`bg-composed-wrapper card ${
                    service !== 2 && 'bg-medi'
                  } border-0`}
                  style={{ maxHeight: '132px' }}>
                  <img
                    src={stock2}
                    className="card-img-top bg-box"
                    style={{
                      position: 'absolute',
                      opacity: service !== 2 ? 0.2 : 1
                    }}
                    alt="..."
                  />
                  {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                  <div className="bg-composed-wrapper--content text-second my-5 py-2">
                    <div>
                      <div className="text-center font-weight-bold text-uppercase">
                        {service !== 2 && 'Trauma'}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="servicebox">
              <a
                href="#/"
                onClick={() => changeService(3, stock3)}
                className="card bg-box  card-box-hover-rise-alt">
                <div
                  className={`bg-composed-wrapper card ${
                    service !== 3 && 'bg-medi'
                  } border-0`}
                  style={{ maxHeight: '132px' }}>
                  <img
                    src={stock3}
                    className="card-img-top bg-box"
                    style={{
                      position: 'absolute',
                      opacity: service !== 3 ? 0.2 : 1
                    }}
                    alt="..."
                  />
                  {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                  <div className="bg-composed-wrapper--content text-second my-5 py-2">
                    <div>
                      <div className="text-center font-weight-bold text-uppercase">
                        {service !== 3 && 'Total Ankle Replacement'}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="servicebox">
              <a
                href="#/"
                onClick={() => changeService(4, stock4)}
                className="card bg-box  card-box-hover-rise-alt">
                <div
                  className={`bg-composed-wrapper card ${
                    service !== 4 && 'bg-medi'
                  } border-0`}
                  style={{ maxHeight: '132px' }}>
                  <img
                    src={stock4}
                    className="card-img-top bg-box"
                    style={{
                      position: 'absolute',
                      opacity: service !== 4 ? 0.2 : 1
                    }}
                    alt="..."
                  />
                  {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                  <div className="bg-composed-wrapper--content text-second my-5 py-2">
                    <div>
                      <div className="text-center font-weight-bold text-uppercase">
                        {service !== 4 && 'Arthroscopy'}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="servicebox">
              <a
                href="#/"
                onClick={() => changeService(5, stock5)}
                className="card bg-box  card-box-hover-rise-alt">
                <div
                  className={`bg-composed-wrapper card ${
                    service !== 5 && 'bg-medi'
                  } border-0`}
                  style={{ maxHeight: '132px' }}>
                  <img
                    src={stock1}
                    className="card-img-top bg-box"
                    style={{
                      position: 'absolute',
                      opacity: service !== 5 ? 0.2 : 1
                    }}
                    alt="..."
                  />
                  {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                  <div className="bg-composed-wrapper--content text-second my-5 ">
                    <div>
                      <div className="text-center font-size-sm font-weight-bold text-uppercase">
                        {service !== 5 && 'Ligaments Reconstruction'}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="servicebox">
              <a
                href="#/"
                onClick={() => changeService(6, stock6)}
                className="card bg-box  card-box-hover-rise-alt">
                <div
                  className={`bg-composed-wrapper card ${
                    service !== 6 && 'bg-medi'
                  } border-0`}
                  style={{ maxHeight: '132px' }}>
                  <img
                    src={stock6}
                    className="card-img-top bg-box"
                    style={{
                      position: 'absolute',
                      opacity: service !== 6 ? 0.2 : 1
                    }}
                    alt="..."
                  />
                  {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                  <div className="bg-composed-wrapper--content text-second my-5">
                    <div>
                      <div className="text-center font-size-sm font-weight-bold text-uppercase">
                        {service !== 6 &&
                          'Reconstructive Foot and Ankle Surgery'}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="servicebox">
              <a
                href="#/"
                onClick={() => changeService(7, stock7)}
                className="card bg-box  card-box-hover-rise-alt">
                <div
                  className={`bg-composed-wrapper card ${
                    service !== 7 && 'bg-medi'
                  } border-0`}
                  style={{ maxHeight: '132px' }}>
                  <img
                    src={stock7}
                    className="card-img-top bg-box"
                    style={{
                      position: 'absolute',
                      opacity: service !== 7 ? 0.2 : 1
                    }}
                    alt="..."
                  />
                  {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                  <div className="bg-composed-wrapper--content text-second my-5 py-2">
                    <div>
                      <div className="text-center font-weight-bold text-uppercase">
                        {service !== 7 && 'Orthotics'}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="servicebox">
              <a
                href="#/"
                onClick={() => changeService(8, stock8)}
                className="card bg-box  card-box-hover-rise-alt">
                <div
                  className={`bg-composed-wrapper card ${
                    service !== 8 && 'bg-medi'
                  } border-0`}
                  style={{ maxHeight: '132px' }}>
                  <img
                    src={stock8}
                    className="card-img-top bg-box"
                    style={{
                      position: 'absolute',
                      opacity: service !== 8 ? 0.2 : 1
                    }}
                    alt="..."
                  />
                  {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                  <div className="bg-composed-wrapper--content text-second my-5 py-2">
                    <div>
                      <div className="text-center font-weight-bold text-uppercase">
                        {service !== 8 && 'PRP'}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="servicebox">
              <a
                href="#/"
                onClick={() => changeService(9, stock9)}
                className="card bg-box  card-box-hover-rise-alt">
                <div
                  className={`bg-composed-wrapper card ${
                    service !== 9 && 'bg-medi'
                  } border-0`}
                  style={{ maxHeight: '132px' }}>
                  <img
                    src={stock9}
                    className="card-img-top bg-box"
                    style={{
                      position: 'absolute',
                      opacity: service !== 9 ? 0.2 : 1
                    }}
                    alt="..."
                  />
                  {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                  <div className="bg-composed-wrapper--content text-second my-5 py-2">
                    <div>
                      <div className="text-center font-weight-bold text-uppercase">
                        {service !== 9 && 'Bunions'}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="servicebox">
              <a
                href="#/"
                onClick={() => changeService(9, stock9)}
                className="card bg-box  card-box-hover-rise-alt">
                <div
                  className={`bg-composed-wrapper card ${
                    service !== 9 && 'bg-medi'
                  } border-0`}
                  style={{ maxHeight: '132px' }}>
                  <img
                    src={stock9}
                    className="card-img-top bg-box"
                    style={{
                      position: 'absolute',
                      opacity: service !== 9 ? 0.2 : 1
                    }}
                    alt="..."
                  />
                  {/* <div className="bg-composed-img-5 bg-composed-wrapper--image" /> */}
                  <div className="bg-composed-wrapper--content text-second my-5 py-2">
                    <div>
                      <div className="text-center font-weight-bold text-uppercase">
                        {service !== 9 && 'Bunions'}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Grid>

      <Grid item xl={12} className="mt-5">
        <div className="px-5">
          <Grid container spacing={0}>
            <Grid item md={8}>
              <div className="mx-5 px-5">
                <Grid item xl={10} md={6}>
                  <span className="meditxt">Sports Injuries</span>
                  <div className="mt-5">
                    <p>
                      Donec a dictum mi, quis sagittis mauris. Nunc in ligula ut
                      sem congue dictum eu id velit. Donec et pulvinar ante.
                      Pellentesque elit nunc, hendrerit eu ligula at,
                      ullamcorper consectetur lacus. Curabitur a luctus lorem,
                      quis ullamcorper ante. Integer sodales diam sit amet risus
                      vulputate, non mollis augue sollicitudin. Nulla nisi nibh,
                      molestie eu dui non, pulvinar hendrerit odio. Aliquam erat
                      volutpat. Donec porttitor non ante non luctus. Donec non
                      magna semper, hendrerit urna id, bibendum sem. Aliquam
                      pellentesque mauris quam, ac interdum neque rhoncus vel.
                      Morbi fringilla at lacus et efficitur.
                      <br />
                      <br />
                      Aenean porttitor odio at imperdiet elementum. Mauris
                      consequat dolor ac massa pharetra pretium. Cras pretium
                      luctus lectus nec vulputate. Duis auctor tempus semper.
                      Aenean urna lacus, luctus nec suscipit ut, ultricies a
                      eros. Suspendisse scelerisque nulla vel erat sodales, quis
                      accumsan eros sagittis. Phasellus felis nunc, pellentesque
                      non rutrum non, auctor nec nibh. In vel sodales felis.
                      Proin suscipit fermentum neque, rutrum gravida metus
                      elementum et. Aliquam consectetur ex et arcu rhoncus
                      rhoncus.
                    </p>
                  </div>
                </Grid>
              </div>
            </Grid>
            <Grid item md={4}>
              {
                <>
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="card-img-wrapper rounded card-box-hover-rise-alt">
                    <img
                      src={serviceImg}
                      className="card-img-top rounded"
                      alt="..."
                    />
                  </a>
                </>
              }
            </Grid>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
