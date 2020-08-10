var productIDelement = document.getElementById('id')
if (productIDelement) productID = productIDelement.value; //Solo para la vista de edición

function previewImage(event) {
    var reader = new FileReader();

    reader.onload = function() {
        var output = document.getElementById('preview-img');
        output.src = reader.result;
        var output2 = document.getElementById('imageName');
        output2.value = event.target.files[0].name;
    }

    reader.readAsDataURL(event.target.files[0]);
}

function deleteImage() {
    var output = document.getElementById('preview-img');
    output.src = "/images/products/default-image.png";
    var output3 = document.getElementById('image');
    output3.value = null;
    var output3 = document.getElementById('imageName');
    output3.value = "deleted";
}