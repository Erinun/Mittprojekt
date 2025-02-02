import React from 'react';
import OrgChart from './OrgChart';

function OrgCharts() {
  const groups = [
    "Paketgruppen",
    "Chefsgruppen",
    "Grunden",
    "Samrek förskola",
    "Samrek skola",
    "Employer Branding"
  ];

  return (
    <div>
      {groups.map((group, index) => (
        <OrgChart key={index} title={group} />
      ))}
    </div>
  );
}

export default OrgCharts;
