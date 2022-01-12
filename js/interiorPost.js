$(()=>{
    let idPost = location.search.slice(8)
    $.ajax({
        method:'GET',
        url: `https://medium-7cfcc-default-rtdb.firebaseio.com/.json`
    }).done((resp)=>{
        console.log(resp)
        $('.text').text(resp.author)
    })

})
