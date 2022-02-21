// TEST PURPOSES ONLY

class Login{
    //pass the forms and fields so that the script know what to get
    constructor(form, fields){
        //so that we can pass it between functions
        this.form =form
        this.fields = fields
    }
    //
    validateonSubmit(){
        let self = this;
        this.form.addEventListener('submit', (e)=>{
            e.preventDefault()
            self.fields.forEach((field)=>{
                const input = document.querySelector(`#${field}`)
                console.log(input.value);
            })
        })
    }
}
//variable for the form adding . to represent the class
const form = document.querySelector('.login-form')
if(form){
    const fields =['username','password']
    const validator = new Login(form, fields)
}