from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['JWT_SECRET_KEY'] = 'your-secret-key'
db = SQLAlchemy(app)
jwt = JWTManager(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    progress = db.Column(db.Integer, default=0)

with app.app_context():
    db.create_all()

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(username=data['username']).first()
    if user and user.password == data['password']:
        # ユーザーIDをトークンに含める
        token = create_access_token(identity={"id": user.id, "username": user.username})
        return jsonify(token=token)
    return jsonify({"error": "Invalid credentials"}), 401

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    if User.query.filter_by(username=data['username']).first():
        return jsonify({"error": "User already exists"}), 400
    new_user = User(username=data['username'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User created successfully"}), 201

@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    return jsonify({"message": "Protected route accessed"})

@app.route('/saveprogress', methods=['POST'])
@jwt_required()
def save_progress():
    data = request.get_json()
    user_info = get_jwt_identity()  # トークンからユーザー情報を取得
    progress = data.get('progress')
    
    user = User.query.get(user_info['id'])
    if user:
        user.progress = progress  
        db.session.commit()
        return jsonify({"message": "Progress saved"}), 200
    return jsonify({"message": "User not found"}), 404

@app.route('/getprogress', methods=['GET'])
@jwt_required()
def getprogress():
    user_info = get_jwt_identity()  # トークンからユーザー情報を取得
    print(user_info)
    user = User.query.get(user_info['id'])
    print(user)
    if user:
        return jsonify({"progress": user.progress}), 200
    return jsonify({"message": "User not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
