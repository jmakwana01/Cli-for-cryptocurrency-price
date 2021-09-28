const program=require('commander');
const check=require('../commands/check');
program
    .command('price')
    .description('check price of coin')
    .option('--coin <type>','Add specifc  coin types in csv format','BTC,ETH,RIP')
    .option('--cur <currency>','change the currency','USD')
    .action(cmd=>check.price(cmd));

program.parse(process.argv);