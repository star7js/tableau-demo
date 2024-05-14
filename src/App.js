import * as React from "react";
import "./App.css";
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";

function App() {
    const [error, setError] = React.useState(null);

    const handleTableauError = (err) => {
        console.error("Tableau Embed Error:", err);
        setError(err);
    };

    return (
        <div className="App">
            <h1>The Tableau Embedded API v3</h1>
            <h3>Now more lightweight, and backwards compatible!</h3>
            {error ? (
                <div className="error-message">
                    <p>An error occurred while loading the Tableau visualization:</p>
                    <pre>{JSON.stringify(error, null, 2)}</pre>
                </div>
            ) : (
                <TableauEmbed
                    sourceUrl="https://public.tableau.com/views/WorldIndicators/GDPpercapita"
                    width="1100px"
                    height="800px"
                    options={{
                        device: "desktop",
                    }}
                    onError={handleTableauError}
                />
            )}
        </div>
    );
}

export default App;