
//Вывод данных из LocalStorage
function get(){
    //вывод данных из LocalStorage
    money = Number.parseInt(localStorage.getItem('money')) || money;
    speed = Number.parseInt(localStorage.getItem('speed')) || 0;
    cash_1 = Number.parseInt(localStorage.getItem('cash_1')) || 25;
    cash_2 = Number.parseInt(localStorage.getItem('cash_2')) || 50;
    cash_3 = Number.parseInt(localStorage.getItem('cash_3')) || 100;
    cash_4 = Number.parseInt(localStorage.getItem('cash_4')) || 200;
    cash_5 = Number.parseInt(localStorage.getItem('cash_5')) || 400;
    cash_6 = Number.parseInt(localStorage.getItem('cash_6')) || 800;
    rate_1 = Number.parseInt(localStorage.getItem('rate_1')) || rate_1;
    rate_2 = Number.parseInt(localStorage.getItem('rate_2')) || rate_2;
    rate_3 = Number.parseInt(localStorage.getItem('rate_3')) || rate_3;
    rate_4 = Number.parseInt(localStorage.getItem('rate_4')) || rate_4;
    rate_5 = Number.parseInt(localStorage.getItem('rate_5')) || rate_5;
    rate_6 = Number.parseInt(localStorage.getItem('rate_6')) || rate_6;
    //вывод данных в html
    //вывод монеток и скорости
    $('.money1').html(money);
    $('.speed1').html(speed)
    //вывод стоимости покупки улучшения 
    $('.number_1').html(cash_1)
    $('.number_2').html(cash_2)
    $('.number_3').html(cash_3)
    $('.number_4').html(cash_4)
    $('.number_5').html(cash_5)
    $('.number_6').html(cash_6)
}

var money = 0
var speed = 0
var updating = 1
var hasBeenLoaded = true;

var rate_1 = 25
var rate_2 = 50
var rate_3 = 100
var rate_4 = 200
var rate_5 = 400
var rate_6 = 800

var cash_1 = 25
var cash_2 = 50
var cash_3 = 100
var cash_4 = 200
var cash_5 = 400
var cash_6 = 500

var masiv = [
    'Создаем шапку',
    'Листаем слайдер',
    'Пишем текст',
    'Наполняем картинками',
    'Верстаем главный блок',
    'Подключаем CMS',
    'Внедряем систему платежей'
]
var grt = 0;

var advence_1 = false
var advence_2 = false
var advence_3 = false
var advence_4 = false
var advence_5 = false
var advence_6 = false

window.addEventListener('load', function() {
    if (hasBeenLoaded) {
        hasBeenLoaded = false;
        get();
        speed1();
        advence();
        displayWords(speed);
    }
});

//анимация появления текста при улучшение скорости
var globalDisplayWordInterval = '';
var el_info = document.querySelector('.info');
function displayWords(speed) {
    var finishSpeed = (5000 - speed*100) <= 0 ? 420 : (5000 - speed*100);
    if (speed !== 0) {
        globalDisplayWordInterval = setInterval(function() {
            var el = $(el_info.appendChild(document.createElement('span')));
            el.addClass('animations');
            el.css({transitionDuration: `${(5 - speed/5) < 0 ? 0.4 : (5 - speed/5)}s`})
            grt = grt < masiv.length - 1 ? ++grt : 0;
            el.html(masiv[grt])
            setTimeout(() => {
                el.addClass('active');
            }, 100);
            setTimeout(() => {
                el.remove();
            }, finishSpeed);
            // clearInterval(id);
        }, finishSpeed)
    }
}

//изменения цвета текста при покупки улучшения 
function advence(){
    advence_1 = localStorage.getItem('advence_1')
        if (advence_1 == 'true'){
            $('.advence-text-1').addClass('active')
        }

    advence_2 = localStorage.getItem('advence_2')
        if (advence_2 == 'true'){
            $('.advence-text-2').addClass('active')
        } 

    advence_3 = localStorage.getItem('advence_3')
        if (advence_3 == 'true'){
            $('.advence-text-3').addClass('active')
        }

    advence_4 = localStorage.getItem('advence_4')
        if (advence_4 == 'true'){
            $('.advence-text-4').addClass('active')
        }

    advence_5 = localStorage.getItem('advence_5')
        if (advence_5 == 'true'){
            $('.advence-text-5').addClass('active')
        }

    advence_6 = localStorage.getItem('advence_6')
        if (advence_6 == 'true'){
            $('.advence-text-6').addClass('active')
        }
}


//Продолжение улучшения после обнавления
function speed1() {
    setInterval(function(){
        let ff = Number.parseInt(localStorage.getItem('speed'))
        money += ff;
        $('.money1').html(money);
        localStorage.setItem('money', money)
        console.log(money)
    }, 1000)
}

// localStorage.removeItem('money')

//click
$('.click').on('click', function(event){
    console.log(typeof money, typeof updating);
    money = money + updating;
    console.log(money);
    $('.money1').html(money);
    check1()
})

//updating 1
function updating1(){
    setInterval(function (){
        $('.money1').html(money);
        $('.speed1').html(speed);
        console.log('gishgihi')
    }, 1000)
}

$('.click12').on('click', function(event){
    if(money >= cash_1) {
        //вычитаем стоимость
        money = money - rate_1;
        //увеличиваем стоимость
        rate_1 = rate_1 + 5;
        //увеличиваем минимум для покупки
        cash_1 = rate_1;
        //увеличиваем скорость
        speed = speed + 1;
        //измение цвета текста при нажатие 
        advence_1 = true;
        updating1()
        check2()
        $('.advence-text-1').addClass('active');
        $('.number_1').html(cash_1)
        localStorage.setItem('cash_1', cash_1)
        localStorage.setItem('rate_1', rate_1)
        localStorage.setItem('advence_1', advence_1)
        clearInterval(globalDisplayWordInterval);
        displayWords(speed);
    }
})

//updating 2
function updating2(){
    setInterval(function (){
        $('.money1').html(money);
        $('.speed1').html(speed);
    }, 1000)
}

$('.click13').on('click', function(event){
    if(money >= cash_2) {
        //вычитаем стоимость
        money = money - rate_2;
        //увеличиваем стоимость
        rate_2 = rate_2 + 10;
        //увеличиваем минимум для покупки
        cash_2 = rate_2;
        //увеличиваем скорость
        speed = speed + 10;
        //измение цвета текста при нажатие 
        advence_2 = true;
        updating2()
        check2()
        $('.advence-text-2').addClass('active');
        $('.number_2').html(cash_2)
        localStorage.setItem('cash_2', cash_2)
        localStorage.setItem('rate_2', rate_2)
        localStorage.setItem('advence_2', advence_2)
    }
})

//updating 3
function updating3(){
    setInterval(function (){
        $('.money1').html(money);
        $('.speed1').html(speed);
    }, 1000)
}

$('.click14').on('click', function(event){
    if(money >= cash_3) {
        //вычитаем стоимость
        money = money - rate_3;
        //увеличиваем стоимость
        rate_3 = rate_3 + 50;
        //увеличиваем минимум для покупки
        cash_3 = rate_3;
        //увеличиваем скорость
        speed = speed + 50;
        //измение цвета  текста при нажатие 
        advence_3 = true;
        updating3()
        check2()
        $('.advence-text-3').addClass('active');
        $('.number_3').html(cash_3)
        localStorage.setItem('cash_3', cash_3)
        localStorage.setItem('rate_3', rate_3)
        localStorage.setItem('advence_3', advence_3)
    }
})

//updating 4
function updating4(){
    setInterval(function (){
        $('.money1').html(money);
        $('.speed1').html(speed);
    }, 1000)
}

$('.click15').on('click', function(event){
    if(money >= cash_4) {
        //вычитаем стоимость
        money = money - rate_4;
        //увеличиваем стоимость
        rate_4 = rate_4 + 100;
        //увеличиваем минимум для покупки
        cash_4 = rate_4;
        //увеличиваем скорость
        speed = speed + 70;
        //измение цвета  текста при нажатие 
        advence_4 = true;
        updating4()
        check2()
        $('.advence-text-4').addClass('active');
        $('.number_4').html(cash_4)
        localStorage.setItem('cash_4', cash_4)
        localStorage.setItem('rate_4', rate_4)
        localStorage.setItem('advence_4', advence_4)
    }
})

//updating 5
function updating5(){
    setInterval(function (){
        money = money + 100;
        $('.money1').html(money);
        $('.speed1').html(speed);;
    }, 1000)
}

$('.click16').on('click', function(event){
    if(money >= cash_5) {
        //вычитаем стоимость
        money = money - rate_5;
        //увеличиваем стоимость
        rate_5 = rate_5 + 100;
        //увеличиваем минимум для покупки
        cash_5 = rate_5;
        //увеличиваем скорость
        speed = speed + 100;
        //измение цвета  текста при нажатие 
        advence_5 = true;
        updating5()
        check2()
        $('.advence-text-5').addClass('active');
        $('.number_5').html(cash_5)
        localStorage.setItem('cash_5', cash_5)
        localStorage.setItem('rate_5', rate_5)
        localStorage.setItem('advence_5', advence_5)
    }
})

//updating 6
function updating6(){
    setInterval(function (){
        money = money + 500;
        $('.money1').html(money);
        $('.speed1').html(speed);
    }, 1000)
}

$('.click17').on('click', function(event){
    if(money >= cash_6) {
        //вычитаем стоимость
        money = money - rate_6;
        //увеличиваем стоимость
        rate_6 = rate_6 + 500;
        //увеличиваем минимум для покупки
        cash_6 = rate_6;
        //увеличиваем скорость
        speed = speed + 500;
        //измение цвета  текста при нажатие 
        advence_6 = true;
        updating6()
        check2()
        $('.advence-text-6').addClass('active');
        $('.number_6').html(cash_6)
        localStorage.setItem('cash_6', cash_6)
        localStorage.setItem('rate_6', rate_6)
        localStorage.setItem('advence_6', advence_6)
    }
})


//Добавление окна прокачки в мобильной версии
$('#plus').on('click', function sha(event){
    $('#main').addClass('active')
    $('.main-updating').addClass('active')
})

$('#minus').on('click', function sha(event){
    $('#main').removeClass('active')
    $('.main-updating').removeClass('active')
})


//LocalStorage

// localStorage.removeItem(money)

//Сохранение данных по клику
function check1(){
    localStorage.setItem('money', money)
    localStorage.setItem('speed', speed)
    money = Number.parseInt(localStorage.getItem('money'));
    speed = Number.parseInt(localStorage.getItem('speed'));
}

//Сохранение данных после улучшения 
function check2(){
    setInterval(function set(){
        localStorage.setItem('money', money)
        localStorage.setItem('speed', speed)
        money = Number.parseInt(localStorage.getItem('money'));
        speed = Number.parseInt(localStorage.getItem('speed'));
    }, 1000)
}









