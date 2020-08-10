addEventListener('load', function() {

    // VALIDACIÓN DEL LOGIN


    let form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', function(e) {

            // VALIDACIÓN DEL CAMPO EMAIL DE LA VISTA LOGIN

            let emailLog = document.getElementById('email');
            let emailContent = emailLog.value;
            let arroba = emailContent.includes('@');
            let emailLength = emailContent.length >= 6 ? true : false;
            let invalidEmail = form.getElementById('emptyEmail');
            let iconoEmail = form.querySelector('i#emailIconLog');
            let emptyEmail = document.getElementById('emptyEmail');

            if (emailContent == '' || !emailLength) {
                e.preventDefault();
                emptyEmail.innerHTML = '<p>' + 'Por favor, ingresá tu email o verificá que esté bien escrito' + '</p>';
                iconoEmail.style.backgroundColor = "#CF664F";
                emailLog.style.border = "1px solid #CF664F";
            } else {
                emptyEmail.innerHTML = '';
                iconoEmail.style.backgroundColor = "#6FCF97";
                emailLog.style.border = "1px solid #ced4da";
            }

            if (emailContent != '' && !arroba) {
                e.preventDefault();
                invalidEmail.innerHTML = "<p>" + 'Debés incluir el signo @ en la dirección de correo electrónico. La dirección ' + '<span style="font-weight: 600">' + emailContent + '</span>' + ' no la incluye.' + '</p>';
                iconoEmail.style.backgroundColor = "#CF664F";
                emailLog.style.border = "1px solid #CF664F";
            }

            // VALIDACIÓN DEL CAMPO CONTRASEÑA DE LA VISTA LOGIN
            let passLog = document.getElementById('password');
            let passLogContent = passLog.value;
            let emptyPass = form.getElementById('emptyPassword');
            let invalidPass = form.getElementById('invalidPassword');
            let regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;
            let iconoKey = form.querySelector('i#keyIconLog');

            if (passLogContent == '') {
                e.preventDefault();
                emptyPass.innerHTML = '<p>' + 'Por favor, ingresá tu contraseña' + '</p>';
                iconoKey.style.backgroundColor = "#CF664F";
                passLog.style.border = "1px solid #CF664F";
            } else {
                emptyPass.innerHTML = '';
                iconoKey.style.backgroundColor = "#6FCF97";
                passLog.style.border = "1px solid #ced4da";
            }

            if (!regExp.test(passLogContent) && passLogContent != '') {
                e.preventDefault();
                invalidPass.innerHTML = "<p>" + 'Revisá que la contraseña esté bien escrita' + '</p>';
                iconoKey.style.backgroundColor = "#CF664F";
                passLog.style.border = "1px solid #CF664F";
            } else {
                invalidPass.innerHTML = '';
                passLog.style.border = "1px solid #ced4da";
            }
        })
    }
})

// VALIDACIÓN DEL REGISTRO (VISTA)

addEventListener('load', function() {

    let registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {


            // VALIDACIÓN CAMPO EMAIL DE LA VISTA REGISTRO
            let nameReg = document.querySelector('input#name');
            let nameRegContent = nameReg.value;
            let emptyName = document.getElementById('emptyName');

            if (nameRegContent = '' || nameRegContent.length < 3) {
                event.preventDefault();
                emptyName.innerHTML = '<p>' + 'Por favor, ingresá tu nombre. Debe tener al menos tres caracteres' + '</p>';
                nameReg.style.border = "1px solid #CF664F";
            } else {
                emptyName.innerHTML = '';
                nameReg.style.border = "1px solid #ced4da";
            }

            // VALIDACIÓN CAMPO EMAiL DE LA VISTA REGISTRO
            let emailReg = document.getElementById('email');
            let emailRegContent = emailReg.value;
            let arrobaReg = emailRegContent.includes('@');
            let emailRegLength = emailRegContent.length >= 6 ? true : false;
            let invalidRegEmail = document.getElementById('invalidEmail');
            let emptyRegEmail = document.getElementById('emptyEmail');

            if (emailRegContent == '' || !emailRegLength) {
                event.preventDefault();
                emptyRegEmail.innerHTML = '<p>' + 'Por favor, ingresá tu email o verificá que esté bien escrito' + '</p>';
                console.log("ÑALSKDFJÑASDOIFJASDÑLKFJASÑDLKFJASDÑLFKJASDÑLFKJASDÑFLKAJSDF")
                emailReg.style.border = "1px solid #CF664F";
            } else {
                emptyRegEmail.innerHTML = '';
                emailReg.style.border = "1px solid #ced4da";
            }

            if (emailRegContent != '' && !arrobaReg) {
                event.preventDefault();
                invalidRegEmail.innerHTML = "<p>" + 'Debés incluir el signo @ en la dirección de correo electrónico. La dirección ' + '<span style="font-weight: 600">' + emailRegContent + '</span>' + ' no la incluye.' + '</p>';
                emailReg.style.border = "1px solid #CF664F";
            }

            // VALIDACIÓN DEL CAMPO CONTRASEÑA DE LA VISTA REGISTRO
            let passReg = document.getElementById('password');
            let passRegContent = passReg.value;
            let emptyRegPass = document.getElementById('emptyPassword');
            let invalidRegPass = document.getElementById('invalidPassword');
            let regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;

            if (passRegContent == '') {
                event.preventDefault();
                emptyRegPass.innerHTML = '<p>' + 'Por favor, ingresá tu contraseña' + '</p>';
                passReg.style.border = "1px solid #CF664F";
            } else {
                emptyRegPass.innerHTML = '';
                passReg.style.border = "1px solid #ced4da";
            }

            if (!regExp.test(passRegContent) && passRegContent != '') {
                event.preventDefault();
                invalidRegPass.innerHTML = "<p>" + 'Debe tener un mínimo de 8 caracteres, al menos una letra y un número' + '</p>';
                passReg.style.border = "1px solid #CF664F";
            } else {
                invalidRegPass.innerHTML = '';
                passReg.style.border = "1px solid #ced4da";
            }

            // VALIDACIÓN DEL CAMPO VALIDACIÓN DE LA VISTA REGISTRO
            let validation = document.querySelector('input#passwordConf');
            let validationContent = validation.value;
            let emptyValidation = document.getElementById('emptyPasswordConf');
            let invalidValidation = document.getElementById('invalidPasswordConf');

            if (validationContent == '') {
                event.preventDefault();
                emptyValidation.innerHTML = '<p>' + 'Por favor, repetí tu contraseña' + '</p>';
                validation.style.border = "1px solid #CF664F";
            } else {
                emptyValidation.innerHTML = '';
                validation.style.border = "1px solid #ced4da";
            }

            if (passRegContent != validationContent) {
                event.preventDefault();
                invalidValidation.innerHTML = "<p>" + 'Revisá que las contraseñas coincidan' + '</p>';
                validation.style.border = "1px solid #CF664F";
            } else {
                invalidValidation.innerHTML = '';
                validation.style.border = "1px solid #ced4da";
            }


            // VALIDACIÓN DEL CAMPO AVATAR DE LA VISTA REGISTRO
            let avatar = document.querySelector('input#imageName');
            let avatarContent = avatar.value;
            extension = (avatarContent.substring(avatarContent.lastIndexOf("."))).toLowerCase();
            let emptyAvatar = document.getElementById('emptyImage');
            let invalidAvatar = document.getElementById('invalidImage');

            if (avatarContent == '') {
                event.preventDefault();
                emptyAvatar.innerHTML = "<p>" + '¡No te olvides de cargar una imagen!' + '</p>';
            } else {
                emptyAvatar.innerHTML = '';
            }

            if (avatarContent != '' && extension != '.jpg' && extension != '.png' && extension != '.jpeg' && extension != '.gif') {
                event.preventDefault();
                invalidAvatar.innerHTML = "<p>" + 'Solo podés cargar archivos jpg, png, jpeg o gif' + '</p>';
            } else {
                invalidAvatar.innerHTML = "";
            }
        })
    }
})