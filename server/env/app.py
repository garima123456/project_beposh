from flask import Blueprint, jsonify
from flask import Flask, render_template
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app,support_credentials=True)
@app.route('/')
def index():
   return "Index!"
	
@app.route('/Hello')
def hello():
   return "Hello, World!"
#main=Blueprint('main',__name__)
@app.route('/show_color/',methods=['GET'])
def add_movie():
        return jsonify({'status':'hello'})	
@app.route("/members")
def members():
   return "Members"
	
@app.route("/members/<name>/")
def getMember(name):
   return name
	
if __name__ == '__main__':
   app.run(debug=True)
