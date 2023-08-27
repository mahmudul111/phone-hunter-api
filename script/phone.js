const loadPhones = async(searchPhone)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`)
    const data = await res.json();
    const phones = data.data;
    showPhones(phones);
}

const showPhones = phones=>{
    const phonesContainer = document.getElementById('phone-container')
    phonesContainer.textContent = '';
    phones.forEach(phone => {
        console.log(phone)
        const setPhones = document.createElement('div');
        setPhones.innerHTML = `
        <div class="card bg-gray-100 shadow-xl">
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title mt-3">${phone.brand}</h2>
        <h2 class="card-title mt-3">${phone.phone_name}</h2>
        <p class="mt-3">${phone.slug}</p>
        <div class="card-actions justify-center mt-3">
        <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>
        </div>
        `
        ;
        phonesContainer.appendChild(setPhones);
    });
}
const searchField = ()=>{
    const searchInput = document.getElementById('search-input');
    const getInput = searchInput.value ;
    searchInput.value = '';
    loadPhones(getInput);
}

// loadPhones();