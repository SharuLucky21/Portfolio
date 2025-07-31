from flask import Flask, render_template, request, redirect, flash,url_for
from flask_mail import Mail,Message
app = Flask(__name__)
app.secret_key = 'your_secret_key'

import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.secret_key = "your_secret_key"

# Mail Config
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")
app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")
app.config["MAIL_DEFAULT_SENDER"] = os.getenv("MAIL_USERNAME")

mail = Mail(app)
# Routes

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route("/skills")
def skills():
    return render_template("skills.html")

@app.route("/internships")
def internships():
    return render_template("internships.html")


@app.route('/certifications')
def certifications():
    return render_template('certifications.html')

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        message = request.form["message"]

        msg = Message(subject=f"New Message from {name}",
                      sender=app.config["MAIL_DEFAULT_SENDER"],
                      recipients=[app.config["MAIL_USERNAME"]],
                      body=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}")

        try:
            mail.send(msg)
            flash("Message sent successfully!", "success")
        except Exception as e:
            flash(f"Error sending message: {str(e)}", "error")

        return redirect(url_for("contact"))

    return render_template("contact.html")


if __name__ == '__main__':
    app.run(debug=True)
