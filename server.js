const express = require('express');
const error = require('./middleware/errorMiddleware');
const notFound = require('./middleware/notFoundMiddleware');

const app = express();

// Body Parser Middleware
app.use(express.json());

// Members API Routes
app.use('/api/users', require('./routes/usersRoutes'));
app.use('/api/tours', require('./routes/toursRoutes'));
app.use('/api/services', require('./routes/servicesRoutes'));

// middleware to handle errors
app.use(error, notFound);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));