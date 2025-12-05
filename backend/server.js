const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const rateLimit = require("express-rate-limit");

const app = express();
const port = process.env.PORT || 4000;

// Import all routers from different services
const { router: authRouter } = require('./Auth/router/router');
const { router: basicRouter } = require('./basic/router/router');
const { router: submissionRouter } = require('./codeSubmission/router/router');
const { router: adminRouter } = require('./Admin/router/router');

// Rate limiting
const limiter = rateLimit({
    windowMs: 20 * 60 * 1000,
    max: 1000,
    message: "1000 requests inside 20 minutes?!?! Are u seriously intrested in this shit I built?!?!Man u need a break for sure. Wait are u DOS Attacker?? IS THIS CRAP THAT IMPORTANT TO IMPLEMENT A DOS ATTACK.. man I did a pretty good job ig **sob sob.."
});

// Middleware
app.use(cors({
    origin: [
        "http://localhost:5173", 
        "http://localhost:5174",
        "https://aadukalam-frontend.onrender.com",
        "https://aadukalam-frontend.up.railway.app",
        process.env.FRONTEND_URL, // For custom deployment URLs
    ].filter(Boolean), // Remove undefined values
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(limiter);

// Request logging
app.use((req, res, next) => {
    console.log("Yo this request is now getting called - " + req.path);
    next();
});

// Mount all routes - using same paths as proxy was using
app.use('/login-signup', authRouter);
app.use('/basic', basicRouter);
app.use('/submission', submissionRouter);
app.use('/admin', adminRouter);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Monolithic server is running' });
});

app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'Aadukalam Monolithic Backend',
        services: ['auth', 'basic', 'submission', 'admin']
    });
});

// Start server
app.listen(port, () => {
    console.log(`Monolithic backend running at http://localhost:${port}`);
    console.log(`All services (Auth, Basic, CodeSubmission, Admin) are available on this port`);
});

module.exports = app;
