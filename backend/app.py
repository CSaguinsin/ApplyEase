from flask import Flask, jsonify
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# MySQL connection
db = mysql.connector.connect(
    host="your_host",
    user="your_username",
    password="your_password",
    database="your_database"
)

@app.route('/api/data', methods=['GET'])
def get_data():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM your_table")
    data = cursor.fetchall()
    cursor.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
