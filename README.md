
# Guide to Installing TypeScript and ts-node-dev

Follow these steps to set up TypeScript and `ts-node-dev` for your project.

### Step 1: Initialize npm
Open the terminal (PowerShell, Git Bash, or Command Prompt) and run:
```bash
npm init -y
```
###    Step 2: Install TypeScript and ts-node-dev
Install TypeScript globally:
```bash
npm install -g typescript
```
Install ts-node-dev as a development dependency:
```bash
npm install ts-node-dev --save-dev
```
###    Step 3: Initialize TypeScript Configuration
Generate a tsconfig.json file:
```bash
tsc --init
```
###    Step 4: Open the Project in VS Code
If you’re using Visual Studio Code, you can open the project directory by running:

```bash
code .
```
###    Step 5: Add Script in package.json
In package.json, add the following line in the "scripts" section:
```json
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/fileName.ts"
}
```
#####   Note: Replace "src/fileName.ts" with the actual path and filename of your TypeScript file.

###    Step 6: Run the TypeScript File
To execute the file in development mode, run:
```bash
npm run dev
```
This setup will allow to see output (like console.log(result) ) in the console, and ts-node-dev will automatically restart the process whenever code changes.

