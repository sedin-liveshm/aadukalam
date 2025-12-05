# Aadukalam - Monolithic Backend

## Overview
This is the monolithic version of the Aadukalam coding platform backend. All microservices (Auth, Basic, CodeSubmission, Admin) have been consolidated into a single application running on port 4000.

## Architecture Change

### Before (Microservices):
- Auth Service: Port 4001
- Basic Service: Port 4002
- CodeSubmission Service: Port 4003
- Admin Service: Port 4004
- Proxy Service: Port 4000 (routing to all services)

### After (Monolithic):
- Single Server: Port 4000
- All routes directly accessible:
  - `/login-signup/*` - Authentication routes
  - `/basic/*` - Basic operations (home, questions, leaderboard)
  - `/submission/*` - Code submission and checking
  - `/admin/*` - Admin operations

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment
Create a `.env` file in the `backend` directory:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/development_database"
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=4000
NODE_ENV=development
```

### 3. Start the Server

**Development (with auto-restart):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

## API Routes

### Authentication Routes (`/login-signup`)
- POST `/login-signup/signup` - User registration
- POST `/login-signup/login` - User login
- POST `/login-signup/logout` - User logout
- POST `/login-signup/otp-verify-signup` - Verify OTP for signup
- POST `/login-signup/otp-verify-login` - Verify OTP for login
- POST `/login-signup/otp-resend` - Resend OTP
- POST `/login-signup/forgot-password` - Forgot password
- POST `/login-signup/uname-verify` - Verify username
- POST `/login-signup/force-quit-signup` - Force quit signup

### Basic Routes (`/basic`)
- POST `/basic/home` - Get home page data
- POST `/basic/question` - Get question details
- POST `/basic/leaderBoard` - Get leaderboard
- POST `/basic/contest-basic` - Get contest basic info
- POST `/basic/contest-handle` - Handle contest operations
- POST `/basic/contest-review` - Review contest
- POST `/basic/coding-page` - Get coding page data
- POST `/basic/update` - Update user profile
- POST `/basic/admin-update` - Admin update topics
- POST `/basic/admin-load` - Load admin data

### Submission Routes (`/submission`)
- POST `/submission/solve-question` - Start solving a question
- POST `/submission/solve-contest` - Start solving a contest
- POST `/submission/check-submission` - Check code submission
- POST `/submission/submit-question` - Submit question solution
- POST `/submission/submit-contest` - Submit contest
- POST `/submission/auto-save-solution` - Auto-save solution
- POST `/submission/submit-question-of-a-contest` - Submit question in contest

### Admin Routes (`/admin`)
- POST `/admin/load` - Load admin data
- POST `/admin/addTopic` - Add new topic
- POST `/admin/addQuestion` - Add new question
- POST `/admin/addTestCase` - Add test case
- POST `/admin/addContest` - Add new contest

## Frontend Configuration

The frontend should point to: `http://localhost:4000`

All API calls remain the same - no changes needed to frontend code!

## Deployment

### For Production (Render/Railway):

1. **Push code to GitHub**
2. **Create new Web Service**
3. **Configure:**
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variables: Set `DATABASE_URL`, `EMAIL_USER`, `EMAIL_PASS`
4. **Deploy!**

### Environment Variables for Production:
- `DATABASE_URL` - MongoDB Atlas connection string (after migration)
- `EMAIL_USER` - Email for sending OTPs
- `EMAIL_PASS` - Email app password
- `PORT` - Automatically set by Render/Railway
- `NODE_ENV` - Set to `production`

## Benefits of Monolithic Architecture

1. **Simpler Deployment** - Single service to deploy
2. **Easier to Debug** - All logs in one place
3. **Lower Resource Usage** - One Node.js process instead of 5
4. **Simpler Database Connection** - Single DATABASE_URL
5. **No Proxy Overhead** - Direct routing
6. **Cost Effective** - One dyno/container instead of 5

## Migration to MongoDB

After verifying everything works with PostgreSQL, you can migrate to MongoDB:

1. Update `DATABASE_URL` to MongoDB connection string
2. Update Prisma schema to use MongoDB provider
3. Run `npx prisma generate`
4. Run `npx prisma db push`

## Troubleshooting

**Port already in use:**
```bash
# Windows
netstat -ano | findstr :4000
taskkill /F /PID <PID>

# Linux/Mac
lsof -ti:4000 | xargs kill -9
```

**Module not found errors:**
- Make sure you're in the `backend` directory
- Run `npm install` again

## Health Check

Visit `http://localhost:4000/health` to verify the server is running.

## Support

For issues, check:
1. All dependencies installed: `npm install`
2. `.env` file configured correctly
3. Database is running (PostgreSQL/MongoDB)
4. Port 4000 is not in use
