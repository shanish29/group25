from flask import Blueprint, render_template

BookedAppointments = Blueprint('BookedAppointments', __name__, static_folder='static',
                               static_url_path='/BookedAppointments', template_folder='templates')


@BookedAppointments.route('/BookedAppointments', methods=['GET', 'POST'])
def BookedAppointments_Page():
    return render_template('BookedAppointments.html')
