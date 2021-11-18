//variable ku id store
let unitecomicscalculateBtn = document.getElementById('unit-ecomics-calculate');
sellingBtn = document.getElementById('selling'),
cogsBtn = document.getElementById('cogs'),
 grossmarginBtn = document.getElementById('grossmargin'),
 salesmarketingBtn = document.getElementById('salesmarketing'),
 operationsBtn = document.getElementById('operations'),
 netmarginBtn = document.getElementById('netmargin');
let sellingInput,cogsInput,grossmarginInput,salesmarketingInput,operationsInput,netmarginInput;
//function 
function calculatefun(e)
{
    e.preventDefault();
    //grossmargin
    sellingInput =sellingBtn.value;
    cogsInput =cogsBtn.value;
    
    grossmarginInput =sellingInput - cogsInput;
    grossmarginBtn.value = grossmarginInput;
    console.log(grossmarginInput);
    //salesmarketing
    salesmarketingInput = salesmarketingBtn.value;
    operationsInput = operationsBtn.value;
    netmarginInput = grossmarginInput- salesmarketingInput- operationsInput;
    netmarginBtn.value = netmarginInput;
    console.log(netmarginInput);
}

unitecomicscalculateBtn.addEventListener('submit',calculatefun)