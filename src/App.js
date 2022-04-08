import { useState } from "react";
import "./App.css";
import ButtonList from "./components/ButtonList";
import generateArray from "./utils/people_power";
import campaignsJSON from "./utils/campaigns.json";

function App() {
  const [campaignsArray, setCampaignsArray] = useState(
    generateArray(100, 3, 5, campaignsJSON.campaigns)
  );

  const generatePeoplePower = () => {
    const randomDivisorOne = Math.floor(5 * Math.random());
    const randomDivisorTwo = Math.floor(5 * Math.random());
    setCampaignsArray(
      generateArray(
        100,
        randomDivisorOne,
        randomDivisorTwo,
        campaignsJSON.campaigns
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>38 Degrees | 100 Celebrations of People Power!</h1>
      </header>
      <body>
        <button className="button-people-power" onClick={generatePeoplePower}>
          <h1>Generate some People Power!</h1>
        </button>
        <ButtonList campaigns={campaignsArray} />
      </body>
    </div>
  );
}

export default App;
