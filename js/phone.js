const loadPhone = async (textPhone) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${textPhone}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)
}


const displayPhones = phones => {
    
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = '';
    phones.forEach(phone => {
        // console.log(phone)
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 p-4 shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);


    });
}

const handleSearch = () => {
    const searchFeild = document.getElementById('input-feild');
    const searchText = searchFeild.value;
    loadPhone(searchText)
}

