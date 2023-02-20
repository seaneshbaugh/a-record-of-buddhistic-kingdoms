#!/usr/bin/env node

const CLI = require("../lib/cli.js");

const cli = new CLI(process.argv);

const result = cli.run();

process.exit(result);
