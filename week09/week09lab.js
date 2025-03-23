//step4 use the request (print stuff on page)
      
function reportResults(response){
    let browserData = 'NA';
    //console.log(response);
    if (response != 'error'){
        const myData = JSON.parse(response);   //change text to arrays and object
        console.log(myData);
        
        if (myData.current.cloud_cover >= 50){
            document.getElementById('cloud_cover').innerHTML = '☁️';
        } 
        else{
            document.getElementById('cloud_cover').innerHTML = '☀️';
        }
        document.getElementById('temp').innerHTML = myData.current.temperature_2m;
        document.getElementById('precip').innerHTML = myData.current.precipitation;
        
    }
    
}
endpoint = 'https://api.open-meteo.com/v1/forecast?latitude=43.053074&longitude=-76.15549&current=temperature_2m,precipitation,cloud_cover,apparent_temperature&temperature_unit=fahrenheit';


//step1 make a request object
const request = new XMLHttpRequest();  //makes an object to make a request  

//step2 check the status of the request

request.addEventListener('readystatechange', () => { //listening for a request to complete
    if (request.readyState === 4 && request.status === 200){ //if request is complete (4) and data loaded (200)
        //console.log(request, request.responseText);          //log what came back
        reportResults(request.responseText); 
    } else if (request.readyState === 4) {                   // if finished and didn't get status 200
        //console.log('Could not get data!');
        reportResults('error');
    }
    //console.log(request, request.readyState);
})

//step3 open the endpoint and sent the request
request.open('GET', endpoint);             //setup kind of request and enpoint
request.send();                             // actually getting data


