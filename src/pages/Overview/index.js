import React from 'react';

import Overview1 from '../../components/Overview/Overview1';
import Overview2 from '../../components/Overview/Overview2';
import Overview3 from '../../components/Overview/Overview3';
import Overview4 from '../../components/Overview/Overview4';
import Overview6 from '../../components/Overview/Overview6';
import Overview7 from '../../components/Overview/Overview7';
import Overview8 from '../../components/Overview/Overview8';
import Overview5 from '../../components/Overview/Overview5';
export default function Overview() {
  return (
    <>
      <Overview1 />
      <Overview3 />
      <Overview2 />
      <div className="pb-5">
        <Overview4 />
      </div>

      <Overview5 />
      <Overview6 />
      <Overview7 />
      <Overview8 />
    </>
  );
}
