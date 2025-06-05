# DevSecOps Lab In the Box Board Game Website Maintenance Guide - Internal Use

## 📦 Project Structure Overview

```hcl
    .
    ├── public/
    │   └── docs/          # Tutorial files (HTML, images, assets)
    ├── src/               # Source code (if applicable)
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── eslint.config.js
    ├── index.html         # Main HTML file
    ├── dist/              # Auto-generated after build (should be renamed to 'docs' before deploy)
    ├── docs/              # Final deployment directory for GitHub Pages 
    └── README.md          # This file   
    
```

## 📄 Maintenance Guide

If you need to update the content of the tutorials:

1. Navigate to the following directory:
```hcl
    public/docs/
```

2. Make the necessary changes to the tutorial files (markdown files, images, etc.).

3. Run the following command in terminal to rebuild the project:

```bash
    npm run build
```
4. After building, a new `dist` folder will be generated.

5. Delete the old `docs` directory at the project root.

6. Rename the new `dist` folder to `docs`.

7. Commit and push the changes to the main branch, GitHub Pages will automatically serve the updated site from the docs/ directory.


## 🌐 Deployment Notes

GitHub Pages is already configured to serve content from the `docs/` folder in the root of this repository. Always make sure the latest build artifacts are inside `docs/` after renaming from `dist/`.

Go to `Settings > Pages > Source` and make sure it is set to:

```hcl
Branch: main
Folder: /docs
```