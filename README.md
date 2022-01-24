# GlassLewis_Automation #

Instructions to Setup Protractor on Windows:
- Step 1: Download and install node.js
             `` node -v
             `` npm -v
- Step 2: Use npm to install Protractor globally with:
             `` npm install -g protractor
- Step 3: Try running the below command to make sure the protractor working
            ``protractor --version 
- Step 4: Update webdriver-manager and start the server
             `` webdriver -manager update
             `` webdriver-manager start
- Step 5: Find conf.js file at
               node_modules\protractor\example
               On command, move to the location of this file and run protractor conf.js.
The default .js file will run.
 
*To run my test case:
•                Create a new project in Visual Studio and create a new folder called conf.
•                Copy conf.js file from the below location and paste it in your conf folder.
                 \node_modules\protractor\example
•                Create another folder in Visual Studio for test cases and create two .js files for the two given scenarios.
•                Copy and paste the code. And specify the file you want to run in specs[] in conf.js file under conf folder
•                Move to a conf folder and run “Protractor conf.js”
•                The scripts will run in a browser.
