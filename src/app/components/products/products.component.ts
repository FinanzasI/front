import { Component } from '@angular/core';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  productos: any[] = [
    {
      url: 'http://localhost:4200/simulator',
      nombre: 'Aceite',
      imagen: 'https://static.vecteezy.com/system/resources/previews/012/831/850/large_2x/vegetable-oil-with-olive-oil-in-different-bottle-for-cooking-isolated-on-white-background-with-clipping-path-photo.jpg'
    },
    {
      url: 'http://localhost:4200/simulator',
      nombre: 'Cereal',
      imagen: 'https://st2.depositphotos.com/1028911/5837/i/450/depositphotos_58374203-stock-photo-3d-corn-flakes-paper-package.jpg'
    },
    {
      url: 'http://localhost:4200/simulator',
      nombre: 'Caja Galletas',
      imagen: 'https://img.freepik.com/psd-premium/maqueta-empaque-panaderia-galletas_23-2150654300.jpg'
    },
    {
      url: 'http://localhost:4200/simulator',
      nombre: 'Gaseosa',
      imagen: 'https://www.shutterstock.com/image-photo/cola-bottle-isolated-on-white-600nw-2380571987.jpg'
    },
    {
      url: 'http://localhost:4200/simulator',
      nombre: 'Leche',
      imagen: 'https://st2.depositphotos.com/1028911/5625/i/450/depositphotos_56257637-stock-photo-3d-milk-carton-box-isolated.jpg'
    },
    {
      url: 'http://localhost:4200/simulator',
      nombre: 'Avena',
      imagen: 'https://img.freepik.com/fotos-premium/caja-paquetes-copos-avena-aislada-sobre-fondo-blanco-transparente_771335-65578.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1716681600&semt=ais_user'
    },
    {
      url: 'http://localhost:4200/simulator',
      nombre: 'Detergente',
      imagen: 'https://static4.depositphotos.com/1006820/302/i/450/depositphotos_3025519-stock-photo-detergent-bottle-isolated.jpg'
    },
    {
      url: 'http://localhost:4200/simulator',
      nombre: 'Chocolate',
      imagen: 'https://img.freepik.com/fotos-premium/caja-chocolates-chocolates-chocolates_206038-3857.jpg'
    },
  ];

  // bancos: any[] = [
  //   {
  //     url: 'https://www.viabcp.com/',
  //     nombre: 'Banco de Credito del Perú',
  //     imagen: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092020/bcp.png?XHZIW3kGfCdgSx7jk3cnTFN09wNjjEMQ&itok=Q1uLZqef'
  //   },
  //   {
  //     url: 'https://www.bbva.pe/',
  //     nombre: 'BBVA Perú',
  //     imagen: 'https://www.reclamo.pe/wp-content/uploads/2022/01/banco-bbva-peru.png'
  //   },
  //   {
  //     url: 'https://interbank.pe/',
  //     nombre: 'Interbank',
  //     imagen: 'https://play-lh.googleusercontent.com/vjYx0jloYA0BSr6fHPhvhhIbgieH0jmOV3fv_evGkj9bxxjITNO3Yhfux77bq2_HvBIF'
  //   },
  //   {
  //     url: 'https://www.scotiabank.com.pe/Personas/Default',
  //     nombre: 'Scotiabank',
  //     imagen: 'data:image/png;base64,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'
  //   },
  //   {
  //     url: 'https://www.banbif.com.pe/Personas',
  //     nombre: 'Banbif',
  //     imagen: 'https://www.logotypes101.com/logos/596/714E8ED288BC93AD732AC4BD6710E04B/banbif-03.png'
  //   },
  //   {
  //     url: 'https://www.pichincha.pe/',
  //     nombre: 'Banco Pichincha',
  //     imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Banco-Pichincha.png'
  //   },
  //   {
  //     url: 'https://www.bancognb.com.pe/',
  //     nombre: 'Banco GNB del Perú',
  //     imagen: 'https://media.licdn.com/dms/image/C4E0BAQGa3x2L8KP5ow/company-logo_200_200/0/1519871629162?e=2147483647&v=beta&t=p4pUI5SOrym0kMj15zT5USdzHt6rN29hk5j3rQBLH2k'
  //   },
  //   {
  //     url: 'https://www.bancom.pe/personas',
  //     nombre: 'Banco de Comercio',
  //     imagen: 'https://media.licdn.com/dms/image/C4E0BAQEeW-PzuVtk7g/company-logo_200_200/0/1614704913396?e=1688601600&v=beta&t=gBbF7zoxtGxqEzfN4QnL4YeKD5n8qZ-UW1ELU7pFp2o'
  //   },    
  // ];

  // financieras: any[] = [
  //   {
  //     url: 'https://www.efectiva.com.pe/',
  //     nombre: 'Financiera Efectiva',
  //     imagen: 'data:image/png;base64,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'
  //   },
  //   {
  //     url: 'https://www.crediscotia.com.pe/',
  //     nombre: 'Financiera CrediScotia',
  //     imagen: 'https://play-lh.googleusercontent.com/LUl_iSkrBrVmTYzYYOgWQ5n3aCWi8J-nnI4WDAzU9a_fdOIIQSGefguYuPKL3gMch0WN'
  //   },
  //   {
  //     url: 'http://www.micasita.com.pe/quienes-somos/',
  //     nombre: 'EDPYME miCasita',
  //     imagen: 'https://media.licdn.com/dms/image/C4E03AQGAgS_JORgFGw/profile-displayphoto-shrink_800_800/0/1533510458869?e=2147483647&v=beta&t=Xyg4Sx7h8p_xcCzX7Oznk3fiCo-lhiwKo4HyUWJ15is'
  //   },
  // ]

}
