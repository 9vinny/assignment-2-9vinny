

/* Comment for blog 1*/
if(document.getElementById("blogform1") != null) {
	document.getElementById("blogform1").addEventListener("submit", function() {          	
	    event.preventDefault(); 
	    var uName= document.getElementById("userName").value;
	    var comment = document.getElementById("commentDet").value;
	    
	    if (typeof(Storage) !== "undefined") {
		    // Store
		    var storCom = localStorage.getItem("blogform1-coms")
			if(storCom != null) {			
				localStorage.setItem("blogform1-coms", storCom + (uName+": "+comment+"<br>"));
			}
			else {
				localStorage.setItem("blogform1-coms", (uName+": "+comment+"<br>"));
			}			    
		} else {
			    document.getElementById("comArea").innerHTML = "Sorry, your browser does not support Web Storage...";
		}
		comList = localStorage.getItem("blogform1-coms")
	    document.getElementById("comArea").innerHTML = comList;		
	});

	var comList1 = localStorage.getItem("blogform1-coms")
	if(comList1 != null) {
		document.getElementById("comArea").innerHTML = comList1;		
	}
	
}    
/* end blog */





/* Comment for blog 2*/
if(document.getElementById("blogform2") != null) {
	document.getElementById("blogform2").addEventListener("submit", function() {          	
	    event.preventDefault(); 
	    var uName= document.getElementById("userName").value;
	    var comment = document.getElementById("commentDet").value;
	    
	    if (typeof(Storage) !== "undefined") {
		    // Store
		    var storCom = localStorage.getItem("blogform2-coms")
			if(storCom != null) {			
				localStorage.setItem("blogform2-coms", storCom + (uName+": "+comment+"<br>"));
			}	
			else {
				localStorage.setItem("blogform2-coms", (uName+": "+comment+"<br>"));
			}		    
		} else {
			    document.getElementById("comArea").innerHTML = "Sorry, your browser does not support Web Storage...";
		}
		comList = localStorage.getItem("blogform2-coms")
	    document.getElementById("comArea").innerHTML = comList;		
	});

	var comList1 = localStorage.getItem("blogform2-coms")
	if(comList1 != null) {
		document.getElementById("comArea").innerHTML = comList1;		
	}
	
}    






/* Comment for blog 3*/
if(document.getElementById("blogform3") != null) {
	document.getElementById("blogform3").addEventListener("submit", function() {          	
	    event.preventDefault(); 
	    var uName= document.getElementById("userName").value;
	    var comment = document.getElementById("commentDet").value;
	    
	    if (typeof(Storage) !== "undefined") {
		    // Store
		    var storCom = localStorage.getItem("blogform3-coms")
			if(storCom != null) {			
				localStorage.setItem("blogform3-coms", storCom + (uName+": "+comment+"<br>"));
			}
			else {
				localStorage.setItem("blogform3-coms", (uName+": "+comment+"<br>"));
			}			    
		} else {
			    document.getElementById("comArea").innerHTML = "Sorry, your browser does not support Web Storage...";
		}
		comList = localStorage.getItem("blogform3-coms")
	    document.getElementById("comArea").innerHTML = comList;		
	});

	var comList1 = localStorage.getItem("blogform3-coms")
	if(comList1 != null) {
		document.getElementById("comArea").innerHTML = comList1;		
	}	
}    






/* Comment for blog 4*/
if(document.getElementById("blogform4") != null) {
	document.getElementById("blogform4").addEventListener("submit", function() {          	
	    event.preventDefault(); 
	    var uName= document.getElementById("userName").value;
	    var comment = document.getElementById("commentDet").value;
	    
	    if (typeof(Storage) !== "undefined") {
		    // Store
		    var storCom = localStorage.getItem("blogform4-coms")
			if(storCom != null) {			
				localStorage.setItem("blogform4-coms", storCom + (uName+": "+comment+"<br>"));
			}
			else {
				localStorage.setItem("blogform4-coms", (uName+": "+comment+"<br>"));
			}			    
		} else {
			    document.getElementById("comArea").innerHTML = "Sorry, your browser does not support Web Storage...";
		}
		comList = localStorage.getItem("blogform4-coms")
	    document.getElementById("comArea").innerHTML = comList;		
	});
	var comList1 = localStorage.getItem("blogform4-coms")
	if(comList1 != null) {
		document.getElementById("comArea").innerHTML = comList1;		
	}	
}    






/* Comment for blog 5*/
if(document.getElementById("blogform5") != null) {
	document.getElementById("blogform5").addEventListener("submit", function() {          	
	    event.preventDefault(); 
	    var uName= document.getElementById("userName").value;
	    var comment = document.getElementById("commentDet").value;
	    
	    if (typeof(Storage) !== "undefined") {
		    // Store
		    var storCom = localStorage.getItem("blogform5-coms")
			if(storCom != null) {			
				localStorage.setItem("blogform5-coms", storCom + (uName+": "+comment+"<br>"));
			}			  
			else {
				localStorage.setItem("blogform5-coms", (uName+": "+comment+"<br>"));
			}  
		} else {
			    document.getElementById("comArea").innerHTML = "Sorry, your browser does not support Web Storage...";
		}
		comList = localStorage.getItem("blogform5-coms")
	    document.getElementById("comArea").innerHTML = comList;		
	});

	var comList1 = localStorage.getItem("blogform5-coms")
	if(comList1 != null) {
		document.getElementById("comArea").innerHTML = comList1;		
	}
	
}    