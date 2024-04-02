from flask import Blueprint, render_template
from app import app


# page_error_handlers blueprint definition
page_error_handler = Blueprint('page_error_handler', __name__, static_folder='static', static_url_path='/page_error_handler', template_folder='templates')


# Error handlers
@app.errorhandler(404)
def index(error):
    return render_template('page_not_found.html', error=error), 404
