function selectOption(){
    document.getElementById('productDiv').style.display = 'none';
    document.getElementById('summarytable').style.display = 'none';

    var selectBox = document.getElementById("category");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    var subcategorydiv = document.getElementById('subcategory');
    let a = "'";
    if(selectedValue === 'Vehicles'){
        var htmlContent ='';
        htmlContent += '<div onclick="clickingOnSubcategory('+ "'פרטי'" +')" class="item"><img width="100px" height="100px" src="../images/yad2Form/private.jpg"></div>';
        htmlContent += '<div onclick="clickingOnSubcategory('+ "'מסחרי'" +')" class="item"><img width="100px" height="100px" src="../images/yad2Form/van-commercial.jpg"></div>';
        htmlContent += '<div onclick="clickingOnSubcategory('+ "'גיפים'" +')" class="item"><img width="100px" height="100px" src="../images/yad2Form/jeep.jpg"></div>';
        htmlContent += '<div onclick="clickingOnSubcategory('+ "'אופנועים'" +')" class="item"><img width="100px" height="100px" src="../images/yad2Form/motorbike.jpg"></div>';
        subcategorydiv.innerHTML = htmlContent;
        document.getElementById('formCategory').value = "רכבים";
    }
    if(selectedValue === 'real estate'){
        
        var htmlContent ='';
        htmlContent += '<div onclick="clickingOnSubcategory('+ "'מכירה'" +')" class="item"><img width="100px" height="100px" src="../images/yad2Form/sale.jpg"></div>';
        htmlContent += '<div onclick="clickingOnSubcategory('+ "'השכרה'" +')" class="item"><img width="100px" height="100px" src="../images/yad2Form/renting.jpg"></div>';
        htmlContent += '<div onclick="clickingOnSubcategory('+ "'מסחרי'" +')" class="item"><img width="100px" height="100px" src="../images/yad2Form/commercial.jpg"></div>';
        htmlContent += '<div onclick="clickingOnSubcategory('+ "'עסקים למכירה'" +')" class="item"><img width="100px" height="100px" src="../images/yad2Form/business.jpg"></div>';
        subcategorydiv.innerHTML = htmlContent;
        document.getElementById('formCategory').value = 'נדל"ן';
    }
}

function clickingOnSubcategory(subcategory){
    document.getElementById('formSubcategory').value=subcategory;
    document.getElementById('productDiv').style.display = 'flex';
    document.getElementById('summarytable').style.display = 'none';
    clearAll();
}

function createSummaryTable(files){
    let images = document.getElementById('imagesDiv'); 
    images.innerHTML = '';

    let category = document.getElementById('formCategory').value;
    document.getElementById('summarytableCategory').innerText = category
    
    let subcategory = document.getElementById('formSubcategory').value;
    document.getElementById('summarytableSubategory').innerText = subcategory;

    let name = document.getElementById('formName').value;
    document.getElementById('summarytableName').innerText = name;
    
    let description = document.getElementById('formDescription').value;
    document.getElementById('summarytableDescription').innerText = description;
    
    let address = document.getElementById('formAddress').value;
    document.getElementById('summarytableAddress').innerText = address;

    let condition='';
    var conditions = document.getElementsByName('condition');
    
    for(let i=0;i<conditions.length;i++)
        if(conditions[i].checked)
            condition = conditions[i].value;
    if(condition === 'brandNew')
        condition = 'חדש לגמרי';
    if(condition === 'likeNew')
        condition = 'כמו חדש';
    if(condition === 'used')
        condition = 'משומש';
    if(condition === 'badCondition')
        condition = 'מצב גרוע';
    document.getElementById('summarytablCondition').innerText = condition;

    // Loop through each selected file
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const img = document.createElement('img');
        img.src = '../images/yad2Form/'+file.name;
        img.style.height ='100px';
        img.style.width = '100px';
        img.style.padding = '3px';
        images.appendChild(img);
    }
    document.getElementById('productDiv').style.display = 'none';
    document.getElementById('summarytable').style.display = 'flex';
}
function clearAll(){
    document.getElementById('formName').value = '';
    document.getElementById('formDescription').value ='';
    document.getElementById('formAddress').value = '';
    document.getElementsByName('condition').selectedIndex = 'none';
    document.getElementById('fileInput').value=null;
}