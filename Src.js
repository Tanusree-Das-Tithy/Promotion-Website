const data=[
    {
       title:"Introduction",
       secty:"Host Intro",
       Host:"Hi Guys, my name is Sannah and I want to talk about my products today",
       Note:"Be Passionate and engazing style",
       img:"Images/image4.jpg",
       timer:"20:01",
       total:"1m",
       color:" ",
       size:" ",
       rrp:" ",
       offer:" ",
       quantity:" ",
       acolor:" ",
       asize:" ",
       arrp: " ",
       aoffer: " ",
       aquantity: " ",
     
   

    },
    {
        title:"Product",
        secty:"Iphone 14pro max",
        Host:"The new iphone 14 has been released",
        Note:`
        1.Lock Screen gallery<br>
        2.Lock Screen switching<br>
        3.Lock Screen editing<br>
        4.Stylized date and time<br>
        5.Multilayered photo effect<br>
        6.Suggested photos<br>
        7.Photo shuffle<br>
        8.Photo styles.
        `,

        img:"Images/image5.jpg",
        timer:"20:02",
        total:"5m",
        color:"Colours",
        size:"Size",
        rrp:"RRP",
        offer:"Offer",
        quantity:"Quantity",
        acolor:"Matte Black",
        asize:"N/A",
        arrp: "$2000",
        aoffer: "$1000(50%)",
        aquantity: "45",

    },
{
    title:"Promotion",
    secty:"20%off on order 100",
    Host:`We are excited to announce that we are offering a Christmas Promotion of 20% discunt on over 100
    orders. It's a christmas promotion.<br><br>

This is a great opportunity for you to get in hands some amazing product.
    `,
    Note:`
    1.Only applicable for one order per person<br>
    2.Promo only active for livestream<br>
    3.Only for christmas eve.
    `,

    img:"Images/image1.jpg",
    timer:"20:00",
    total:"1m",
    color:" ",
    size:" ",
    rrp:" ",
    offer:" ",
    quantity:" ",
    acolor:" ",
    asize:" ",
    arrp: " ",
    aoffer: " ",
    aquantity: " ",
},

   ];
   
   function get(id){
    return document.getElementById(id);
}

 let atable= get('table');

 let section=get('asection');

 let title= get('title');

 let color=get('col');
 let size=get('size');
 let quantity=get('quan');
 let rrp= get('rrp');
 let offer= get('offer');

 let acolor=get('acol');
 let asize=get('asize');
 let aquantity=get('aquan');
 let arrp= get('arrp');
 let aoffer= get('aoffer');
  
    let img=get('img');
    let host=get('host');
    let note=get('notes');
    let secti=get("sec");
    let timer= get('timer');
     let total=get('total');
  let index=0;

   
   function loadpage(){
   
    const info=data[0];
   

    title.innerHTML=info.title;
    secti.innerHTML=info.secty;
    timer.innerHTML=info.timer;
    total.innerHTML=info.total;
    host.innerHTML=info.Host;
    note.innerHTML=info.Note;
    img.src=info.img;

    color.innerHTML=info.color;
    acolor.innerHTML=info.acolor;
    size.innerHTML=info.size;
    asize.innerHTML=info.asize;
    quantity.innerHTML=info.quantity;
    aquantity.innerHTML=info.aquantity;
    rrp.innerHTML=info.rrp;
    arrp.innerHTML=info.arrp;
    offer.innerHTML=info.offer;
    aoffer.innerHTML=info.aoffer;
   }

function create(){
    const node= atable;
   
    const clone= node.cloneNode(true);
    section.appendChild(clone);
    const info1=data[index];
    title.innerHTML=info1.title;
    secti.innerHTML=info1.secty;
    console.log(info1.secty);
    
    host.innerHTML=info1.Host;
    note.innerHTML=info1.Note;
    timer.innerHTML=info1.timer;
    total.innerHTML=info1.total;
    img.src=info1.img;

    color.innerHTML=info1.color;
    acolor.innerHTML=info1.acolor;
    size.innerHTML=info1.size;
    asize.innerHTML=info1.asize;
    quantity.innerHTML=info1.quantity;
    aquantity.innerHTML=info1.aquantity;
    rrp.innerHTML=info1.rrp;
    arrp.innerHTML=info1.arrp;
    offer.innerHTML=info1.offer;
    aoffer.innerHTML=info1.aoffer;

}

loadpage();
for(index=1;index<data.length;index++)
{
    create();
}


