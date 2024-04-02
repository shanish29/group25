from flask import Blueprint
from flask import render_template, redirect, url_for
from flask import request, session
from mongoDB import login_customer

index = Blueprint(
    'index',
    __name__,
    static_folder='static',
    static_url_path='/index',
    template_folder='templates')


# Routes
@index.route('/')
@index.route('/index')
def index_func():
#    if session.get('logged_in'):
#       return redirect(url_for('MyPets.index'))
    return 'hello world'
#    return render_template('index.html')


@index.route('/index', methods=['POST'])
def login_func():
    email = request.form['email']
    password = request.form['password']
    customer_data = login_customer(email, password)

    # Check if email exists in the database
    if customer_data is None:
        return render_template('index.html', error='Invalid email or password. Please try again.')

    session['logged_in'] = True
    session['id'] = customer_data['id']
    session['firstName'] = customer_data['firstName']
    session['lastName'] = customer_data['lastName']
    session['city'] = customer_data['city']
    session['email'] = customer_data['email']
    session['password'] = customer_data['password']

    return redirect(url_for('MyPets.index'))


@index.route('/logout', methods=['GET'])
def logout_func():
    session['logged_in'] = False
    session['id'] = None
    session['firstName'] = None
    session['lastName'] = None
    session['city'] = None
    session['email'] = None
    session['password'] = None

    return redirect(url_for('index.index'))
