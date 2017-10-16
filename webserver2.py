import requests
import os

from flask import Flask, request, render_template
app = Flask(__name__, static_url_path="/static")

@app.route('/email', methods=['GET'])
def show_email_page():
  return render_template("email.html", notifications=[])

@app.route('/email', methods=['POST'])
def send_email():
    message = request.form.get("message")
    notifications = []

    data = {
        'from': os.environ["INFO253_MAILGUN_FROM_EMAIL"],
        'to': os.environ["INFO253_MAILGUN_TO_EMAIL"],
        'subject': "You just was sent a message",
        'text': message,
    }

	auth = (os.environ["INFO253_MAILGUN_USER"], os.environ["INFO253_MAILGUN_PASSWORD"])

    r = requests.post(
        'https://api.mailgun.net/v3/{}/messages'.format(os.environ["INFO253_MAILGUN_DOMAIN"]),
        auth=auth,
        data=data)

	if r.status_code == requests.codes.ok:
        notifications.append("Your email was sent")
    else:
        notifications.append("You email was not sent. Please try again later")

    return render_template("email.html", notifications=notifications)