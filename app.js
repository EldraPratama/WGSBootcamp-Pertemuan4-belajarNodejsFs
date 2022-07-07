//core module
//file system
const fs = require('fs');
const readline = require('readline');


//menulis string ke file (Syncronus)
// fs.writeFileSync('text.txt','Hello world secara');

//membaca file 
// fs.readFile('text.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

//Menginput data 
const rl = readline.createInterface({
    input :process.stdin,
    output:process.stdout
});

rl.question('What is your name? ',(name)=>{
    rl.question('What is your phone? ',(phone)=>{
        rl.question('What is your email? ',(email)=>{
            console.log(`Thank you ${name}`);
            console.log(`your phone: ${phone}`);       
            console.log(`your email: ${email}`);
            rl.close();
        })
    })
})