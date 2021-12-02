import {useEffect,useState} from "react";
import CloudIcon from '@mui/icons-material/Cloud';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import StarHalfIcon from '@mui/icons-material/StarHalf';
 
const Weather = ()=> {
    const [city,setCity]=useState(null);
    const [search,setSearch]= useState("karachi");

    useEffect( ()=>{
        const fetchApi = async()=>{
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=70eefff73d1dfcf0e9ca4bfb45c3c9d2`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
            console.log(response)

        };

        fetchApi()
    },[search])
    return(
        <>
        <div className="box">
            <div className="inputData">
                <input 
                type="search"
                value={search}
                className="inputField"
                onChange={(event)=>{setSearch(event.target.value)} }/>
            </div>
            {!city? (
                <p className="errormsg">No Data Found</p>
            ):(
                <div >
                  <div className="info">
                      <h2 className="location">
                         {search}
                      </h2>
                      <h1>{city.temp}* deg/cel</h1>
                      <h3>min : {city.temp_min}*cel || max : {city.temp_max}* cel</h3>

              <div ><CloudIcon /> <CloudIcon />  <CloudIcon />  <CloudIcon />  <CloudIcon /> <CloudIcon /> <CloudIcon />  </div>
            <div><ThermostatIcon /> <ThermostatIcon /> <ThermostatIcon /><ThermostatIcon /> <ThermostatIcon /> <ThermostatIcon /> <ThermostatIcon /></div>
            <div><StarHalfIcon /> <StarHalfIcon /> <StarHalfIcon /> <StarHalfIcon /> <StarHalfIcon /><StarHalfIcon /><StarHalfIcon /></div>
            <div>Mon , Tues, Wed, Thurs , Fri , Sat ,Sun</div>
                      </div>  
                </div>
           

            )}
           



        </div>
        </>

    )
}

export default Weather
