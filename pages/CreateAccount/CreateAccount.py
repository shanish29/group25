from flask import Blueprint
from flask import render_template, redirect, url_for
from flask import request, session
from mongoDB import add_customer, customers_col

CreateAccount = Blueprint(
    'CreateAccount',
    __name__,
    static_folder='static',
    static_url_path='/CreateAccount',
    template_folder='templates')


@CreateAccount.route('/CreateAccount', methods=['GET', 'POST'])
def create_account_page():
    return render_template('CreateAccount.html')


# Routes
@CreateAccount.route('/CreateAccount')
def index():
    return render_template('CreateAccount.html')


@CreateAccount.route("/CreateAccount", methods=['POST'])
def signUpNewCustomer():
    id = request.form['id']
    firstName = request.form['firstName']
    lastName = request.form['lastName']
    city = request.form['city']
    email = request.form['email']
    password = request.form['password']

    success = add_customer(
        id=id,
        firstName=firstName,
        lastName=lastName,
        city=city,
        email=email,
        password=password
    )

    if success:
        session['logged_in'] = True
        session['id'] = id
        session['firstName'] = firstName
        session['lastName'] = lastName
        session['city'] = city
        session['email'] = email
        session['password'] = password

        return redirect(url_for('MyPets.index'))
    else:
        return render_template('CreateAccount.html', error='Signup failed. Please try again.')

