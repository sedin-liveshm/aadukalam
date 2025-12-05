# Aadukalam - Monolithic Backend

## ✅ Migration Complete: Microservices → Monolithic

### What Changed

**Before (Microservices):**
- Auth Service: Port 4001
- Basic Service: Port 4002  
- CodeSubmission Service: Port 4003
- Admin Service: Port 4004
- Proxy Service: Port 4000 (routing between services)

**After (Monolithic):**
- **Single Backend**: Port 4000 (all services unified)
- No proxy needed - direct routing

### Project Structure

```
backend/
├── server.js              # Main monolithic server
├── package.json           # Unified dependencies
├── Auth/                  # Authentication routes & logic
├── basic/                 # Basic page handlers
├── codeSubmission/        # Code execution & submission
├── Admin/                 # Admin operations
├── dbSchema/              # Prisma schema & generated client
└── sessionChecker/        # Session management utility
```

### Running the Application

**Start Backend:**
```bash
cd backend
npm install
npm run dev
```
Backend runs on: http://localhost:4000

**Start Frontend:**
```bash
cd student
npm install
npm run dev
```
Frontend runs on: http://localhost:5173 or 5174

### API Routes

All routes now available on port 4000:

- **Auth**: `/login-signup/*`
  - POST `/login-signup/signup`
  - POST `/login-signup/login`
  - POST `/login-signup/logout`
  - POST `/login-signup/otp-verify-signup`
  - POST `/login-signup/otp-resend`
  - POST `/login-signup/forgot-password`

- **Basic**: `/basic/*`
  - POST `/basic/home`
  - POST `/basic/question`
  - POST `/basic/leaderBoard`
  - POST `/basic/coding-page`
  - POST `/basic/contest-basic`
  - POST `/basic/contest-handle`
  - POST `/basic/contest-review`

- **Submission**: `/submission/*`
  - POST `/submission/solve-question`
  - POST `/submission/check-submission`
  - POST `/submission/submit-question`
  - POST `/submission/solve-contest`
  - POST `/submission/submit-contest`
  - POST `/submission/auto-save-solution`

- **Admin**: `/admin/*`
  - POST `/admin/load`
  - POST `/admin/addTopic`
  - POST `/admin/addQuestion`
  - POST `/admin/addTestCase`
  - POST `/admin/addContest`

### Benefits of Monolithic Architecture

✅ **Simpler Deployment**: Deploy one application instead of 5
✅ **Easier Database Management**: Single DATABASE_URL for all services
✅ **Lower Resource Usage**: One server instead of multiple
✅ **Simplified Development**: No need to run 5 terminals
✅ **Better for Small Teams**: Easier to understand and maintain
✅ **Production Ready**: Perfect for Render/Railway deployment

### Environment Variables

Create `.env` file in `backend/` directory:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/development_database"
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=4000
NODE_ENV=development
```

### Deployment to Production

**Option 1: Render**
1. Push code to GitHub
2. Create new Web Service on Render
3. Set build command: `cd backend && npm install`
4. Set start command: `cd backend && npm start`
5. Add environment variable: `DATABASE_URL` (MongoDB Atlas)

**Option 2: Railway**
1. Connect GitHub repo
2. Select `backend` as root directory
3. Railway auto-detects Node.js
4. Add `DATABASE_URL` environment variable

**Database**: Use MongoDB Atlas (free tier) for production

### Testing the Monolithic Server

```bash
# Check server health
curl http://localhost:4000/health

# Test auth endpoint
curl http://localhost:4000/login-signup/

# Test basic endpoint
curl -X POST http://localhost:4000/basic/home \
  -H "Content-Type: application/json" \
  -d '{"session":"your-session-id"}'
```

### Next Steps

- [ ] Migrate from PostgreSQL to MongoDB
- [ ] Update Prisma schema for MongoDB
- [ ] Set up MongoDB Atlas for production
- [ ] Configure CI/CD pipeline
- [ ] Deploy to production

---

**Note**: The old microservices folders (Auth/, basic/, codeSubmission/, Admin/) still exist but are now imported as modules by `server.js`. The proxy folder is no longer needed but kept for reference.
