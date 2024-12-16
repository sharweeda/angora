
class class1{
    async getGames(){
    const api = await fetch(``)
    const response = await api.json();
    console.log(response);
    obj1.displayGames();
}

    displayGames(){
        let cartona = ``;
        for(let i= 0 ; i<100; i++){
            cartona +=`<div class="col-md-3">
            <div class="card" style="width: 18rem;">
                <img src="images/wraper.png" class="card-img-top" id="imege" alt="">
                <div class="card-body d-flex justify-content-between ">
                <span id="title">knscans</span>
                <span id="button"><button class="btn btn-primary">free</button></span>
            </div>
                <p class="text-center opacity-50 " id="desc">Lorem ipsum dolor sit amet </p>
                <div class="card-footer d-flex justify-content-between">
                <span id="data1">nscansa</span>
                <span id="data2">sacsaas</span>
            </div>
            </div>
        </div>`;
        document.getElementById('rowData').innerHTML = cartona;
        }
    }
}

let obj1 = new class1();
