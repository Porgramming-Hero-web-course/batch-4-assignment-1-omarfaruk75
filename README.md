# Guide to Installing TypeScript and ts-node-dev

Follow these steps to set up TypeScript and `ts-node-dev` for your project.

### Step 1: Initialize npm
Open your terminal (PowerShell, Git Bash, or Command Prompt) and run:
```bash
npm init -y
```
```bash
npm install -g typescript
```
```bash
npm install ts-node-dev --save-dev
```
```bash
tsc --init
```
####  add in package.json file
```
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/fileName.ts"
}
```
#####  Replace "src/fileName.ts" file according to the file path change
```bash
npm run dev
```
#### file run in console.log();

