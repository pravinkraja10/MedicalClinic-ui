import React from 'react';
import Testimonials from './Testimonials';
import Overview1 from '../../components/Overview/Overview1';
import Overview8 from '../../components/Overview/Overview8';

export default function Explore() {
  return (
    <>
      <Overview1 />
      <Testimonials />
      <div className="mt-5">
        <Overview8 />
      </div>
    </>
  );
}
