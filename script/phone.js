const loadData = async()=>{
    const respon = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await respon.json();
    const showData = data.data
    for(const show of showData){
        console.log(show.slug)
    }
    
}
loadData();