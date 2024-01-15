import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

// connection and listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log('Server is connected to database and running on port http://localhost:5000')
    )
  })
.catch((err) => console.log(err ));