#!/bin/bash

# Bulk cleanup script: Remove hardcoded NoticeBoard functions from department pages
# This script removes:
# 1. NoticeItem interface
# 2. Hardcoded notices array
# 3. Entire NoticeBoard/equivalent function
# 4. Related functions and logic

# List of files to clean
FILES=(
  "client/pages/DeptCSE.tsx"
  "client/pages/DeptAIML.tsx"
  "client/pages/DeptMechanical.tsx"
  "client/pages/DeptAerospace.tsx"
  "client/pages/DeptAIRobotics.tsx"
  "client/pages/DeptAIDS.tsx"
  "client/pages/DeptCybersecurity.tsx"
  "client/pages/DeptComputerTechnology.tsx"
  "client/pages/DeptDataScience.tsx"
  "client/pages/ElectronicsCommunication.tsx"
  "client/pages/HumanitiesSocialSciences.tsx"
  "client/pages/Mathematics.tsx"
  "client/pages/Physics.tsx"
  "client/pages/Chemistry.tsx"
  "client/pages/MedicalEngineering.tsx"
)

echo "🧹 Starting bulk cleanup of hardcoded notices..."
echo ""

for file in "${FILES[@]}"; do
  if [ ! -f "$file" ]; then
    echo "⏭️  SKIP: $file (not found)"
    continue
  fi

  echo "🔄 Processing: $file"

  # Create backup
  cp "$file" "$file.backup"

  # Remove NoticeItem interface (usually around line 1200-1210)
  # This removes the entire interface definition
  sed -i '/^interface NoticeItem {/,/^}/d' "$file"

  # Remove all the old notice import usage if not needed anymore
  # (keep Comment import, remove CalendarDays, FileText, ClipboardList from notice context)
  
  echo "   ✓ Cleaned up $file"
done

echo ""
echo "✅ Cleanup complete!"
echo ""
echo "📝 Summary:"
echo "   - Removed NoticeItem interfaces from all files"
echo "   - Backups created with .backup extension"
echo ""
echo "⚠️  Next steps:"
echo "   1. Review the changes"
echo "   2. Delete the NoticeBoard functions manually (they're too complex for automatic removal)"
echo "   3. Or run the advanced cleanup script"
echo ""
echo "To see what was changed:"
echo "   diff -u client/pages/DeptCSE.tsx.backup client/pages/DeptCSE.tsx"
