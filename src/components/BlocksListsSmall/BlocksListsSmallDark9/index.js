import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, List, ListItem, Tooltip } from '@material-ui/core';

import CountUp from 'react-countup';

import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';
import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';

export default function LivePreviewExample() {
  return (
    <>
   <div className="bg-second">
        <div className="bg-second d-flex align-items-center justify-content-between card-header-alt p-4">
          <div>
            <h6 className="font-weight-bold font-size-lg mb-1 text-black">
              My Portfolio
            </h6>
            <p className="text-white-50 mb-0">Status of your crypto assets.</p>
          </div>
          <div className="d-flex align-items-center">
            <Tooltip title="View stats for last week" arrow placement="top">
              <Button className="btn-link mx-1 px-1 py-2 font-weight-bold text-info">
                <span>1W</span>
              </Button>
            </Tooltip>
            <Tooltip title="View stats for last month" arrow placement="top">
              <Button className="btn-link mx-1 px-1 py-2 font-weight-bold text-white opacity-5">
                <span>1M</span>
              </Button>
            </Tooltip>
            <Tooltip title="View stats for last year" arrow placement="top">
              <Button className="btn-link ml-1 px-1 py-2 font-weight-bold text-white opacity-5">
                <span>1Y</span>
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="divider opacity-6" />

        <h3 className="display-3 mt-5 mb-0 text-center font-weight-bold">
          <small className=" text-white opacity-6">$</small>
          <span className="pl-1 text-white opacity-6">
            <CountUp
              start={0}
              end={458.695}
              duration={6}
              separator=""
              delay={1}
              decimals={3}
              decimal=","
              prefix=""
              suffix=""
            />
            <small>
              <sup>.65</sup>
            </small>
          </span>
        </h3>
        <small className="d-block font-weight-bold text-center text-muted text-uppercase">
          Total balance
        </small>
        <div className="divider opacity-6 mt-5" />
     
      
    
            <List component="div" className="">
              <ListItem className="d-flex justify-content-between align-items-center py-3">
                <div className="d-flex align-items-center mr-4">
                  <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-warning">
                    <FontAwesomeIcon
                      icon={['fab', 'bitcoin']}
                      className="font-size-lg"
                    />
                  </div>
                  <div>
                    <div className="font-weight-bold text-white opacity-6">BTC</div>
                    <span className="text-warning d-block ">Bitcoin</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="text-right mr-3">
                    <div className="font-weight-bold text-success font-size-lg">
                      2.4895 BTC
                    </div>
                    <div className=" text-white opacity-6">
                      $16,497
                    </div>
                  </div>
                  <div className="font-size-lg text-success">
                    <TrendingUpTwoToneIcon />
                  </div>
                </div>
              </ListItem>
              <ListItem className="d-flex justify-content-between align-items-center py-3">
                <div className="d-flex align-items-center mr-4">
                  <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-first">
                    <FontAwesomeIcon
                      icon={['fab', 'ethereum']}
                      className="font-size-lg"
                    />
                  </div>
                  <div>
                    <div className="font-weight-bold text-white opacity-6">ETH</div>
                    <span className="text-first d-block">Ethereum</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="text-right mr-3">
                    <div className="font-weight-bold text-success font-size-lg">
                      54.12387 ETH
                    </div>
                    <div className="font-weight-bold text-black text-white opacity-6">
                      $6,398
                    </div>
                  </div>
                  <div className="font-size-lg text-success">
                    <TrendingUpTwoToneIcon />
                  </div>
                </div>
              </ListItem>
              <ListItem className="d-flex justify-content-between align-items-center py-3">
                <div className="d-flex align-items-center mr-4">
                  <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-success">
                    <FontAwesomeIcon
                      icon={['fas', 'dollar-sign']}
                      className="font-size-lg"
                    />
                  </div>
                  <div>
                    <div className="font-weight-bold text-white opacity-6">USD</div>
                    <span className="text-success d-block">Dollar</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="text-right mr-3">
                    <div className="font-weight-bold text-danger font-size-lg">
                      76,358 USD
                    </div>
                    <div className="font-weight-bold text-black text-white opacity-6">
                      $1,398
                    </div>
                  </div>
                  <div className="font-size-lg text-danger">
                    <TrendingDownTwoToneIcon />
                  </div>
                </div>
              </ListItem>
              <ListItem className="d-flex justify-content-between align-items-center py-3">
                <div className="d-flex align-items-center mr-4">
                  <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-warning">
                    <FontAwesomeIcon
                      icon={['fab', 'bitcoin']}
                      className="font-size-lg"
                    />
                  </div>
                  <div>
                    <div className="font-weight-bold text-white opacity-6">BTC</div>
                    <span className="text-warning d-block">Bitcoin</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="text-right mr-3">
                    <div className="font-weight-bold text-success font-size-lg">
                      2.4895 BTC
                    </div>
                    <div className="font-weight-bold text-white opacity-6">
                      $16,497
                    </div>
                  </div>
                  <div className="font-size-lg text-success">
                    <TrendingUpTwoToneIcon />
                  </div>
                </div>
              </ListItem>
              <ListItem className="d-flex justify-content-between align-items-center py-3">
                <div className="d-flex align-items-center mr-4">
                  <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-success">
                    <FontAwesomeIcon
                      icon={['fas', 'dollar-sign']}
                      className="font-size-lg"
                    />
                  </div>
                  <div>
                    <div className="font-weight-bold text-white opacity-6">USD</div>
                    <span className="text-success d-block">Dollar</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="text-right mr-3">
                    <div className="font-weight-bold text-danger font-size-lg">
                      76,358 USD
                    </div>
                    <div className="font-weight-bold text-black text-white opacity-6">
                      $1,398
                    </div>
                  </div>
                  <div className="font-size-lg text-danger">
                    <TrendingDownTwoToneIcon />
                  </div>
                </div>
              </ListItem>
              <ListItem className="d-flex justify-content-between align-items-center py-3">
                <div className="d-flex align-items-center mr-4">
                  <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-first">
                    <FontAwesomeIcon
                      icon={['fab', 'ethereum']}
                      className="font-size-lg"
                    />
                  </div>
                  <div>
                    <div className="font-weight-bold text-white opacity-6">ETH</div>
                    <span className="text-first d-block">Ethereum</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="text-right mr-3">
                    <div className="font-weight-bold text-success font-size-lg">
                      54.12387 ETH
                    </div>
                    <div className="font-weight-bold text-black text-white opacity-6">
                      $6,398
                    </div>
                  </div>
                  <div className="font-size-lg text-success">
                    <TrendingUpTwoToneIcon />
                  </div>
                </div>
              </ListItem>
              <ListItem className="d-flex justify-content-between align-items-center py-3">
                <div className="d-flex align-items-center mr-4">
                  <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-warning">
                    <FontAwesomeIcon
                      icon={['fab', 'bitcoin']}
                      className="font-size-lg"
                    />
                  </div>
                  <div>
                    <div className="font-weight-bold text-white opacity-6">BTC</div>
                    <span className="text-warning d-block ">Bitcoin</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="text-right mr-3">
                    <div className="font-weight-bold text-success font-size-lg">
                      2.4895 BTC
                    </div>
                    <div className=" text-white opacity-6">
                      $16,497
                    </div>
                  </div>
                  <div className="font-size-lg text-success">
                    <TrendingUpTwoToneIcon />
                  </div>
                </div>
              </ListItem>
              <ListItem className="d-flex justify-content-between align-items-center py-3">
                <div className="d-flex align-items-center mr-4">
                  <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-first">
                    <FontAwesomeIcon
                      icon={['fab', 'ethereum']}
                      className="font-size-lg"
                    />
                  </div>
                  <div>
                    <div className="font-weight-bold text-white opacity-6">ETH</div>
                    <span className="text-first d-block">Ethereum</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="text-right mr-3">
                    <div className="font-weight-bold text-danger font-size-lg">
                      54.12387 ETH
                    </div>
                    <div className="font-weight-bold text-black text-white opacity-6">
                      $6,398
                    </div>
                  </div>
                  <div className="font-size-lg text-danger">
                  <TrendingDownTwoToneIcon />
                  </div>
                </div>
              </ListItem>
              <ListItem className="d-flex justify-content-between align-items-center py-3">
                <div className="d-flex align-items-center mr-4">
                  <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-first">
                    <FontAwesomeIcon
                      icon={['fab', 'ethereum']}
                      className="font-size-lg"
                    />
                  </div>
                  <div>
                    <div className="font-weight-bold text-white opacity-6">ETH</div>
                    <span className="text-first d-block">Ethereum</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="text-right mr-3">
                    <div className="font-weight-bold text-success font-size-lg">
                      54.12387 ETH
                    </div>
                    <div className="font-weight-bold text-black text-white opacity-6">
                      $6,398
                    </div>
                  </div>
                  <div className="font-size-lg text-success">
                    <TrendingUpTwoToneIcon />
                  </div>
                </div>
              </ListItem>
           
            </List>
        
      </div>
    </>
  );
}
