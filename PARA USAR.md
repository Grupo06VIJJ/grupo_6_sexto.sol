let validateRegister=[]
const validateRegister=[check('name').notEmpty.withMessage('Debes completar el nombre').bail()]

// ver si va acá
app.get('/',(req,res)=>{
    res.redirect('/groups/');
});