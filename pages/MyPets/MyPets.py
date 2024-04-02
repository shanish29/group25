from flask import Blueprint, render_template


MyPets = Blueprint('MyPets', __name__, static_folder='static', static_url_path='/MyPets', template_folder='templates')


@MyPets.route('/MyPets', methods=['GET', 'POST'])
def MyPets_Page():
    return render_template('MyPets.html')