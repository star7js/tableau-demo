import * as React from "react";
import "./App.css";
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";

function App() {
    return (
        <div
            className="App"
            style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <h1>The Tableau Embedded API v3</h1>
            <h3>Now more lightweight, and backwards compatible!</h3>
            <TableauEmbed
                sourceUrl="https://public.tableau.com/views/WorldIndicators/GDPpercapita"
                width="1000px"
                height="1000px"
                options={{
                    device: "desktop",
                }}
            />
        </div>
    );
}
export default App;