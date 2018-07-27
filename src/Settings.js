/* eslint-disable */

import React from 'react';
import './Settings.css';


const Settings = (props) => (
    <div className="Settings-container">
      <fieldset>
    <legend>Choose your sales metrics settings!</legend>

    <div>
        <input type="checkbox" id="calls" name="feature"
               value="scales" checked />
        <label for="scales">Calls Completed</label>
    </div>

    <div>
        <input type="checkbox" id="DM_name" name="feature"
               value="claws" />
        <label for="claws">Decision Maker Name</label>
    </div>

    <div>
        <input type="checkbox" id="DM_email" name="feature"
               value="claws" />
        <label for="claws">DM Email Address</label>
    </div>

     <div>
        <input type="checkbox" id="meetings" name="feature"
               value="horns" />
        <label for="horns">Meetings Scheduled</label>
    </div>

     <div>
        <input type="checkbox" id="proposals" name="feature"
               value="horns" />
        <label for="horns">Proposals Sent</label>
    </div>

    <div>
        <input type="checkbox" id="Sales" name="feature"
               value="claws" />
        <label for="claws">Sales Completed</label>
    </div>

    <div>
        <input type="checkbox" id="social" name="feature"
               value="claws" />
        <label for="claws">Social Links</label>
    </div>

    <div>
        <input type="checkbox" id="other" name="feature"
               value="claws" />
        <label for="claws">Other Success</label>
    </div>

    <div>
        <input className="rename" id="custom" placeholder="(optional) Rename 'Other Success' metrics" />
    </div>
</fieldset>
<button className="TSF-button">Save Settings</button>
    </div>
)

export default Settings;