from flask import Blueprint, request
from flask import render_template, redirect, url_for
from mongoDB import add_pet_info

AddPet = Blueprint(
    'AddPet',
    __name__,
    static_folder='static',
    static_url_path='/AddPet',
    template_folder='templates')


# Routes
@AddPet.route('/AddPet')
def index():
    # get job ids from url parameters
    pet_chip = request.args.get('selectedPets')
    if pet_chip is None:
        return render_template('AddPet.html', error='No chip provided.')

    return render_template('AddPet.html', pet_chip=pet_chip)


@AddPet.route('/AddPet', methods=['POST'])
def petInfoPost():
    selected_pets = request.form['selectedPets']
    name = request.form['name']
    age = request.form['age']
    animalType = request.form['animalType']
    breed = request.form['breed']
    chip = request.form['chip']
    allergies = request.form['allergies']

    for pet in selected_pets.split(','):
        print(pet)
        add_pet_info(
            name=name,
            age=age,
            animalType=animalType,
            breed=breed,
            chip=chip,
            allergies=allergies
        )

    return redirect(url_for('MyPets.index', success=True))
