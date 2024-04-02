from flask import Blueprint, render_template

Reminders = Blueprint('Reminders', __name__, static_folder='static', static_url_path='/Reminders',
                      template_folder='templates')


@Reminders.route('/Reminders', methods=['GET', 'POST'])
def Reminders_Page():
    return render_template('Reminders.html')
