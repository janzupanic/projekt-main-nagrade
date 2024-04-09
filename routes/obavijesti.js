document.getElementById('forma-email').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new
    FormData(this);

    var jsonData= {};
    formData.forEach(function(value, key) {
        jsonData[key] = value;
    });

    $ayax({
        url: 'http://localhost:8080/competitions',
        method: 'POST',
        data: jsonData,
        success: function(response) {
            alert('Uspješno ste se prijavili za primanje obavijesti!');
        },
        error: function (xhr, status, error) {
            console.error(error);
            alert ("Došlo je do pogreške");
        }
    });

});