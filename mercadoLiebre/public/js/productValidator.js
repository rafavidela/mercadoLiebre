 addEventListener('load', function() {


     let productForm = document.getElementById('productForm');
     productForm.addEventListener('submit', function(ebe) {


         // VALIDACIÓN DEL CAMPO NOMBRE DE PRODUCTO
         let nameProduct = document.getElementById('name');
         let namePContent = nameProduct.value;
         let namePLength = namePContent.length >= 5 ? true : false;
         let emptyName = document.getElementById('emptyName');
         let invalidName = document.getElementById('invalidName');

         if (namePContent == null || namePContent.length == 0 || /^\s+$/.test(namePContent)) {
             ebe.preventDefault();
             emptyName.innerHTML = '<p>' + 'Ingresá el nombre del producto' + '</p>';
             nameProduct.style.border = "1px solid #CF664F";
         } else {
             emptyName.innerHTML = '';
             nameProduct.style.border = "1px solid #ced4da";
         }

         if (namePContent != '' && !namePLength) {
             ebe.preventDefault();
             invalidName.innerHTML = '<p>' + 'Debe tener al menos 5 caracteres' + '</p>';
             nameProduct.style.border = "1px solid #CF664F";
         } else {
             invalidName.innerHTML = ''
             nameProduct.style.border = "1px solid #ced4da";
         }



         // VALIDACIÓN DEL CAMPO PRECIO
         let priceProduct = document.getElementById('price');
         let priceContent = priceProduct.value;
         let emptyPrice = document.getElementById('emptyPrice');
         let invalidPrice = document.getElementById('invalidPrice');

         if (priceContent == null || priceContent.length == 0 || /^\s+$/.test(priceContent)) {
             ebe.preventDefault();
             emptyPrice.innerHTML = '<p>' + 'Ingresá el precio del producto' + '</p>';
             priceProduct.style.border = "1px solid #CF664F";
         } else {
             emptyPrice.innerHTML = '';
             priceProduct.style.border = "1px solid #ced4da";
         }

         if (isNaN(priceContent) || priceContent < 0) {
             ebe.preventDefault();
             invalidPrice.innerHTML = '<p>' + 'El precio ingresado no es válido. Debe ser un número igual o mayor a 0' + '</p>';
             priceProduct.style.border = "1px solid #CF664F";
         } else {
             invalidPrice.innerHTML = ''
             priceProduct.style.border = "1px solid #ced4da";
         }


         // VALIDACIÓN DEL CAMPO CATEGORÍA
         let categoryProduct = document.getElementById('category');
         let categoryContent = categoryProduct.selectedIndex;
         let emptyCategory = document.getElementById('emptyCategory');

         if (categoryContent == null || categoryContent == 0) {
             ebe.preventDefault();
             emptyCategory.innerHTML = '<p>' + 'Ingresá la categoría del producto' + '</p>';
             categoryProduct.style.border = "1px solid #CF664F";
         } else {
             emptyCategory.innerHTML = '';
             categoryProduct.style.border = "1px solid #ced4da";
         }


         // VALIDACIÓN DEL CAMPO DESCUENTO
         let discountProduct = document.getElementById('discount');
         let discountContent = discountProduct.value;
         let emptyDiscount = document.getElementById('emptyDiscount');
         let invalidDiscount = document.getElementById('invalidDiscount');

         if (discountContent == null || discountContent.length == 0 || /^\s+$/.test(discountContent)) {
             ebe.preventDefault();
             emptyDiscount.innerHTML = '<p>' + 'Ingresá el descuento del producto' + '</p>';
             discountProduct.style.border = "1px solid #CF664F";
         } else {
             emptyDiscount.innerHTML = '';
             discountProduct.style.border = "1px solid #ced4da";
         }
         if (isNaN(discountContent) || discountContent < 0 || discountContent > 100) {
             ebe.preventDefault();
             invalidDiscount.innerHTML = '<p>' + 'El descuento ingresado no es válido. Debe ser un número entre 0 y 100' + '</p>';
             discountProduct.style.border = "1px solid #CF664F";
         } else {
             invalidDiscount.innerHTML = ''
             discountProduct.style.border = "1px solid #ced4da";
         }


         // VALIDACIÓN DEL CAMPO DESCRIPCIÓN  DE PRODUCTO
         let description = document.getElementById('description');
         let descriptionContent = description.value;
         let descriptionLength = descriptionContent.length >= 20 ? true : false;
         let emptyDescription = document.getElementById('emptyDescription');
         let invalidDescription = document.getElementById('invalidDescription');

         if (descriptionContent == null || descriptionContent.length == 0 || /^\s+$/.test(descriptionContent)) {
             ebe.preventDefault();
             emptyDescription.innerHTML = '<p>' + 'Ingresá una descripción del producto' + '</p>';
             description.style.border = "1px solid #CF664F";
         } else {
             emptyDescription.innerHTML = '';
             description.style.border = "1px solid #ced4da";
         }

         if (descriptionContent != '' && !descriptionLength) {
             ebe.preventDefault();
             invalidDescription.innerHTML = '<p>' + 'Debe tener entre 20 y 500 caracteres' + '</p>';
             description.style.border = "1px solid #CF664F";
         } else {
             invalidDescription.innerHTML = ''
             description.style.border = "1px solid #ced4da";
         }

         // VALIDACIÓN DE LA IMAGEN DE PRODUCTO
         //  let img = document.getElementById('image');
         let img = document.getElementById('imageName');
         let imgContent = img.value;
         extensionImg = (imgContent.substring(imgContent.lastIndexOf("."))).toLowerCase();
         let emptyImg = document.getElementById('emptyImg');
         let invalidImg = document.getElementById('invalidImg');

         if (imgContent == '' || imgContent == 'deleted' || imgContent == 'default-image.png') {
             event.preventDefault();
             emptyImg.innerHTML = "<p>" + 'Falta imagen de producto' + '</p>';
         } else {
             emptyImg.innerHTML = '';
         }

         if (imgContent != '' && imgContent != 'deleted' && extensionImg != '.jpg' && extensionImg != '.png' && extensionImg != '.jpeg' && extensionImg != '.gif') {
             ebe.preventDefault();
             invalidImg.innerHTML = "<p>" + 'Solo podés cargar archivos jpg, png, jpeg o gif' + '</p>';
         } else {
             invalidImg.innerHTML = "";
         }
     })


 })