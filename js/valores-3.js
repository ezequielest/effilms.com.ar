basicArray = [
    {
    service: 'VIDEO',
    description: 'Video completo del inmueble realizado con equipo profesional.',
    video: 'https://www.youtube.com/watch?v=2ezasH5vDJI&t=5s',
    timeProd: '',
    timeDelivery: '',
    since: false,
    priceShortProp: 110000,
    priceBigProp: 135000,
    price4kLess90: 160000,
    price4kMore90: 185000,
    promo: 110000,
    promo4k: 165000,
    add: '',
    isHighlighted: false,
    isPromo: false,
    isNew: false,
    isVideo: true,
    isOnlyPremiumHome: false,
    hours: 1,
    minutes: 0,
    delivery: 5
    },{
    service: 'DRON',
    description: 'Video de tomas aéreas realizadas con dron. Incluye efectos visuales.',
    timeProd: '',
    timeDelivery: '',
    video: 'https://www.youtube.com/watch?v=9HoWW46Ax4M',
    since: false,
    priceShortProp: 115000,
    promo: 110000,
    price4k: null,
    promo4k: null,
    add: '',
    isHighlighted: false,
    isPromo: false,
    isNew: false,
    isVideo: false,
    isOnlyPremiumHome: false,
    hours: 1,
    minutes: 0,
    delivery: 5
    },{
    service: 'FOTOGRAFÍA HDR',
    description: 'Pack de 10 o 25 fotos profesionales editadas del inmueble con cámara profesional.',
    slider: 'certiat',
    video: null,
    timeProd: '',
    timeDelivery: '',
    since: false,
    priceShortProp: 55000,
    priceBigProp: 85000,
    price4k: null,
    promo: 50000,
    promo4k: null,
    add: '',
    isHighlighted: false,
    isPromo: false,
    isNew: false,
    isVideo: false,
    isOnlyPremiumHome: false,
    hours: 1,
    minutes: 0,
    delivery: 5
    },
    {
    service: 'VIDEO + DRON', /* BASE INICIAL */
    description: 'Video completo del inmueble realizado con equipo profesional.',
    video: 'https://www.instagram.com/reel/C3GX_M-RBrO/',
    timeProd: '',
    timeDelivery: '',
    since: false,
    priceShortProp: 180000,
    priceBigProp: 220000,
    price4kLess90: 220000,
    price4kMore90: 260000,
    promo: 180000,
    promo4k: 235000,
    addPhoto: 60000,
    addAdaptation: 40000,
    add: '',
    isHighlighted: true,
    isPromo: false,
    isNew: false,
    isVideo: true,
    isOnlyPremiumHome: false,
    hours: 1,
    minutes: 30,
    delivery: 5
    },
    {
    service: 'FULL',
    description: 'VIDEO + DRON + FOTOGRAFÍA HDR. Cobertura completa.',
    video: 'https://www.instagram.com/reel/C3GX_M-RBrO/',
    timeProd: '',
    timeDelivery: '',
    since: false,
    priceShortProp: 240000,
    priceBigProp: 275000,
    price4kLess90: 285000,
    price4kMore90: 320000,
    promo: 215000,
    promo4k: 265000,
    add: '',
    isHighlighted: false,
    isPromo: false,
    isNew: false,
    isVideo: true,
    isOnlyPremiumHome: false,
    hours: 2,
    minutes: 30,
    delivery: 5
    }];

      standardArray = [
        {
        service: 'MODELADO',
        description: 'Video donde tu márca personal es la protagonista. Video con CÁMARA + DRON.',
        timeProd: '',
        timeDelivery: '',
        video: 'https://www.instagram.com/p/C30tK5gRU41',
        since: false,
        priceShortProp: 190000,
        priceBigProp: 235000,
        price4kLess90: 220000,
        price4kMore90: 275000,
        promo: 195000,
        promo4k: 245000,
        add: '',
        isHighlighted: false,
        isPromo: true,
        isNew: false,
        isVideo: true,
        isOnlyPremiumHome: false,
        hours: 1.5,
        minutes: 30,
        delivery: 5
      },
      {
        service: 'CONDUCCIÓN', /* BASE ESTANDARD */
        description: 'Video donde vos mismo presentas el inmueble. Video con CÁMARA + DRON.',
        video: 'https://www.instagram.com/p/C38diMsxW2I/',
        timeProd: '',
        timeDelivery: '',
        since: false,
        priceShortProp: 220000,
        priceBigProp: 265000,
        price4kLess90: 260000,
        price4kMore90: 285000,
        promo: 225000,
        promo4k: 275000,
        addAdaptation: 45000,
        addPhoto: 65000,
        add: '',
        isHighlighted: false,
        isPromo: true,
        isNew: false,
        isVideo: true,
        isOnlyPremiumHome: false,
        hours: 1.5,
        minutes: 30,
        delivery: 5
      }];

      premiumArray = [{
        service: 'INTERACTIVO',
        description: 'Video de alto impacto donde el guión es clave. Video con CÁMARA + DRON. Incluye efectos y transiciones profesionales',
        video: 'https://www.instagram.com/p/DE3K9qlRoOC/',
        timeProd: '',
        timeDelivery: '',
        since: false,
        priceShortProp: 240000,
        priceBigProp: 300000,
        price4kLess90: 280000,
        price4kMore90: 360000,
        promo: 255000,
        promo4k: 305000,
        add: '',
        isHighlighted: false,
        isPromo: false,
        isNew: false,
        isVideo: true,
        isOnlyPremiumHome: true,
        hours: 2,
        minutes: 0,
        delivery: 5
        },{
        service: 'AL DETALLE', /* BASE PREMIUM */
        description: 'Igual que el servicio INTERACTIVO, pero sumamos tomas detalle de la propiedad',
        video: 'https://www.instagram.com/p/DBzmJJexVhc/',
        timeProd: '',
        timeDelivery: '',
        since: false,
        priceShortProp: 290000,
        priceBigProp: 340000,
        promo: 285000,
        price4kLess90: 320000,
        price4kMore90: 395000,
        promo4k: 335000,
        addPhoto: 65000,
        addAdaptation: 50000,
        add: '',
        isHighlighted: false,
        isPromo: false,
        isNew: false,
        isVideo: true,
        isOnlyPremiumHome: true,
        hours: 2.5,
        minutes: 30,
        delivery: 5
        },
      /*{
        service: 'DRON FPV',
        description: 'Video de interiores realizado con dron.',
        video: 'https://www.youtube.com/embed/PT5w3ITbgBE',
        timeProd: '',
        timeDelivery: '',
        price: 350,
        promo: 300,
        price4k: null,
        promo4k: null,
        add: '',
        isHighlighted: false,
        isPromo: false,
        isNew: false,
        isVideo: false
      }*/,/*{
        service: 'OBRA FPV',
        description: 'Cobertura de obra con dron fpv.',
        video: null,
        timeProd: '',
        timeDelivery: '',
        price: 255.000,
        promo: 225.000,
        price4k: null,
        promo4k: null,
        add: '',
        isHighlighted: false,
        isPromo: true,
        isNew: false,
        isVideo: false
      },{
        service: 'FOTOS INSTITUCIONALES',
        description: 'Fotografías profesionales para tu equipo de trabajo.',
        video: null,
        timeProd: '',
        timeDelivery: '',
        price: '$80.000.-',
        promo: '$70.000.-',
        price4k: null,
        promo4k: null,
        add: '',
        isPromo: true,
        isNew: false,
        isVideo: false
      }*/];

      customArray = [
      {
        service: 'INSTITUCIONALES',
        description: 'Video institucional para tu empresa.',
        timeProd: '',
        timeDelivery: '',
        video: 'https://www.youtube.com/watch?v=WNKtXL7lc-o',
        since: true,
        priceShortProp: 390000,
        promo: null,
        price4k: null,
        promo4k: null,
        add: null,
        isPromo: false,
        isNew: false,
        isVideo: false
      },
      {
        service: 'CAMPOS',
        description: 'Producción audiovidual para campos.',
        timeProd: '',
        timeDelivery: '',
        video: 'https://www.youtube.com/watch?v=DxaDVne_Wks',
        since: true,
        priceShortProp: 350000,
        promo: null,
        price4k: null,
        promo4k: null,
        add: null,
        isPromo: false,
        isNew: false,
        isVideo: false
      },
      {
        service: 'EDIFICIOS',
        description: 'Producción audiovidual para edificios.',
        timeProd: '',
        timeDelivery: '',
        video: 'https://www.instagram.com/p/C4ysFMixPrq/',
        since: true,
        priceShortProp: 320000,
        promo: null,
        price4k: null,
        promo4k: null,
        add: null,
        isPromo: false,
        isNew: false,
        isVideo: false
      },
      {
        service: 'BARRIOS PRIVADOS',
        description: 'Producción audiovidual para barrios privados.',
        timeProd: '',
        timeDelivery: '',
        video: 'https://www.youtube.com/watch?v=GCE-opUPhmE',
        since: true,
        priceShortProp: 350000,
        promo: null,
        price4k: null,
        promo4k: null,
        add: null,
        isPromo: false,
        isNew: false,
        isVideo: false
      },      {
        service: 'EVENTOS',
        description: 'Cobertura de evento y video resumen con cámara profesional.',
        video: null,
        timeProd: '',
        timeDelivery: '',
        since: true,
        priceShortProp: 150000,
        promo: null,
        price4k: null,
        promo4k: null,
        add: '',
        isPromo: false,
        isNew: false,
        isVideo: false
      }];

      /*insta360Array = [
      {
        service: 'TOUR VIRTUAL',        
        description: 'Tour virtual del inmuble',
        timeProd: '',
        timeDelivery: '',
        video: null,
        price: '$40.000.- <span>c/100m2</span>',
        promo: '$30.000.- <span>c/100m2</span>',
        price4k: '$150.000.-',
        promo4k: '$120.000.-',
        add: '+4.000.- server',
        isPromo: false,
        isNew: false
      },
      {
        service: 'FOTOS 360',
        description: 'Pack de fotografías 360 editadas',
        timeProd: '',
        timeDelivery: '',
        video: null,
        price: '$40.000.- <span>c/100m2</span>',
        promo: '$30.000.- <span>c/100m2</span>',
        price4k: '$150.000.-',
        promo4k: '$120.000.-',
        add: null,
        isPromo: false,
        isNew: false
      },
      {
        service: 'MONTAJE 3D',
        description: 'Tomas reales de dron con integración 3D',
        timeProd: '',
        timeDelivery: '',
        video: 'https://www.instagram.com/p/C1VR7QbRExa/',
        price: '<span>desde</span> U$D 400.-',
        promo: null,
        price4k: '$150.000.-',
        promo4k: '$120.000.-',
        add: null
      }];*/

      othersServiceArray = [];

      cineArray = [
      {
        service: 'CINE',        
        description: '',
        timeProd: '',
        timeDelivery: '',
        video: null,
        price: null,
        promo: null,
        price4k: null,
        promo4k: null,
        add: null,
        isPromo: false,
        isNew: false,
        isVideo: true
      }];

      /*VIDEO PROP*/
      combosArray = [
      {
        service: 'VIDEO GO PRO',        
        description: 'CÁMARA GO PRO + DRON',
        timeProd: '',
        timeDelivery: '',
        video: null,
        price: '$90.000.-',
        promo: '$70.000.-',
        price4k: '$150.000.-',
        promo4k: '$120.000.-',
        add: null,
        isPromo: false,
        isNew: false,
        isVideo: true
      },
      {
        service: 'VIDEO PROFES.',        
        description: 'CÁMARA PROFESIONAL + DRON',
        timeProd: '',
        timeDelivery: '',
        video: 'https://www.instagram.com/p/C3A_6HwRi76/',
        price: '$150.000.-',
        promo: '$120.000.-',
        price4k: '$150.000.-',
        promo4k: '$120.000.-',
        add: null,
        isPromo: false,
        isNew: false
      },
      {
        service: 'FULL GO PRO',        
        description: 'FOTO + VIDEO + DRON CON GO PRO',
        timeProd: '',
        timeDelivery: '',
        video: null,
        price: '$110.000.-',
        promo: '$90.000.-',
        price4k: '$150.000.-',
        promo4k: '$120.000.-',
        add: null,
        isPromo: false,
        isNew: false
      },
      {
        service: 'FULL PROFESIONAL',        
        description: 'FOTO + VIDEO + DRON CON CÁMARA PROFESIONAL',
        timeProd: '',
        timeDelivery: '',
        video: null,
        price: '$200.000.-',
        promo: '$160.000.-',
        price4k: '$150.000.-',
        promo4k: '$120.000.-',
        add: null,
        isPromo: false,
        isNew: false
      }];

      function createCarousel(array, html) {
        let htmlVideo = '';
        array.forEach(el => {
            htmlVideo +=                     
        `<div class="card-value ${el.isHighlighted ? 'highlighted' : ''}">`
                if (el.isHighlighted) {
                  htmlVideo += `<div class="label-highlighted">RECOMENDADO</div>`
                }

                if (el.isPromo) {
                    htmlVideo += `<div class="label-highlighted">10% OFF</div>`
                  }

                if (el.isOnlyPremiumHome) {
                  htmlVideo += `<div class="label-highlighted green">PARA INMUEBLES <b>PREMIUM</b></div>`
                }
                htmlVideo += `<div class="header-card">
                    <div class="image-container gopro">
                        <div class="title">${el.service}</div>
                    </div>
                </div>
                <div class="content">
                    <div class="subtitle">${el.description}</div>`;

                    if (el.hours) {
                      htmlVideo += `<div style="font-size: 10px; font-weight: bold; color: #4d7d51;">Tiempo estimado de producción: ${el.hours}hs</div>`;
                    }

                    if (el.video) {
                        htmlVideo += `<a  target="_blank" href="${el.video}" class="link">> ver ejemplo</a>`;
                    }
                    if (el.slider) {
                        htmlVideo += `<a  onclick="showSlider('${el.slider}')" class="link">> ver ejemplo</a>`;
                    }
                    htmlVideo += `<div class="prices">`

                        if (el.price && el.price4k) {
                            htmlVideo += `<div class="border-right">`
                        } else {
                            htmlVideo += `<div>`
                        }

                        if (el.isVideo) {
                            htmlVideo += `HD`
                        }
                        if (el.priceShortProp) {
                            htmlVideo += '<div class="normal">';
                            if (el.since) {
                                htmlVideo += '<span>DESDE</span> ';
                            }  
                            
                            htmlVideo += `<div>`;
                            
                                if(el.priceBigProp) {
                                    htmlVideo += `<span>- 90 m2</span>`;  
                                }
                                
                                  
                            htmlVideo += `<div class="normal">$${el.priceShortProp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}.-</div>
                            </div></div>`;
                        } else {
                            htmlVideo += `<a class="ask-price" target="_blank" href="https://api.whatsapp.com/send?phone=542236688588&text=Hola, me gustaría pedirles un presupuesto." target="_blank">CONSULTAR</a>`;                       
                        }

                        if (el.priceBigProp) {
                            htmlVideo += 
                            `<div class="combo">
                                <span>+ 90 m2</span> 
                                <div class="normal">${el.priceBigProp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
                            </div>`
                        }

                        /*if (el.promo) {
                            htmlVideo += 
                            `<div class="combo">
                                <span>+ 90 m2</span> 
                                <div>${el.promo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span>c/u</span></div>
                            </div>`
                        }*/
                        if (el.add) {
                            htmlVideo += `<div><span>${el.add}</span></div>`;
                        } 
                    htmlVideo+=`</div>`
                        if (el.price4kLess90) {
                            htmlVideo += `<div> 4k`;
                                htmlVideo += `<div class="normal">
                                                <span>- 90 m2</span>
                                                <div class="normal"><span></span>$${el.price4kLess90.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}.-
                                                </div>
                                                </div>
                                            `;
                        }

                        if (el.price4kMore90) {
                                htmlVideo += `<div class="combo">
                                                <span>+ 90 m2</span>
                                                <div class="normal"><span></span>$${el.price4kMore90.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}.-
                                                </div>
                                             </div></div>
                                            `;
                        }

                        /*if (el.promo4k) {
                            htmlVideo += 
                            `<div class="combo">
                                <span>3 x mes</span> 
                                <div>${el.promo4k.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span>c/u</span></div>
                            </div>
                        </div>`
                        }*/
                    htmlVideo+=`
                    </div>
                </div>
            </div>`;
        });

        document.getElementById(html).innerHTML = htmlVideo;
      }

      var prodsConfig = {
        cantProdSelected: 2,
        minProds: 2,
        maxProds: 4
    }

    /*BASEPRICE ES EL VALOR NETO POR PRODUCCION (CON DESCUENTO), CON ESTE SE CALCULA EL AHORRO*/
    var plans = [{
        id: 'initial',
        type: 'initial',
        description: 'INICIAL',
        basePrice: 160000, /*CADA VIDEO CUESTA 160.000 en esta promo*/
        finalPrice: 0,
        savings: 0,
        priceAddingPhoto: 0,
        savingAddingPhoto: 0,
        priceAddingAdaptation: 0,
        savingAddingAdaptation: 0,
        hasPhoto: false
    },
    {
        id: 'standard',
        type: 'standard',
        description: 'ESTANDAR',
        basePrice: 200000, /*20% OFF*/
        basePhoto: 25000,
        finalPrice: 0,
        savings: 0,
        priceAddingPhoto: 0,
        savingAddingPhoto: 0,
        priceAddingAdaptation: 0,
        savingAddingAdaptation: 0,
        hasPhoto: false
    },{
        id: 'premium',
        type: 'premium',
        description: 'TRENDING',
        basePrice: 260000,
        finalPrice: 0,
        savings: 0,
        priceAddingPhoto: 0,
        savingAddingPhoto: 0,
        priceAddingAdaptation: 0,
        savingAddingAdaptation: 0,
        hasPhoto: false
    }];

    function incressProd() {
        if (prodsConfig.cantProdSelected <prodsConfig.maxProds) {
            ++prodsConfig.cantProdSelected;

            console.log('price ', plans)

            updateFinalPrice();
            updateCantProds();
        }
    }

    function decreaseProd() {
        if (prodsConfig.cantProdSelected > prodsConfig.minProds) {
            --prodsConfig.cantProdSelected;
            console.log('price ', plans)
            updateFinalPrice();
            updateCantProds();
        }
    }

    function updateFinalPrice() {
        plans.forEach(plan => {


                    plan.finalPrice = plan.basePrice * prodsConfig.cantProdSelected;

                    if (plan.id === 'initial') {
                        plan.savings = (basicArray[3].priceBigProp *  prodsConfig.cantProdSelected) - plan.finalPrice;
                    }

                    if (plan.id === 'standard') {
                        plan.savings =  (standardArray[1].priceBigProp * prodsConfig.cantProdSelected) - plan.finalPrice;
                    }

                    if (plan.id === 'premium') {
                        plan.savings = (premiumArray[0].priceBigProp * prodsConfig.cantProdSelected) - plan.finalPrice; //trending
                    }

                    const addPhotoIsChequed = document.getElementById(plan.type + "_photo").checked;
                    const addAdaptationIsChequed = document.getElementById(plan.type + "_adaptation").checked;

                    if (addPhotoIsChequed) {
                      updateAddPhotoPrice(plan.type);
                    }

                    if (addAdaptationIsChequed) {
                      updateAddAdaptationPrice(plan.type)
                    }


                    /*

                    //CALC ADDING PHOTO
                    plan.priceAddingPhoto = plan.finalPrice + basicArray[3].addPhoto * prodsConfig.cantProdSelected;

                    savingPhoto = (basicArray[2].priceBigProp * prodsConfig.cantProdSelected) - (basicArray[3].addPhoto * prodsConfig.cantProdSelected)
                    plan.savingAddingPhoto = plan.savings + savingPhoto;

                    //CALC ADDING ADAPTATION
                    plan.priceAddingAdaptation = plan.finalPrice + basicArray[3].addAdaptation * prodsConfig.cantProdSelected;

                    plan.savingAddingAdaptation = plan.savings;
                    //plan.savingAddingPhoto = plan.savings + savingAdaptation;
                    */
          

                document.getElementById(plan.id).innerHTML=plan.finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                document.getElementById(plan.id + 'Discont').innerHTML=plan.savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");;
        });
    }

    function updateAddPhotoPrice(planType) {

        const plan = plans.find((el) => {
          return el.type === planType
        })
        
        const addPhotoIsChequed = document.getElementById(planType + "_photo").checked;

        if (addPhotoIsChequed) {
          plan.finalPrice = plan.finalPrice + basicArray[3].addPhoto * prodsConfig.cantProdSelected;

          saving = (basicArray[2].priceBigProp * prodsConfig.cantProdSelected) - (basicArray[3].addPhoto * prodsConfig.cantProdSelected)
          plan.savings = plan.savings + saving;
        } else {
          plan.finalPrice = plan.finalPrice - basicArray[3].addPhoto * prodsConfig.cantProdSelected;

          saving = (basicArray[2].priceBigProp * prodsConfig.cantProdSelected) - (basicArray[3].addPhoto * prodsConfig.cantProdSelected)
          plan.savings = plan.savings - saving;
        }

        /*if (addPhotoIsChequed) {
          price = plan.priceAddingPhoto
          saving = plan.savingAddingPhoto
        } else {
          price = plan.finalPrice
          saving = plan.savings
        }*/

        document.getElementById(plan.id).innerHTML=plan.finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        document.getElementById(plan.id + 'Discont').innerHTML=plan.savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function updateAddAdaptationPrice(planType) {

        const plan = plans.find((el) => {
          return el.type === planType
        })
        
        const addAdaptationIsChequed = document.getElementById(planType + "_adaptation").checked;


        if (addAdaptationIsChequed) {
          plan.finalPrice = plan.finalPrice + basicArray[3].addAdaptation * prodsConfig.cantProdSelected;

          //saving = (basicArray[2].priceBigProp * prodsConfig.cantProdSelected) - (basicArray[3].addAdaptation * prodsConfig.cantProdSelected)
          //plan.savings = plan.savings + saving;
        } else {
          plan.finalPrice = plan.finalPrice - basicArray[3].addAdaptation * prodsConfig.cantProdSelected;

          //saving = (basicArray[2].priceBigProp * prodsConfig.cantProdSelected) - (basicArray[3].addAdaptation * prodsConfig.cantProdSelected)
          //plan.savings = plan.savings - saving;
        }

        /*if (addAdaptationIsChequed) {
          price = plan.priceAddingAdaptation
          saving = plan.savingAddingAdaptation
        } else {
          price = plan.finalPrice
          saving = plan.savings
        }*/

        document.getElementById(plan.id).innerHTML=plan.finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        //document.getElementById(plan.id + 'Discont').innerHTML=plan.savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

    function updateCantProds() {
        let elements = document.getElementsByClassName('cant-prod')

        for(var i=0; i<elements.length; i++) {
            elements[i].innerHTML = prodsConfig.cantProdSelected;
        }
    }

    updateFinalPrice();