#!/usr/bin/env node

import CLI from "../lib/cli.js";

const cli = new CLI(process.argv);

const result = cli.run();

process.exit(result);
