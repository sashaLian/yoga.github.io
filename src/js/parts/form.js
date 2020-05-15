function form() {
    let message = {
        loading: 'Загрузка...',
        succes: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };

    let form = document.querySelector('.main-form'),
        formId = document.getElementById('form'),
        input = form.getElementsByTagName('input'),
        inputs = formId.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            
            let formData = new FormData(form);

            let obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });

            let json = JSON.stringify(obj);
            
            request.send(json);

            request.addEventListener('readystatechange', function() {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loadinig;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.succes;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        });

    
        formId.addEventListener('submit', function(event) {
            event.preventDefault();
            formId.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            let formData = new FormData(formId);

            let objTwo = {};
            formData.forEach(function(value, key) {
                objTwo[key] = value;
            });

            let jsons = JSON.stringify(objTwo);

            request.send(jsons);

            request.addEventListener('readystatechange', function() {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.succes;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = '';
            }
        });
}

module.exports = form;