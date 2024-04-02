from flask import Blueprint, render_template

AppointmentsHistory = Blueprint('AppointmentsHistory', __name__, static_folder='static',
                                static_url_path='/AppointmentsHistory', template_folder='templates')


@AppointmentsHistory.route('/AppointmentsHistory', methods=['GET', 'POST'])
def AppointmentsHistory_Page():
    return render_template('AppointmentsHistory.html')
