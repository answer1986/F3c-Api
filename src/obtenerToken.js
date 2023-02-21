function obtenerToken() {

	//obtiene un token realizando un request a la API

    let vReturn = false;
    credential = {};

    //esquema de request Login
    let requestLoginSchema = {"userName": "", "password": "", "companyVATId": ""};
    //se aplican los valores finales al esquema de request Login
    requestLoginSchema.userName = {userName};
    requestLoginSchema.password = {password};
    requestLoginSchema.companyVATId = {companyVATId};
    let requestBodyJson = JSON.stringify(requestLoginSchema);

	console.log("-----------------------<< Obtener Token >>-----------------------");

    let requestAPI = new XMLHttpRequest();

    requestAPI.open("POST", hostAPI + '/security/login', false);
    requestAPI.onreadystatechange=function() {
        if (requestAPI.readyState==4) {
        	let respondStatusCode = requestAPI.status;
            //se verifica al código status de respuesta
            if (respondStatusCode == 200 && requestAPI.responseText.length > 0) {
                vReturn = true;
                credential = JSON.parse(requestAPI.responseText);
                if (credential.token) {
                    console.log("token = " + credential.token);
                    console.log("expiration = " + credential.expiration);
                }
            }
            else {
                vReturn = false;
                let requestErrorMessage = '';
                if (requestAPI.responseText.length > 0) {
	                let requestError = JSON.parse(requestAPI.responseText);
	                if (requestError.message) {
	                    requestErrorMessage = requestError.message;
	                }	                	
                }
                console.log('error login ' + requestErrorMessage);
            }
            return vReturn;
        }
    }
    //se construyen los headers requeridos para el request
    requestAPI.setRequestHeader("Content-Type", "application/json");
    requestAPI.setRequestHeader("Accept", "application/json");
    requestAPI.send(requestBodyJson);
}
