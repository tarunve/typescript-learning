Typescript
==========

## code examples 

* Code samples for all the basic syntax are there in 001-typescript module.
* 002-basic-github-report is the sample project for retrieving the information from github for any user.

## setup

* install typescrip globally

```
npm install --global typescript
tsc -v
```

* traspile source

```
tsc file.ts
```

* traspile source and specify the output directory

```
tsc file.ts --out ../out/file.js
or specify it in tsconfig.json - "outDir"
```

* initialize typescript project

```
tsc --init
```

## install declaration files / dependencies

* example using npm and @types

```
npm install lodash
npm install @types/lodash
```
