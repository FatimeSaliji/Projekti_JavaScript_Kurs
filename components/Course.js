export default function Course(course_div){
    const api_url = `https://6599c7ed652b843dea532598.mockapi.io/programming_course/course`


    fetch('https://6599c7ed652b843dea532598.mockapi.io/programming_course/course')
    .then((res) => res.json())
    .then((data) => {
    
        let div = `<div class=row>`;
         
        data.forEach((facility) => {
            div += `<div>
              <div class=row>
    <div class = "col-5 mx-5">
        <h5 class="card-title mt-4 mb-4 text-primary-emphasis h3">${facility.Emri}</h5>
        <img src="${facility.Foto}" class="card-img-top " alt="">
      </div>
      <div class="col-5 offset-1">
        <p class="mt-5 text-primary-emphasis">${facility.Pershkrimi} </p>
       <b class="text-primary-emphasis">Çmimi mujor:</b> <p class="text-primary-emphasis">${facility.Cmimi}</p>
       <div>
       <p class="text-primary-emphasis">Syllabusi</p>
        
        <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
        <h2 class="accordion-header ">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            <b class="text-primary-emphasis">${facility.Emri}</b>
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body ">
          ${facility.Syllabusi}
          </div></div>
</div>
</div></div></br>

        <a href="contact.html" class="card-link btn btn-light"><i class="fa-solid fa-arrow-right-long"></i>&nbsp;${facility.Buton}</a>
        </div></div>
        
        
      
        </div>`;

      
        });
       
        document.getElementById('table').innerHTML = div;
        
    });
}