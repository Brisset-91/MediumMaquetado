
$(document).ready(function () {
    // $('.class')
    // $('#id')
    // $('p')
    // $('p[id="dog"]')
    // $('p[title="dog"]')
    // $('p[class="dog"]')
    // $('p:first')
    // $('p:last')

    let temp = ''
    for(i = 5; i <= 14; i++) {
        temp += `<li>item ${i}</li>`
    }
    $('ol').prepend(temp)
    $('ul').append(temp)

    $('.content').html('<p>Hola koder</p>')

    $('.content').css({
        'background-color': '#333',
        'color': '#fff'
    })

    $('body').prepend('<h1>Empty</h1>')
    $('body h1').text('Aprendiendo jQuery')

    // traversing
    // hermano anterior anterior
    $('.item__selected').prev().text('item prev')
    $('.item__selected').next().text('item next')

    // seleccionar el padre
    $('.item__selected').parent()
    $('.item__selected').closest('ul')

    // seleccionar ancestro 
    $('.item__trav').closest('.traversing').addClass('open')

    /**
     * Agregar al strong la clase bold
     * El elemento con la clase text__container, agregar el inicio  <b>Title text</b>
     * Agregar al container la clase open
     * Por defecto el container no debe estar visible
     * cuando cambiemos la clase open, debe de mostrarse
     */

    // $('.container strong').addClass('bold')
    // $('.text__container').prepend('<b>Title text</b>')
    // // $('.container').addClass('open')
    // $('.container').addClass('open').show().attr('id','container')

    // on line
    $('.container strong').addClass('bold')
    .closest('.text__container').prepend('<b>Title text</b>')
    .closest('.container').addClass('open')
    .css('display','block')
    // .closest('.container').addClass('open')


    


})