const loadPhones = async(searchPhone, isShowAll)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`)
    const data = await res.json();
    const phones = data.data;
    showPhones(phones, isShowAll);
}

const showPhones = (phones, isShowAll)=>{
    const phonesContainer = document.getElementById('phone-container')
    phonesContainer.textContent = '';
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 12){
        showAllContainer.classList.remove('hidden')
    }else{
        showAllContainer.classList.add('hidden')
    }
    if(!isShowAll){
        phones = phones.slice(0,12);
    }
    phones.forEach(phone => {
        // console.log(phone)
        const setPhones = document.createElement('div');
        setPhones.innerHTML = `
        <div class="card bg-gray-100 shadow-xl">
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title mt-3 ">${phone.brand}</h2>
        <h2 class="card-title mt-3 ">${phone.phone_name}</h2>
        <div class="card-actions justify-center mt-3">
        <button onclick="showModal('${phone.slug}')" class="btn btn-primary">Show Details</button>
        </div>
        </div>
        </div>
        `
        ;
        phonesContainer.appendChild(setPhones);

    });
    loadingData(false);
}
const searchField = (isShowAll)=>{
    loadingData(true);
    const searchInput = document.getElementById('search-input');
    const getInput = searchInput.value ;
    // searchInput.value = '';
    loadPhones(getInput, isShowAll);
}

const loadingData = (isLoading)=>{
    const loadingIcon = document.getElementById('loading-data');
    if(isLoading){
        loadingIcon.classList.remove('hidden')
    }else{
        loadingIcon.classList.add('hidden');
    }
}
const showModal =async (id)=>{
    const resp = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await resp.json();
    const displayData = data.data;
    showDetails(displayData)

}
const showDetails = (phone)=>{
    const modalDiv = document.getElementById('modal-div');
    modalDiv.innerHTML = `
    <dialog id="show_detail_modal" class="modal modal-bottom sm:modal-middle">
    <form method="dialog" class="modal-box">
    <figure><img src="${phone.image}" alt="Shoes" class="justify-center mb-5 ml-36" /></figure>
    <h3 class="font-bold text-lg mb-3 text-center">${phone.name}</h3>
    <p class="py-4 text-center">Press ESC key or click the button below to close</p>
    <div class="modal-action">
    <button class="btn">Close</button>
    </div>
    </form>
</dialog>
    `
    ;
    
    show_detail_modal.showModal();
}

const showAllBtn = ()=>{
    searchField (true);

}

// loadPhones();