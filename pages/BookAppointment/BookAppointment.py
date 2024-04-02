from flask import Blueprint, render_template

BookAppointment = Blueprint('BookAppointment', __name__, static_folder='static', static_url_path='/BookAppointment',
                            template_folder='templates')


@BookAppointment.route('/BookAppointment', methods=['GET', 'POST'])
def BookAppointment_Page():
    return render_template('BookAppointment.html')
