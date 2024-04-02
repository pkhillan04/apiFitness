import express from "express";
import fetch from 'node-fetch'; // Import node-fetch for making HTTP requests

const app = express();
const port = 9000;

// Middleware to parse JSON requests
app.use(express.json());

// Define endpoint to fetch exercise details by ID
app.get("/api/exercises/exercise/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const response = await fetch(`https://api-fitness.vercel.app/api/exercises/exercise/${id}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching exercise detail:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Define endpoint to fetch exercises by target muscle
app.get("/api/exercises/target/:target", async (req, res) => {
    try {
        const { target } = req.params;
        const response = await fetch(`https://api-fitness.vercel.app/api/exercises/target/${target}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching exercises by target muscle:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Define endpoint to fetch exercises by equipment
app.get("/api/exercises/equipment/:equipment", async (req, res) => {
    try {
        const { equipment } = req.params;
        const response = await fetch(`https://api-fitness.vercel.app/api/exercises/equipment/${equipment}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching exercises by equipment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Default route
app.get("/", (req, res) => {
    res.json({ message: "Hello from Express App" });
});

// Start the server
app.listen(port, () => {
    console.log(`Starting server on port ${port}`);
});
