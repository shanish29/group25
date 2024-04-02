from flask import Flask
import pymongo
from flask import Flask, redirect, url_for
from flask import render_template
from flask import request, session
from flask import jsonify



###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')



###### Pages
## index
from pages.index.index import index

app.register_blueprint(index)

## MyPets
from pages.MyPets.MyPets import MyPets

app.register_blueprint(MyPets)

## AddPet
from pages.AddPet.AddPet import AddPet

app.register_blueprint(AddPet)

## AppointmentsHistory
from pages.AppointmentsHistory.AppointmentsHistory import AppointmentsHistory

app.register_blueprint(AppointmentsHistory)

## CreateAccount
from pages.CreateAccount.CreateAccount import CreateAccount

app.register_blueprint(CreateAccount)

## BookAppointment
from pages.BookAppointment.BookAppointment import BookAppointment

app.register_blueprint(BookAppointment)

## PetProfile
from pages.PetProfile.PetProfile import PetProfile

app.register_blueprint(PetProfile)

## Reminders
from pages.Reminders.Reminders import Reminders

app.register_blueprint(Reminders)

## BookedAppointments
from pages.BookedAppointments.BookedAppointments import BookedAppointments

app.register_blueprint(BookedAppointments)

###### Components

## Main menu
from components.main_menu.main_menu import main_menu
app.register_blueprint(main_menu)

from pages.page_error_handler.page_error_handler import page_error_handler
app.register_blueprint(page_error_handler)
