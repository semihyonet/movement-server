const app = require("express")();

const port = process.env.PORT ? process.env.PORT : 3000;

app.get("/", (req, res) => {
	res.send("Hello from the server!");
});

app.listen(port, () => {
	console.log("Currently listening port: " + port);
});
