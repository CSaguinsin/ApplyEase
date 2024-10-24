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

@app.route('/api/signup', methods=['POST', 'OPTIONS'])
@cross_origin(origin='localhost',headers=['Content-Type','Authorization'])
def signup():
    if request.method == 'OPTIONS':
        return jsonify(success=True), 204
    
    data = request.get_json()
    username = data['username']
    email = data['email']
    password = data['password']
    hashed_password = hash_password(password)

    try:
        connection = mysql.connector.connect(
            host=os.getenv('DB_HOST'),
            database=os.getenv('DB_NAME'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD')
        )
        cursor = connection.cursor(dictionary=True)

        # Insert new user
        insert_query = "INSERT INTO users (username, password, email) VALUES (%s, %s, %s)"
        cursor.execute(insert_query, (username, hashed_password, email))
        connection.commit()

        return jsonify(success=True, message="Signup successful!")

    except Error as err:
        print("Error:", err)
        return jsonify(success=False, message="Error while connecting to MySQL")

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

if __name__ == '__main__':
    app.run(debug=True)
