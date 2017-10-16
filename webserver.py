"""
webserver.py

File that is the central location of code for your webserver.
"""

from flask import Flask, request, render_template
import requests

import os

# Create application, and point static path (where static resources like images, css, and js files are stored) to the
# "static folder"
app = Flask(__name__,static_url_path="/static")

@app.route('/')
def homepage():
    """
    If someone goes to the root of your website (i.e. http://localhost:5000/), run this function. The string that this
    returns will be sent to the browser
    """
    return render_template("index.html") # Render the template located in "templates/index.html"

@app.route('/aboutUs')
def aboutUs():
    """
    If someone goes to the root of your website (i.e. http://localhost:5000/), run this function. The string that this
    returns will be sent to the browser
    """
    return render_template("aboutUs.html") # Render the template located in "templates/index.html"

@app.route('/contactUs', methods=['GET'])
def contactUs():
    """
    If someone goes to the root of your website (i.e. http://localhost:5000/), run this function. The string that this
    returns will be sent to the browser
    """
    return render_template("contactUs.html") # Render the template located in "templates/index.html"

@app.route('/blog1')
def blog1():
    return render_template("1.html") # Render the template located in "templates/index.html"

@app.route('/blog2')
def blog2():
    return render_template("2.html") # Render the template located in "templates/index.html"

@app.route('/blog3')
def blog3():
    return render_template("3.html") # Render the template located in "templates/index.html"

@app.route('/blog4')
def blog4():
    return render_template("4.html") # Render the template located in "templates/index.html"

@app.route('/blog5')
def blog5():    
    return render_template("5.html") # Render the template located in "templates/index.html"

@app.route('/contactUs', methods=['POST'])
def send_email():
    message = request.form.get("mail_message")
    sender_mail= request.form.get("sender_mail")
    sender = request.form.get("sender_name")
    subject = request.form.get("mail_subject")
    notifications = []    
    messageFull= "Hi Bir,\n"+message+"\nFrom,\n"+sender
    senderAdd="Hi "+sender+","
    notifications.append(senderAdd)
    
    data = {        
        'from':sender_mail,
        'to': os.environ["INFO253_MAILGUN_TO_EMAIL"],
        'subject': subject,
        'text': messageFull,        
    }

    auth = (os.environ["INFO253_MAILGUN_USER"], os.environ["INFO253_MAILGUN_PASSWORD"])
    print(auth)


    r = requests.post( 'https://api.mailgun.net/v3/{0}/messages'.format(os.environ["INFO253_MAILGUN_DOMAIN"])
        , auth=auth
        , data=data)
    
    if r.status_code == requests.codes.ok:        
        notifications.append("Your email has been sent successfully")
    else:
        notifications.append("You email was not sent. Please try again later")    
    
    print(r.text)
    
    return render_template("contactUs.html", notifications=notifications)