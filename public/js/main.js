const submitBtn=document.getElementById("submitBtn");
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name");
const temp_status=document.getElementById("temp_status")
const temp_real_val=document.getElementById("temp_real_val");

const datahide=document.querySelector(".middle_layer");
const getinfo= async(event)=>{
    event.preventDefault();
    let cityval=cityName.value;
    if(cityval===""){
         city_name.innerText=`Please write before search`;
         datahide.classList.add("data_hide");

    }else{
        try{

            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=728f6ce7942723cd09156762b5676b0b`
            const response=await fetch(url);
            const data=await response.json();
            const arrdata=[data];
            console.log(data);
            city_name.innerText=`${arrdata[0].name}, ${arrdata[0].sys.country}`
            temp_real_val.innerText=arrdata[0].main.temp;
           

            const tempmood=arrdata[0].weather[0].main;

            if(tempmood=="Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if(tempmood=="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            if(tempmood=="Clear"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: #eccc68;'></i>";
            }
            if(tempmood=="Clear"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
         datahide.classList.remove("data_hide");

        }
        catch (error) {
         city_name.innerText=`Please write city name`;
         datahide.classList.add("data_hide");


        }
    }
}
submitBtn.addEventListener('click', getinfo)