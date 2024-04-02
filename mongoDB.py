
import os
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import certifi

# get your uri from .env file

uri = "mongodb+srv://sshani:sh208632588@petsocietycluster.hnwsdgi.mongodb.net/?retryWrites=true&w=majority&appName=petSocietyCluster"

# create cluster
petSocietycluster = MongoClient(uri, tlsCAFile=certifi.where())

# get all dbs and collections that needed
mydatabase = petSocietycluster['mydatabase']
customers_col = mydatabase['customers']


# Send a ping to confirm a successful connection
try:
    petSocietycluster.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


def login_customer(email, password):
    try:
        # Connect to the MongoDB client
        client = MongoClient(uri)

        # Select the database and collection
        db = client['mydatabase']  # Database name
        customers_collection = db['customers']  # Collection name

        # Find the recruiter by email
        customer_data = customers_collection.find_one({"email": email})

        # Close the connection
        client.close()

        # Check if the recruiter exists and the password matches
        if customer_data and customer_data.get("password") == password:
            # For security, remove the password from the data returned
            customer_data.pop("password", None)
            return customer_data
        else:
            return None
    except:
        return None


def add_customer(id, firstName, lastName, city, email, password):
    try:
        client = MongoClient(uri)

        # Select the database and collection
        db = client['mydatabase']  # Database name
        customers_collection = db['customers']  # Collection name

        # Check if a recruiter with the given email already exists
        if customers_collection.count_documents({"email": email}) > 0:
            # Close the connection before returning
            client.close()
            return False

        # Recruiter data
        customer_data = {
            "id": id,
            "firstName": firstName,
            "lastName": lastName,
            "city": city,
            "email": email,
            "password": password
        }

        # Insert the recruiter into the collection
        customers_collection.insert_one(customer_data)

        # Close the connection
        client.close()

        return True
    except:
        return False


def add_pet_info(
        name,
        age,
        animalType,
        breed,
        chip,
        allergies):
    try:
        client = MongoClient(uri)

        # Select the database and collection
        db = client['mydatabase']  # Database name
        pets_collection = db['pets']  # Collection name

        # pets data
        pet_data = {
            "name": name,
            "age": age,
            "animalType": animalType,
            "breed": breed,
            "chip": chip,
            "allergies": allergies

        }

        # Insert the candidate into the collection
        pets_collection.insert_one(pet_data)

        # Close the connection
        client.close()

        return True
    except:
        return False
