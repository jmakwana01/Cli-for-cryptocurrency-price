const keyManager = require('../lib/KeyManager');
const KeyManager=require('../lib/KeyManager')

const {isRequired}=require('../utils/validation')
const key={
    set(){
        const keyManager=new KeyManager();
        const input=await inquirer.prompt([
            {
                type :'input',
                name:'key',
                message:'Enter APi Key'.green +'https://nomics.com',
                validate:isRequired
            }
        ]);
        const key =keyManager.setKey(input.key);
        if(key){
            console.log('api key set'.blue)
        }

    },
    show(){
        try{
            const keyManager=new keyManager();
            const key=keyManager.getkey()
            console.log('Current API keys: ',key.yellow);
            return key;
        }catch(err)
        {
            console.error(err.message.red);
        }
    },
    remove(){
        try{
            const keyManager=new keyManager();
            keyManager.deleteKey();
            console.log('Key Removed',key.blue);
            return key;
        }catch(err)
        {
            console.error(err.message.red);
        }
    }
}
module.exports=key;