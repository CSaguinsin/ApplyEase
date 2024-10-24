from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import mysql.connector
from mysql.connector import Error
from dotenv import load_dotenv
import os
import hashlib

load_dotenv()
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

# MySQL connection
db = mysql.connector.connect(
    host=os.getenv('DB_HOST'),
    user=os.getenv('DB_USER'),
    password=os.getenv('DB_PASSWORD'),
    database=os.getenv('DB_NAME')
)

@app.route('/api/data', methods=['GET'])
def get_data():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM your_table")
    data = cursor.fetchall()
    cursor.close()
    return jsonify(data)

@app.route('/api/signup', methods=['POST', 'OPTIONS'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def signup():
    if request.method == 'OPTIONS':
        return jsonify(success=True), 204
    data = request.get_json()
    username = data['username']
    email = data['email']
    password = data['password']
    hashed_password = hash_password(password)
    try:
        cursor = db.cursor(dictionary=True)
        insert_query = "INSERT INTO users (username, password, email) VALUES (%s, %s, %s)"
        cursor.execute(insert_query, (username, hashed_password, email))
        db.commit()
        return jsonify(success=True, message="Signup successful!")
    except Error as err:
        print("Error:", err)
        return jsonify(success=False, message="Error while connecting to MySQL")
    finally:
        if db.is_connected():
            cursor.close()

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    hashed_password = hash_password(password)
    try:
        cursor = db.cursor(dictionary=True)
        select_query = "SELECT * FROM users WHERE username = %s AND password = %s"
        cursor.execute(select_query, (username, hashed_password))
        result = cursor.fetchone()
        if result:
            return jsonify(success=True, message="Login successful!")
        else:
            return jsonify(success=False, message="Invalid credentials.")
    except Error as err:
        print("Error:", err)
        return jsonify(success=False, message="Error while connecting to MySQL")
    finally:
        if db.is_connected():
            cursor.close()

# Endpoint to create HR preference
@app.route('/api/hr-preferences', methods=['POST'])
def create_hr_preference():
    data = request.get_json()
    hr_name = data['hr_name']
    position = data['position']
    required_experience = data['required_experience']
    required_education = data['required_education']
    required_skills = ','.join(data['required_skills'])  # Convert list to comma-separated string
    try:
        cursor = db.cursor()
        insert_query = """INSERT INTO hr_preferences (hr_name, position, required_experience, required_education, required_skills) 
                          VALUES (%s, %s, %s, %s, %s)"""
        cursor.execute(insert_query, (hr_name, position, required_experience, required_education, required_skills))
        db.commit()
        return jsonify(success=True, message="HR Preference created successfully!")
    except Error as e:
        print("Error while connecting to MySQL", e)
        return jsonify(success=False, message="Error while connecting to MySQL")
    finally:
        if db.is_connected():
            cursor.close()

# Endpoint to get all HR preferences
@app.route('/api/hr-preferences', methods=['GET'])
def get_hr_preferences():
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM hr_preferences")
        hr_preferences = cursor.fetchall()
        return jsonify(hr_preferences)
    except Error as e:
        print("Error while connecting to MySQL", e)
        return jsonify(success=False, message="Error while connecting to MySQL")
    finally:
        if db.is_connected():
            cursor.close()

if __name__ == '__main__':
    app.run(debug=True)
