from flask import Blueprint, render_template


PetProfile = Blueprint('PetProfile', __name__, static_folder='static', static_url_path='/PetProfile', template_folder='templates')

@PetProfile.route('/PetProfile', methods=['GET', 'POST'])
def PetProfile_Page():
    return render_template('PetProfile.html')