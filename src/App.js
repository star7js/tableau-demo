import "./App.css";
import * as React from "react";

import {TableauEmbed} from "@stoddabr/react-tableau-embed-live";

function App() {
    return (
        <div
            className="App"
        >
            <h1>The Tableau Embedded API v3</h1>
            <h3>Now more lightweightz, and backwards compatible!</h3>
            <TableauEmbed
                sourceUrl="https://public.tableau.com/views/WorldIndicators/GDPpercapita"
                width="1000px"
                height="900px"
                options={{
                    device: "desktop",
                }}
            />
        </div>
    );
}

export default App;