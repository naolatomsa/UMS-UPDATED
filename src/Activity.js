import React from 'react';
// import './adminDashbord.css';
import './Activity.css'

function View() {

  return (

    <div className='activitybox'> 
      <table class="responsivetable activitytable">
        <thead>
          <tr class="Date">
            <th class="col1">Date</th>
            <th class="col2">Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr class="Activity">
            <td class="col1">42235</td>
            <td class="col2">John Doe</td>
          </tr>
          <tr class="Activity">
            <td class="col1">42235</td>
            <td class="col2">John Doe</td>
          </tr>
          <tr class="Activity">
            <td class="col1">42235</td>
            <td class="col2">John Doe</td>
          </tr>
          <tr class="Activity">
            <td class="col1">42235</td>
            <td class="col2">John Doe</td>
          </tr>
          <tr class="Activity">
            <td class="col1">42235</td>
            <td class="col2">John Doe</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default View;
