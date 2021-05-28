/**
 *  1.  for custom output file:
 *          tsc test.ts --outFile out.js 
 *  2.  for watch the input file : continuously watch the input the automatic
 *      recompilation happens when detected changes.
 *          tsc test.ts --outFile out.js --watch
 * 
 *  Rather than typing the commands with diff options:
 *  -   We can specify the configuration in file : tsconfig.json
 *  -   We can generate sample configutaion file using :
 *              tsc --init
 * 
 *  
 *  -   To load type-definitions for a library:
 *          npm install @types/lodash --save-dev
 *  -   To install library for runtime
 *          npm install request lodash --save
 *  
 * 
 */