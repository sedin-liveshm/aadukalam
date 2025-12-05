# Update Frontend API URLs Script
# Run this in PowerShell from the student directory

Write-Host "Updating API URLs in all JSX/JS files..." -ForegroundColor Cyan

Get-ChildItem -Path .\src -Recurse -Include *.jsx,*.js | ForEach-Object {
    $file = $_
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    
    if ($null -ne $content -and $content -match "localhost:4000") {
        Write-Host "Processing: $($file.Name)" -ForegroundColor Yellow
        
        # Replace localhost URLs with template literals
        $updated = $content -replace 'fetch\("http://localhost:4000/', 'fetch(`${API_URL}/'
        $updated = $updated -replace 'fetch\(`http://localhost:4000/', 'fetch(`${API_URL}/'
        $updated = $updated -replace '"http://localhost:4000/', '`${API_URL}/'
        
        # Check if API_URL import exists
        if ($updated -notmatch "import.*API_URL.*from.*config") {
            # Find where to add import (after first import block)
            if ($updated -match "(?s)(import .+?;\s*)(\n\n|export|function|const|class)") {
                $importSection = $Matches[1]
                $rest = $updated.Substring($importSection.Length)
                
                # Calculate path depth
                $depth = ($file.DirectoryName.Replace((Get-Location).Path, "") -split '\\').Count - 2
                $pathPrefix = if ($depth -gt 0) { "../" * $depth } else { "./" }
                
                $newImport = "import { API_URL } from '$($pathPrefix)config';`n"
                $updated = $importSection + $newImport + $rest
            }
        }
        
        Set-Content -Path $file.FullName -Value $updated -NoNewline
        Write-Host "Updated: $($file.Name)" -ForegroundColor Green
    }
}

Write-Host "`nDone! All API URLs updated to use API_URL from config." -ForegroundColor Cyan
