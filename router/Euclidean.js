let router= require('express').Router()

router.post('/',(req,res)=>{
    let a = req.body.a;
    let b= req.body.b;

    // looping till get value
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    };

    res.json({Error:false, Result:a})
})

module.exports= router