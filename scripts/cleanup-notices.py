#!/usr/bin/env python3
"""
Bulk cleanup script: Remove hardcoded NoticeBoard functions from department pages
This script intelligently removes:
1. NoticeItem interface definition
2. NoticeBoard function (and similar functions)
3. Related carousel functions
"""

import os
import re
from pathlib import Path

# Files to clean
FILES = [
    "client/pages/DeptCSE.tsx",
    "client/pages/DeptAIML.tsx",
    "client/pages/DeptMechanical.tsx",
    "client/pages/DeptAerospace.tsx",
    "client/pages/DeptAIRobotics.tsx",
    "client/pages/DeptAIDS.tsx",
    "client/pages/DeptCybersecurity.tsx",
    "client/pages/DeptComputerTechnology.tsx",
    "client/pages/DeptDataScience.tsx",
    "client/pages/ElectronicsCommunication.tsx",
    "client/pages/HumanitiesSocialSciences.tsx",
    "client/pages/Mathematics.tsx",
    "client/pages/Physics.tsx",
    "client/pages/Chemistry.tsx",
    "client/pages/MedicalEngineering.tsx",
]

def remove_interface(content):
    """Remove NoticeItem interface definition"""
    pattern = r'interface NoticeItem \{[^}]*\}[\n\s]*'
    return re.sub(pattern, '', content, flags=re.DOTALL)

def remove_function(content, func_name):
    """
    Remove a function definition by name
    Handles nested braces correctly
    """
    pattern = f'function {func_name}\\(\\) {{[^{{}}]*(?:{{[^{{}}]*}}[^{{}}]*)*}}'
    
    # More robust approach: find function start, count braces, find matching closing brace
    start_pattern = f'function {func_name}\\(\\)'
    match = re.search(start_pattern, content)
    
    if not match:
        return content
    
    start_pos = match.start()
    
    # Find the opening brace
    brace_pos = content.find('{', match.end())
    if brace_pos == -1:
        return content
    
    # Count braces to find matching closing brace
    brace_count = 0
    i = brace_pos
    while i < len(content):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                # Found matching brace
                end_pos = i + 1
                # Remove the function and surrounding whitespace
                result = content[:start_pos] + content[end_pos:]
                # Clean up extra blank lines
                result = re.sub(r'\n\n\n+', '\n\n', result)
                return result
        i += 1
    
    return content

def cleanup_file(filepath):
    """Clean up a single file"""
    if not os.path.exists(filepath):
        print(f"⏭️  SKIP: {filepath} (not found)")
        return False
    
    print(f"🔄 Processing: {filepath}")
    
    # Read file
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_size = len(content)
    
    # Backup
    backup_path = filepath + '.backup'
    with open(backup_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"   ✓ Backup created: {backup_path}")
    
    # Remove NoticeItem interface
    content = remove_interface(content)
    
    # Remove functions (try common names)
    function_names = [
        'NoticeBoard',
        'HealthSciencesNews',
        'DepartmentNews',
        'NewsBoard',
        'NoticeSection'
    ]
    
    for func_name in function_names:
        before = content
        content = remove_function(content, func_name)
        if before != content:
            print(f"   ✓ Removed {func_name}()")
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    new_size = len(content)
    reduction = original_size - new_size
    
    if reduction > 0:
        print(f"   ✓ Cleaned up {reduction} characters ({reduction//100}% reduction)")
    else:
        print(f"   ⚠️  No changes made")
    
    return True

def main():
    print("🧹 Starting bulk cleanup of hardcoded notices...\n")
    
    cleaned = 0
    skipped = 0
    
    for filepath in FILES:
        if cleanup_file(filepath):
            cleaned += 1
        else:
            skipped += 1
        print()
    
    print("=" * 60)
    print(f"✅ Cleanup complete!")
    print(f"   Cleaned: {cleaned} files")
    print(f"   Skipped: {skipped} files")
    print()
    print("📝 Next steps:")
    print("   1. Review the changes in your IDE")
    print("   2. Test the pages to ensure they still work")
    print("   3. Delete .backup files once verified")
    print()
    print("⚠️  Verify changes:")
    print("   git diff client/pages/")
    print()

if __name__ == '__main__':
    main()
