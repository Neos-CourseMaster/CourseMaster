$ErrorActionPreference = "Stop"

$projectRoot = "C:\Users\mevoo\Desktop\CourseMaster"
$djangoRoot = Join-Path $projectRoot "CourseMasterApp"
$venvPython = Join-Path $projectRoot ".venv\Scripts\python.exe"

if (-not (Test-Path $venvPython)) {
    Write-Host ".venv bulunamadı, oluşturuluyor..."
    py -m venv "$projectRoot\.venv"
}

Write-Host "Pip güncelleniyor..."
& $venvPython -m pip install --upgrade pip

Write-Host "Bağımlılıklar yükleniyor..."
& $venvPython -m pip install -r "$projectRoot\requirements.txt"

Write-Host "Migration çalıştırılıyor..."
Push-Location $djangoRoot
& $venvPython manage.py migrate
Pop-Location

Write-Host "Kurulum tamamlandı. Sunucuyu başlatmak için:"
Write-Host "cd $djangoRoot"
Write-Host "& $venvPython manage.py runserver"
