// import the express application and type definition
import express, { Express } from "express";
import {playerData} from "./services/playerData";
import {playerService} from "./services/playerService";
// initialize the express application
const app: Express = express();

interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

// respond to GET request at endpoint "/" with message
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

/**
 * Health check endpoint that returns server status information
 * @returns JSON response with server health metrics
 */
app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
});
app.get("/api/v1/players", (req, res) => {
    playerData([1, 2, 3], ["ShadowStrike", 
        "NoobMaster", "ProGamer99"], 
        [15, 3, 0], [5, 12, 0], 
        [28500, 4200, 0]);
    res.send(playerData);
});

app.get("/api/v1/players/:id", (req, res) => {
    playerData([1], ["ShadowStrike"], [15], [5], [28500]);
    res.send(playerData);
});

app.get("/api/v1/players/:id/rating", (req, res) =>{
    playerService(15, 5, 28500);
    res.send(playerService);
});


// export app and server for testing
export default app;