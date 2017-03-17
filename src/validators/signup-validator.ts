import { FormControl } from '@angular/forms';

export class SignupValidator{

    static checkUsername(control: FormControl):any{
        return new Promise( resolve =>{
            setTimeout(() => {
                    if(control.value.toLowerCase() === "cip"){
            
                    resolve({
                        "username taken": true
                    });
            
                    } else {
                    resolve(null);
                    }
            }, 2000);
        })
    }

    static checkPassword(control: FormControl): any{
        let pwd1 = control.get('password');
        let pwd2 = control.get('passwordConf');
        if ((pwd1.touched || pwd2.touched) && pwd1.value !== pwd2.value) {
         return true;
        }
        else return null;
    }
}