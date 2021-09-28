#!/usr/bin/env node
const program=require('commander');
const pkg=require('../package.json')

program
    .version(pkg.version)   
    .command('key','Manage Api key --https://nomics.com')
    .command('check','check coin info')
    .parse(process.argv);
