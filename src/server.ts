import express from "express";

const app = express();

app.get("/test", (request, response) => {
    return response.status(201).json({ message: "Fumegouu!!" });
});

app.listen(3333, () => console.log("Server is running on PORT 3333"));