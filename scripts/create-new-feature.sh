#!/bin/bash
# Script to create a new feature following SpecKit structure

set -e

if [ -z "$1" ]; then
    echo "Usage: ./scripts/create-new-feature.sh <feature-name>"
    echo "Example: ./scripts/create-new-feature.sh user-authentication"
    exit 1
fi

FEATURE_NAME="$1"
FEATURE_DIR="specs/$(date +%Y%m%d)-${FEATURE_NAME}"

echo "Creating feature directory: ${FEATURE_DIR}"
mkdir -p "${FEATURE_DIR}/contracts"

echo "Creating spec.md from template..."
cp templates/spec-template.md "${FEATURE_DIR}/spec.md"

echo "Creating plan.md from template..."
cp templates/plan-template.md "${FEATURE_DIR}/plan.md"

echo "Creating tasks.md from template..."
cp templates/tasks-template.md "${FEATURE_DIR}/tasks.md"

echo "Creating data-model.md from template..."
cp templates/data-model-template.md "${FEATURE_DIR}/data-model.md"

echo "Creating research.md..."
touch "${FEATURE_DIR}/research.md"
echo "# Research: ${FEATURE_NAME}" > "${FEATURE_DIR}/research.md"
echo "" >> "${FEATURE_DIR}/research.md"
echo "Research notes and findings for this feature." >> "${FEATURE_DIR}/research.md"

echo "Creating quickstart.md..."
touch "${FEATURE_DIR}/quickstart.md"
echo "# Quick Start: ${FEATURE_NAME}" > "${FEATURE_DIR}/quickstart.md"
echo "" >> "${FEATURE_DIR}/quickstart.md"
echo "Quick reference guide for implementing this feature." >> "${FEATURE_DIR}/quickstart.md"

echo ""
echo "Feature structure created at: ${FEATURE_DIR}"
echo ""
echo "Next steps:"
echo "1. Edit ${FEATURE_DIR}/spec.md with feature specification"
echo "2. Run '/speckit.plan' to generate implementation plan"
echo "3. Run '/speckit.tasks' to generate task breakdown"
echo "4. Review and refine before implementation"

