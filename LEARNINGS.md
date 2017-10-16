1. What is the function of the following technologies in your assignment:

i.	HTML: 
HTML stands for Hyper Text Markup Language. HTML describes the structure of Web pages using markup. HTML elements are the building blocks of HTML pages. HTML elements are represented by tags.
In our assignment, html tags are used to create structure of webpages. The html forms the core of the webpages and some prominent used tags are - div for creating sections, ul and li to create list in header and footer.  

ii.	CSS: 
CSS is used in our assignment to align the html elements to make the web app looks presentable. It is used to adjust header and footer throughout the app, blog list and blog preview section on homepage, adjusting text elements on contact us and about us page. It is also used to set up coloring scheme and other element styling like font etc. Since CSS is styling language we have used to set up look and feel of the app.

iii.	JavaScript: 
JavaScript is used in out app to make it interactive. We have two main uses of javascript in our web app – 
•	Handle the logic for adding comments on blog pages
•	Handle the logic for not leaving text fields empty on contact Us page
It is used on client side of the web app in this assignment.

iv.	Python: 
Python is an object-oriented, high level language, interpreted, dynamic and multipurpose programming language.
In our assignment 2, python is used to code server side functionality of the web app. The logic to handle the get and post requests received by Flask server is written in Python.

v.	Flask: 
Flask is a Python web framework. Flask can be used for building complex, database-driven websites, starting with mostly static pages, but it is a "microframework" compared to Django and is usually aimed at small applications with simpler requirements.
In our assignment 2 it is providing us the development server to host and execute our python server side code present in webserver.py file. It also takes care of receiving of requests and rendering web pages, as specified in webserver code, in response.

vi.	HTTP: 
HTTP is the protocol used for sending Get or Post requests to our local server. 

vii.	GET and POST requests: 
In the assignment the GET requests are used to fetch webpages of the web app from the server. The post request is used to submit the from on Contact Us page to direct server to send email via Mailgun api.


2.	How does HTML, CSS, and JavaScript work together in the browser for this assignment?

The HTML, CSS and JavaScript code is being rendered from server and has the following usage in this assignment – 

HTML – html tags are used to create structure of webpages

CSS – It is used for placement (alignment and indentation) and styling (size of text, color, background color) of html elements

JavaScript – It adds interactivity to the html static webpages. In out assignment it is ued to handle validations on contact us page and comment functionality on blog pages

3.	How does Python and Flask work together in the server for this assignment?

Flask framework provides the functionality to handle the requests made to the server. It provides the future to configure how different requests are to be handled and provides functionality to send responses. 

Python is used to write to logic which Flask uses to handle requests and send out responses.

For example – Flask provides the server to receive a get request for /ContactUs and Python code has the logic about handling this request and render the contactUs.html page. The Flask then sends this page along with associated static css and js files as response.

4.	List all of the possible GET and POST requests that your server returns a response for and describes what happens for each GET and POST request

Get 
10.0.2.2 - - [16/Oct/2017 04:21:06] "GET / HTTP/1.1" 200 -  
Request for Homepage i.e. index.html

10.0.2.2 - - [16/Oct/2017 04:21:30] "GET /aboutUs HTTP/1.1" 200 –
Request for about Us page

10.0.2.2 - - [16/Oct/2017 04:21:30] "GET /static/images/about-me.jpg HTTP/1.1" 200 –
Request for image to be loaded on about us page

10.0.2.2 - - [16/Oct/2017 04:21:35] "GET /contactUs HTTP/1.1" 200 –
Request for contact us page

10.0.2.2 - - [16/Oct/2017 04:21:35] "GET /static/js/script.js HTTP/1.1" 200 –
Request for javascript file for contact us page. This has code to handle validations for text fields on the contact us page.

10.0.2.2 - - [16/Oct/2017 04:21:59] "GET /blog1 HTTP/1.1" 200 –
Request for page for first blog page

10.0.2.2 - - [16/Oct/2017 04:21:59] "GET /static/js/script2.js HTTP/1.1" 200 –
Request for javascript file for blog pages. This has code to handle comment functionality on blog pages.

10.0.2.2 - - [16/Oct/2017 04:21:59] "GET /blog2 HTTP/1.1" 200 –
Request for page for second blog page

10.0.2.2 - - [16/Oct/2017 04:21:59] "GET /blog3 HTTP/1.1" 200 –
Request for page for third blog page

10.0.2.2 - - [16/Oct/2017 04:21:59] "GET /blog4 HTTP/1.1" 200 –
Request for page for fourth blog page

10.0.2.2 - - [16/Oct/2017 04:21:59] "GET /blog5 HTTP/1.1" 200 –
Request for page for fifth blog page
