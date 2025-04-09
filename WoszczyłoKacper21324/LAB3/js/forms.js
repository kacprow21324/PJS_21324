var error=false;
                    
                    function vImiNaz(){
                        var contactName = document.getElementById("imieNazwisko");
                        if (contactName.value == ""){
                            document.getElementById("errorIN").className="d-block invalid-feedback";
                            contactName.classList.add("is-invalid");
                            contactName.classList.remove("is-valid");
                            error=true;
                        } else {
                            document.getElementById("errorIN").className="d-none";
                            contactName.classList.add("is-valid");
                            contactName.classList.remove("is-invalid");
                        }
                    }

                    function vAdrEma(){
                        var contactEmail = document.getElementById("email");
                        document.getElementById("errorFAE").className="d-none";
                        document.getElementById("errorAE").className="d-none";
                        if (contactEmail.value == ""){
                            error=true;
                            document.getElementById("errorAE").className="d-block invalid-feedback";
                            contactEmail.classList.add("is-invalid");
                            contactEmail.classList.remove("is-valid");
                            
                        } else {
                            document.getElementById("errorAE").className="d-none";
                            contactEmail.classList.add("is-valid");
                            contactEmail.classList.remove("is-invalid");
                            var email = contactEmail.value;
                            var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
                            if(regex.test(email)==false) {
                                error=true;
                                document.getElementById("errorFAE").className="d-block invalid-feedback";
                                contactEmail.classList.add("is-invalid");
                                contactEmail.classList.remove("is-valid");
                            } else {
                                document.getElementById("errorFAE").className="d-none";
                                contactEmail.classList.add("is-valid");
                                contactEmail.classList.remove("is-invalid");
                            }
                        }
                    }

                    function vInfo(){
                        var contactInfo = document.getElementById("infor");
                        document.getElementById("errorINFO").className="d-none";
                        document.getElementById("errorLINFO").className="d-none";
                        if (contactInfo.value == ""){
                            error=true;
                            document.getElementById("errorINFO").className="d-block invalid-feedback";
                            contactInfo.classList.add("is-invalid");
                            contactInfo.classList.remove("is-valid");
                        } else {
                            document.getElementById("errorINFO").className="d-none";
                            contactInfo.classList.add("is-valid");
                            contactInfo.classList.remove("is-invalid");
                            if(contactInfo.value.length>250){
                                error=true;
                                document.getElementById("errorLINFO").className="d-block invalid-feedback";
                                contactInfo.classList.add("is-invalid");
                                contactInfo.classList.remove("is-valid");
                            } else {
                                document.getElementById("errorLINFO").className="d-none";
                                contactInfo.classList.add("is-valid");
                                contactInfo.classList.remove("is-invalid");
                            }  
                        }
                    }
                    
                    function checkForm(){
                        // Wywołanie tych funkcji w przypadku kiedy użytkownik wejdzie na stronę i np. spróbuje wysłać odrazu pusty formularz
                        error = false;
                        vImiNaz() 
                        vAdrEma()
                        vInfo()

                        var wiadomosc = document.getElementById("submitWiadomosc")
                        var guzik = document.getElementById("submit")
                        if(error==true){
                            wiadomosc.classList.remove("d-none")
                            guzik.classList.remove("btn-primary")
                            guzik.classList.add("btn-danger")
                            return false
                        } else {
                            wiadomosc.classList.add("d-none")
                            return true
                        }
                    }