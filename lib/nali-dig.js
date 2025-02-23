#!/usr/bin/env node

const execute = require('../util/execute');

execute(['dig', 'kdig'], process.argv.slice(2));
