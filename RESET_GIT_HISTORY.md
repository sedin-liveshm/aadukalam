# Remove Old Git History and Start Fresh

## Quick Commands (Copy & Paste All)

```powershell
# Navigate to project
cd C:\Users\Livesh\Desktop\VsCodePersonal\Aadukalam

# Step 1: Remove old git folder
Remove-Item -Recurse -Force .git

# Step 2: Initialize fresh git repository
git init

# Step 3: Add all files
git add .

# Step 4: Create first commit
git commit -m "Initial commit - Aadukalam competitive programming platform"

# Step 5: Rename branch to main (if needed)
git branch -M main

# Step 6: Add your remote (replace YOUR_USERNAME)
git remote add origin https://github.com/sedin-liveshm/aadukalam.git

# Step 7: Push to GitHub
git push -u origin main --force
```

## What This Does:
1. ✅ Deletes all old commit history
2. ✅ Creates a fresh git repository
3. ✅ Makes one clean initial commit
4. ✅ Pushes to your repository with no old history

## After Running:
Your GitHub repository will show:
- ✅ Only 1 commit (your initial commit)
- ✅ No trace of Sai-Vishwa's commits
- ✅ Clean commit history starting from today

---

**Note:** This will permanently delete all old commit history. Make sure you're okay with that before proceeding!
