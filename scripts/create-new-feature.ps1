# PowerShell script to create a new feature following SpecKit structure

param(
    [Parameter(Mandatory=$true)]
    [string]$FeatureName
)

$DatePrefix = Get-Date -Format "yyyyMMdd"
$FeatureDir = "specs/${DatePrefix}-${FeatureName}"

Write-Host "Creating feature directory: ${FeatureDir}"
New-Item -ItemType Directory -Force -Path "${FeatureDir}/contracts" | Out-Null

Write-Host "Creating spec.md from template..."
Copy-Item "templates/spec-template.md" "${FeatureDir}/spec.md"

Write-Host "Creating plan.md from template..."
Copy-Item "templates/plan-template.md" "${FeatureDir}/plan.md"

Write-Host "Creating tasks.md from template..."
Copy-Item "templates/tasks-template.md" "${FeatureDir}/tasks.md"

Write-Host "Creating data-model.md from template..."
Copy-Item "templates/data-model-template.md" "${FeatureDir}/data-model.md"

Write-Host "Creating research.md..."
@"
# Research: ${FeatureName}

Research notes and findings for this feature.
"@ | Out-File -FilePath "${FeatureDir}/research.md" -Encoding UTF8

Write-Host "Creating quickstart.md..."
@"
# Quick Start: ${FeatureName}

Quick reference guide for implementing this feature.
"@ | Out-File -FilePath "${FeatureDir}/quickstart.md" -Encoding UTF8

Write-Host ""
Write-Host "Feature structure created at: ${FeatureDir}"
Write-Host ""
Write-Host "Next steps:"
Write-Host "1. Edit ${FeatureDir}/spec.md with feature specification"
Write-Host "2. Run '/speckit.plan' to generate implementation plan"
Write-Host "3. Run '/speckit.tasks' to generate task breakdown"
Write-Host "4. Review and refine before implementation"

