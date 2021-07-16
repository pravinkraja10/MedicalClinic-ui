import React from 'react';
import Services from '../../components/Overview/Overview4/services';
import Overview1 from '../../components/Overview/Overview1';
import Overview8 from '../../components/Overview/Overview8';

export default function Explore() {
  return (
    <>
      <Overview1 />
      <Services />
      <div className="mt-5">
        <Overview8 />
      </div>
    </>
  );
}
