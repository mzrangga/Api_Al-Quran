let result = "";

fetch("https://al-quran-8d642.firebaseio.com/data.json?print=pretty")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.forEach((doa) => {
            result += `
            <div class="col-md-4"
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${doa.nama}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${doa.arti}</h6>
                    <p class="card-text">${doa.keterangan.slice(0, 200)}</p>
                    <a href="${doa.audio}" class="card-link">Download mp3</a>
                </div>
            </div>
            </div>
            `;
        });

        document.getElementById("result").innerHTML = result;
    });

// Detail
// $('#result').on('click', '.see-detail', function () {

//     fetch("https://al-quran-8d642.firebaseio.com/data.json?print=pretty")
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (doa) {
//             $('.modal-body').html(
//                 `
//                 <div class="container-fluid"
//                     <div class="row"
//                         <div class="col-md-12"
//                         <ul class="list-group">
//                             <li class="list-group-item"><h3>` + doa.nama + `</h3></li>
//                         </ul>
//                         </div>
//                     </div>
//                 </div>
// `)
//         });
// });