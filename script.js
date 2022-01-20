//alert simples para avisar se a senha esta igual ou n 
function validarSenha(){
    password = document.FormSenha.password.value;
    Confirm_password = document.FormSenha.Confirm_password.value;
    if (password != Confirm_password){ 
         alert("SENHAS DIFERENTES!\\nFAVOR DIGITAR SENHAS IGUAIS");
         return false;
    }
    return true;
}