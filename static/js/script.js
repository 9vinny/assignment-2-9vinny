/* Prevents form submission*/

    document.getElementById("form1").addEventListener("submit", function() {          	
            event.preventDefault(); 
            var name= document.getElementById("exampleName").value;
            var subject = document.getElementById("exampleSubject").value;
            var mesg = document.getElementById("exampleMessage").value;
            var sMail = document.getElementById("exampleMail").value;
			var res ="";
			var res1 ="";
			var res2 ="";
			var res3 ="";
			if (name=="" ) {
				res1="Name is mandatory";
			}
			if (subject == "") {
				res2="Subject is required" ;					
			}
			if (mesg=="") {
				res3="Message is required";
			}
			if (sMail=="") {
				res4="Mail Id is mandatory";
			}
			
			if(name=="" || subject == "" || mesg == "" || sMail=="") {
				res = res1+"<br>"+res2+"<br>"+res3+"<br>"+res4;
				document.getElementById('msg').innerHTML=res;
			}else {
				res = "Your message has been delivered";
				document.getElementById("form1").submit();	
			}
			
			/*document.getElementById('msg').innerHTML=res;*/
        
    });
    

