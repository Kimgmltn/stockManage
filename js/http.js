const post = function(url, param){
    const httpRequest =new XMLHttpRequest();
    let response = false;
    
    httpRequest.open('POST', url, false);

    httpRequest.onreadystatechange = () => {
        if(httpRequest.readyState === XMLHttpRequest.DONE){
          if(httpRequest.status === 200){
              response = true;
          }
        }
      }

    httpRequest.setRequestHeader('Content-type', 'application/json')
    httpRequest.setRequestHeader('Cache-Control', 'no-cache')
    httpRequest.send(param);

    return response;
  }





const get = function(url, param){
    const httpRequest =new XMLHttpRequest();
    let response;

    httpRequest.open('GET', url, false);
     
    httpRequest.onreadystatechange = () => {
      if(httpRequest.readyState === XMLHttpRequest.DONE){
        if(httpRequest.status === 200){
          response = JSON.parse(httpRequest.response);
        }
      }
    }
    
    if(param){
      httpRequest.send(param);
      
    }else{
      httpRequest.send();
    }

    return response;
}