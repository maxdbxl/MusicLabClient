import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {

    static createPasswordStrengthValidator() {
        return (control:AbstractControl) : ValidationErrors | null => {
            const value = control.value;
            if (!value) {
                return null;
            }
            const hasUpperCase = /[A-Z]+/.test(value);
            const hasLowerCase = /[a-z]+/.test(value);
            const hasNumeric = /[0-9]+/.test(value);
            const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;
            
            return !passwordValid ? {passwordStrength : true} : null;
        }
    }

    static confirmPasswordValidator() {
        return (control: AbstractControl): ValidationErrors | null => {

            
            if (!control.value) {
                return null;
            }
            return control.value.password === control.value.confirmPassword ? null : { passwordNoMatch : true }
        }
    }
}