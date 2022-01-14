$(()=>{
    let idPost = location.search.slice(8)
    $.ajax({
        method:'GET',
        url: `https://medium-7cfcc-default-rtdb.firebaseio.com/${idPost}.json`
    }).done((resp)=>{
        console.log(resp)
        let temp = ''
        let formFile = resp.formFile                
        temp += `
        <div>
        <img src="${formFile}" class="card-image" alt="..." width="100%" height="400rem">
        </div>
        `
        $('#imagePost').html(temp)
        $('.titlePost').text(resp.title)
        $('.authorPost').text(resp.author)
        $('.timePost').text(resp.readingTime + " min. read")
        $('.datePost').text(resp.date)
        $('.textPost').text(resp.postContent)
    })

})