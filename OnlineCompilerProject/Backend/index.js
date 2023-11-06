const express = require('express')
const { generateFile } = require('./generateFile')
const app = express();
const {executeCpp} = require('./excuteCpp')

app.use(express.urlencoded({extended : true}));
app.use(express.json());


app.get('/',(req,res)=>{
    return res.json({'name' : 'vicky'})
});

app.post('/run',async (req,res)=>{
    console.log(req.body);
    const {language='cpp',code} = req.body;


    if(code === undefined){
        return res.status(400).json({success : false,error : 'Empty body code'})
    }

    try{
    const filepath = await generateFile(language,code);
    const output = await executeCpp(filepath)

    return res.json({filepath,output })
    }catch(err){
        res.status(500).json({err})
    }


})

app.listen(3000,()=>{
     console.log('Listening on port 3000')
})



