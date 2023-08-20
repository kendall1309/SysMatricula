function Copy(id) {
    //tomamos el valor
    var txt = $(`#${id}`).html();
    // el m�todo select es utilizado para seleccionar el contenido de un campo de texto
    //Creamos un input asignamos el valor
    var aux = document.createElement("input");
    aux.setAttribute("value", txt);
    document.body.appendChild(aux);
    aux.select();
    // el m�todo document.execCommand("copy") copia el texto seleccionado al portapapeles
    let exito = document.execCommand("copy");
    //destruimos el input creado
    document.body.removeChild(aux);
}


$('input[type="number"]').change(function () {
    if ($(this).val() < 1) {
        $(this).val(1)
    }
})
function valNumeros(evt) {
    var code = (evt.which) ? evt.which : evt.keyCode;
    if (code == 8) { 
        return true;
    } else if (code >= 48 && code <= 57) { 
        return true;
    } else { 
        return false;
    }
}
function valEspecialChar(evt) {
    var blbandera = true;
    var code = (evt.which) ? evt.which : evt.keyCode;
    //Mayusculas
    if (code >= 65 && code <= 90) {
        blbandera = false;
    }
    //minusculas
    if (code >= 97 && code <= 122) {
        blbandera = false;
    }
    code = parseInt(code);
    //acento en vocales 
    switch (code) {
        //�
        case 193:
            blbandera = false;
            break;
        //�
        case 201:
            blbandera = false;
            break;
        //�
        case 205:
            blbandera = false;
            break;
        //�
        case 211:
            blbandera = false;
            break;
        //�
        case 218:
            blbandera = false;
            break;
        //�
        case 225:
            blbandera = false;
            break;
        //�
        case 233:
            blbandera = false;
            break;
        //�
        case 237:
            blbandera = false;
            break;
        //�
        case 243:
            blbandera = false;
            break;
        //�
        case 250:
            blbandera = false;
            break;
        //�
        case 209:
            blbandera = false;
            break;
        //�
        case 241:
            blbandera = false;
            break;
        case 32:
            blbandera = false;
            break;
    }
    return blbandera;
}
function valChar(evt) {
    var blbandera = false;
    var code = (evt.which) ? evt.which : evt.keyCode;
    //Mayusculas
    if (code >= 65 && code <= 90) {
        blbandera = true;
    }
    //minusculas
    if (code >= 97 && code <= 122) {
        blbandera = true;
    }
    code = parseInt(code);
    //acento en vocales 
    switch (code)
    {
        //�
        case  193:
            blbandera = true;
            break;
        //�
        case  201:
            blbandera = true;
            break;
        //�
        case  205:
            blbandera = true;
            break;
        //�
        case  211:
            blbandera = true;
            break;
        //�
        case  218:
            blbandera = true;
            break;
        //�
        case  225:
            blbandera = true;
            break;
        //�
        case  233:
            blbandera = true;
            break;
        //�
        case  237:
            blbandera = true;
            break;
        //�
        case 243:
            blbandera = true;
            break;
        //�
        case  250:
            blbandera = true;
            break;
        //�
        case  209:
            blbandera = true;
            break;
        //�
        case  241:
            blbandera = true;
            break;
        case 32:
            blbandera = true;
            break;
    }


    return blbandera;
}
function countChar(name, cont,spanId) {
    var val = $(`#${name}`).val();
    var len = val.length;
    if (len >= cont) {
        val = val.substring(0, cont);
        if (len > cont)
        {
            var str = val.substring(0, val.length - 1);
            $(`#${name}`).val(str);
        }
    } else {
        var span = $(`#${spanId}`);
        span.html(len)
    }
};

function EnviarValidacionEmail(input, msj = "") {
    if (validarEmail($(`#${input}`).val()) || $(`#${input}`).val() == "") {
        if (msj != "") $(`#${msj}`).addClass("d-none");

        $(`#${input}`).removeClass("invalido")

    }
    else {
        if (msj != "")
        {
            $(`#${msj}`).removeClass("d-none")
            $(`#${msj}`).html('<i class="fa-solid fa-circle-info"></i> El Correo Electr&oacutenico ingresado es Inv&aacutelido');
        }
        $(`#${input}`).addClass("invalido");
        Alertsw("question", "Email Inv&aacutelido", "Debes de ingresar correctamente el Email", 3000)
    }
}

function validarEmail(valor) {
    var greenFlag = false;
    //Tomamos los caracteres permitidos por usuario + @ + servidor + dominio
     var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
     //Si los caracteres corresponden correctamente es = true
    if (emailRegex.test(valor))
    {

     greenFlag = true;
    } else 
    {
     greenFlag = false;

    }
     return greenFlag;
}

function EyePass(inputName)
{
    $("#passEye").toggleClass("fa-eye fa-eye-slash");
    var input = $(`#${inputName}`);
    if (input.attr("type") === "password") {
        input.attr("type", "text");
    }
    else
    {
        input.attr("type", "password");
    }
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1)
                c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

function ValidarForm() {
    var form, input, i, textarea, validado = true, msj = 0;
    //tomamos todos los form del DOOM
    form = $("form");
    input = form[0].getElementsByTagName("input");
    textarea = form[0].getElementsByTagName("textarea");

    //Validamos los inputs vacios
    for (i = 0; i < input.length; i++) {
        //Espacio esta vacio
        if (input[i].value == "") {
            input[i].classList.add("invalido");
            validado = false;
        }
        //Espacio no esta vacio
        else {
            //Si el espacio es menor a 4 caracteres
            if (input[i].value.length < 4) {
                if(input[i].type == "text" )
                {
                    input[i].classList.add("invalido");
                    validado = false;
                } else input[i].classList.remove("invalido");


            }
            else {
                $('#msj').html('');
                input[i].classList.remove("invalido");
            }
        }
    }
    console.log(textarea)
    for (i = 0; i < textarea.length; i++) {
        //Espacio esta vacio
        if (textarea[i].value == "") {
            textarea[i].classList.add("invalido");
            validado = false;
        }
        //Espacio no esta vacio
        else {
            $('#msj').html('');
            textarea[i].classList.remove("invalido");
        }

    }
    //Si todo esta correcto devolvemos un true
    if (validado) {
        $('#msj').html("");


    } else {
        $('#msj').html('<i class="fa-solid fa-circle-info"></i> Debes completar todos los espacios solicitados');
    }
    return validado;
}