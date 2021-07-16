import React from 'react';
import Image1 from '../../../assets/images/crypto_img/01.png';
import Image2 from '../../../assets/images/crypto_img/02.png';
import Image3 from '../../../assets/images/crypto_img/03.png';
import Image4 from '../../../assets/images/crypto_img/04.png';
import Image5 from '../../../assets/images/crypto_img/05.png';
import Image6 from '../../../assets/images/crypto_img/06.png';
import Image7 from '../../../assets/images/crypto_img/07.png';
import Image8 from '../../../assets/images/crypto_img/08.png';
import { Grid, Card, CardContent } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <>
      <div className="mb-spacing-6">
        <Grid container spacing={3}>
          <Grid item xl={3} md={6}>
            <a href="/explore">
            <Card className=" card-box bg-deep-blue">
              <CardContent>
              {/*   <h5 className="font-weight-bold ">ETH</h5>
                <h3 className="font-weight-bold" style={{lineHeight:"0.6"}}>$1,459.00</h3>
                <h6 className="font-weight-bold ">-5.38</h6> */}
                     <h4 className="font-weight-bold font-h text-center">Price Reversal Portfolio</h4>
                <div className="hover-scale-lg">
              <img
                alt="..."
                className=" d-block img-fluid"
                src={Image1}
              />
            </div>
              </CardContent>
            </Card>
            </a>
          </Grid>
          <Grid item xl={3} md={6}>
          <a href="/explore">
          <Card className=" card-box bg-sunny-morning">
              <CardContent>
              <h4 className="font-weight-bold font-h text-center">Social Media Portfolio</h4>
                <div className="hover-scale-lg">
              <img
                alt="..."
                className=" d-block img-fluid"
                src={Image2}
              />
            </div>
              </CardContent>
            </Card>
            </a>
          </Grid>
          <Grid item xl={3} md={6}>
          <a href="/explore">
          <Card className=" card-box" style={{background: 'linear-gradient(rgb(255, 242, 248) 0%, rgb(249, 203, 224) 100%)'}}>
              <CardContent>
              <h4 className="font-weight-bold font-h text-center">Most-Searched Portfolio</h4>
                <div className="hover-scale-lg">
              <img
                alt="..."
                className=" d-block img-fluid"
                src={Image3}
              />
            </div>
              </CardContent>
            </Card>
            </a>
          </Grid>
          <Grid item xl={3} md={6}>
          <a href="/explore">
          <Card className=" card-box" style={{background: 'linear-gradient(rgb(255, 246, 231) 0%, rgb(255, 237, 209) 100%)'}}>
              <CardContent>
                <h4 className="font-weight-bold font-h text-center">Bull “payment” portfolio</h4>
                <div className="hover-scale-lg">
              <img
                alt="..."
                className=" d-block img-fluid"
                src={Image4}
              />
            </div>
              </CardContent>
            </Card>
            </a>
          </Grid>
          <Grid item xl={3} md={6}>
          <a href="/explore">
          <Card className=" card-box bg-warm-flame">
          <CardContent style={{height:'17.5vw'}}>
                <h3 className="font-weight-bold text-light font-h">Bull “cyber security” portfolio</h3>
                <div className="hover-scale-lg">
              <img
                alt="..."
                className=" d-block img-fluid "
                src={Image6}
              />
            </div>
              </CardContent>
            </Card>
            </a>
          </Grid>
          <Grid item xl={3} md={6}>
          <a href="/explore">
          <Card className=" card-box" style={{background: 'rgb(152, 129, 238)'}}>
          <CardContent style={{height:'17.5vw'}}>
          <h3 className="font-weight-bold text-light font-h">Bull “ecommerce” Portfolio</h3>
                <div className="hover-scale-lg">
              <img
                alt="..."
                className=" d-block img-fluid"
                src={Image7}
              />
            </div>
              </CardContent>
            </Card>
            </a>
          </Grid>
          <Grid item xl={3} md={6}>
          <a href="/explore">
          <Card className=" card-box" style={{background: 'rgb(88, 216, 147)'}}>
          <CardContent style={{height:'17.5vw'}}>
          <h3 className="font-weight-bold text-light font-h">Most-Volatile Portfolio</h3>
                <div className="hover-scale-lg">
              <img
                alt="..."
                className=" d-block img-fluid"
                src={Image8}
              />
            </div>
              </CardContent>
            </Card>
            </a>
          </Grid>
          <Grid item xl={3} md={6}>
          <a href="/explore">
          <Card className=" card-box" style={{    background: 'rgb(255, 239, 175)'}}>
              <CardContent style={{height:'17.5vw'}}>
              <h3 className="font-weight-bold  font-h">Momentum Portfolio</h3>
                <div className="hover-scale-lg">
              <img
                alt="..."
                className=" img-fluid"
                src={Image5}
              />
            </div>
              </CardContent>
            </Card>
            </a>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
