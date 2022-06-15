import React from "react";

import Emoji_Engine from "./emoji_engine";


const Subs = () => {

  return (
    <div>
      <div className="flex flex-wrap items-center justify-around sm:max-w-7xl sm:py-6">
        <div 
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h4>Ruby</h4>
            <h3 className="text-2xl font-bold">$400/month</h3>
            <p>Free basic website + deployment</p>
            <p>Server Setup</p>
            <p>Maintenance</p>
            <p><span className="font-bold"> 2</span> hrs/ week of dev work/ changes </p>
            <p>unused hrs carry over</p>
            <p>$75/hr addon</p>
        </div>
        <div 
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h4>Silver</h4>
            <h3 className="text-2xl font-bold">$625/month</h3>
            <p> Everything Ruby + </p> 
            <p><span className="font-bold"> 5</span> hrs/ week of dev work/ changes </p>
            <p>unused hrs carry over</p>
            <p>$75/hr addon</p>
        </div>
        <div 
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h4>Gold</h4>
            <h3 className="text-2xl font-bold">$700/month</h3>
            <p> Everything Ruby + </p> 
            <p><span className="font-bold"> 8</span> hrs/ week of dev work/ changes </p>
            <p>unused hrs carry over</p>
            <p>$75/hr addon</p>
        </div>
        <div 
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h4>Custom Pricing For Specialized Projects </h4>
            <p> NFT Minting </p> 
            <p> SC Development </p> 
            <p> Security Audits </p> 
            <p> MVPs </p> 
            <p> Blockchain Architecture</p>
            <p> Security</p>
            <p> contact us: customer@bitoverflow.org</p>
        </div>
      </div>
    </div>
  );
};

export default Subs;
