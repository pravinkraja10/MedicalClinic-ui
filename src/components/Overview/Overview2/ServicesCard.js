import React from 'react';

import { Card } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

export default function ServiceCard({ title, description }) {
  return (
    <Card className="card-box-hover-rise card-box-hover rounded-lg text-center p-3 p-xl-4 d-block">
      <div className="d-130 object-skew hover-scale-sm icon-blob btn-icon text-success mx-auto">
        <svg
          className="blob-wrapper opacity-1"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(300,300)">
            <path
              d="M169,-144C206.7,-87.5,216.5,-18,196.9,35.7C177.3,89.4,128.3,127.1,75.2,150.7C22,174.2,-35.4,183.5,-79.7,163.1C-124,142.7,-155.1,92.6,-164.1,40.9C-173.1,-10.7,-160.1,-64,-129,-118.9C-98,-173.8,-49,-230.4,8.3,-237.1C65.7,-243.7,131.3,-200.4,169,-144Z"
              fill="currentColor"
            />
          </g>
        </svg>
        <div className="blob-icon-wrapper">
          <CheckIcon />
        </div>
      </div>
      <h5 className="font-weight-bold font-size-lg text-second mb-2">
        {title}
      </h5>
      <p className="mb-4 text-black-50 description-short">{description}</p>
    </Card>
  );
}
