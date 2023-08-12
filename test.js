
//model

let clothes = [


    {name:'T-shirt',id:1,price:'$30'},
    {name:'Ipod',id:2,price:'$30'},
    {name:'Jacket',id:3,price:'$30'},
    {name:'Bottle',id:4,price:'$30'},
    {name:'Glasses',id:5,price:'$30'},
    {name:'Cap',id:6,price:'$30'},
    {name:'Bag',id:7,price:'$30'},
    {name:'Snikkers',id:8,price:'$30'},
    {name:'Ipod',id:9,price:'$30'},
    
];

let shoppingChart = []

function additem(button_id){
    clothes.filter(function(cloth){
        if( button_id == cloth.id){
            shoppingChart.push({name:cloth.name,
                price:cloth.price,
            id:cloth.id})
            
           return true
        }else{
            
           return false;
        }
    });
}

function deleteItem(deleteButton_id){
    shoppingChart = shoppingChart.filter(function(cloth){
        if(deleteButton_id == cloth.id){
            return false
        }else{
            return true
        }

        
    })
}

  
//visual  (render)

function render(){

    let dispaly = document.getElementById('shoppingChart');
    dispaly.innerText = '';

    shoppingChart.forEach(function(cloth){

        
        let element = document.createElement('div');
        element.innerText = cloth.name;

        let element2 = document.createElement('div'); 
        element2.innerText = cloth.price;  
        
        let element3 = document.createElement('div');
        
        dispaly.appendChild(element);
        dispaly.appendChild(element2);
        dispaly.appendChild(element3);

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'DELETE';
        element3.appendChild(deleteButton);
        deleteButton.id = cloth.id;
        deleteButton.onclick=deleteFromCart; 

    });

}


//control

function addtochart(event){
    let button_id = event.target.id;


    additem(button_id)
    render()

}

function deleteFromCart(event){

    

    let deleteButton_id = event.target.id;

    console.log(deleteButton_id)

    deleteItem(deleteButton_id);
    render();
    

}


