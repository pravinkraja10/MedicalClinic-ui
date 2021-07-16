import React from 'react';

import { InputAdornment, TextField,Button } from '@material-ui/core';

import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
export default function LivePreviewExample() {
  return (
    <>

<div className='search-box'>
      <TextField
        variant="outlined"
        size="large"
        id="input-with-icon-textfield1"
        className="w-100 bg-white round"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchTwoToneIcon />
              <div className="" style={{marginLeft:'27vw'}}>
              <Button
                    size="small"
                    className="btn-neutral-primary bg-first text-white text-uppercase font-size-xs font-weight-bold">
                       <SearchTwoToneIcon />
                    Explore
                  </Button>
                  </div>
            </InputAdornment>
          )
        }}
      />
          </div>
    </>
  );
}
