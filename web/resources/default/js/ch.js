
    let count = 0;
    const MIN_Y = -5;
    const MAX_Y = 5;
    const MIN_X = -4;
    const MAX_X = 4;

    const y = document.getElementById('form:y');
    const someErr = document.getElementById('err_msg');
    const com = document.getElementById('comment');
    const r = document.getElementById('form:rt');
    const inpX = document.getElementById("form:x_input");
    const image = document.getElementById('reaction');
    const mus = document.getElementById('sound');

    y.value = "";
   
    inpX.value = "";

    function showError(text) {

        someErr.innerText = text;
        if (text != null) return false;
    }


    function showComment(text) {
        com.innerText = text;
        if (text != null) return false;
    }

    window.check = check;
    window.checkX = checkX;
    window.checkY = checkY;
    window.checkR = checkR;

    function check(event1, event2, event3) {
        countC();
        if (!(event3 && event2 && event1)) return false;
        else {
            return true;
        }
    }

    function checkX() {
        let s = false;
        if (inpX.value.length === 0) {
            showError("Заполните поле X!");
        } else if (inpX.value <= MIN_X || inpX.value >= MAX_X) {
            showError("X должен лежать в (-4; 4)");
        } else s = true;
        if (s === false && count < 1) count++;
        return s;
    }

    function checkY() {
        y.value = y.value.trim();
        let s = false;
        if (y.value.length === 0) {
            showError("Заполните поле Y!");
        } else if (y.value <= MIN_Y || y.value >= MAX_Y) {
            showError("Y должен лежать в (-5; 5)");
        } else if (isNaN(y.value.replace(',','.'))) {
            showError("В поле Y должно быть число!");
        } else {
            y.value = y.value.replace(",", ".");
            s = true;
        }
        if (checkX() && (s === false) && count < 1) count = 1;
        if (!checkX() && (s === false) && count < 2) count++;
        return s;
    }

    function checkR() {
        r.value = r.value.trim();

        if (r.value.length === 0) {
            showError("Выберите R!");
            count++;
            return false;
        }
        return true;
    }


    function countC() {
        if (count == 1) {
            com.innerText="";
            image.innerText = "";
            showComment("Ошибка во вводе данных!\n Будь внимательнее!");
            lion();
            mus.innerHTML = "<audio src='resources/default/im/star.mp3' autoplay='autoplay'>";
        }

        if (count == 2) {
            com.innerText="";
            image.innerText = "";
            image.innerHTML = "";
            showComment("Две ошибки во вводе данных!\n Не буди во мне зверя!");
            image.innerHTML = "<img src='resources/default/im/starlion.jpg'>";
        }

        if (count >= 3) {
            com.innerText="";
            showComment(count + " ошибки во вводе данных!\n Кошмарррррррррр!🦁")
            image.innerText = "";
            image.innerHTML = "<video poster='resources/default/im/original.gif'>";
            mus.innerHTML = "<audio src='resources/default/im/lion.mp3' autoplay='autoplay'>";
            if (document.getElementById("del") == null) {
                var but = document.createElement('button');
                but.innerText = "Убрать зверя";
                but.id = "del";
                document.body.appendChild(but);
                but.addEventListener('click', del, false);
            }
        }

        function del() {
            image.innerHTML = "";
            com.innerText = "";
            count = 0;
            document.body.removeChild(but);

        }
    }

    function lion() {
        image.innerHTML = "";
        image.innerHTML = "<canvas id='myCanvas2' width='400' >";
        let canvas = document.getElementById("myCanvas2");
        let ctx = canvas.getContext("2d");
        let canvasSize = 400;
        canvas.width = canvasSize;
        canvas.height = canvasSize;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#FFFFFF";
        ctx.moveTo(277, 241);
        ctx.fillRect(275, 236, 10, 10);
        ctx.lineTo(90, 244);
        ctx.fillRect(90, 240, 10, 10);
        ctx.lineTo(40, 280);
        ctx.fillRect(40, 275, 10, 10);
        ctx.lineTo(195, 300);
        ctx.fillRect(195, 295, 10, 10);
        ctx.lineTo(300, 315);
        ctx.fillRect(300, 310, 10, 10);
        ctx.lineTo(277, 241);
        ctx.lineTo(264, 203);
        ctx.fillRect(262, 200, 10, 10);
        ctx.lineTo(290, 134);
        ctx.fillRect(290, 130, 10, 10);
        ctx.lineTo(333, 138);
        ctx.fillRect(330, 134, 10, 10);
        ctx.lineTo(367, 125);
        ctx.fillRect(364, 122, 10, 10);
        ctx.stroke();
    }

