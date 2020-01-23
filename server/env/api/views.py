from flask import Blueprint, jsonify
from flask_cors import CORS, cross_origin

main=Blueprint('main',__name__)
@main.route('/show_color/',methods=['GET'])
def add_movie(name):
	return jsonify({'status':'201'})

@main.route('/show')
def movies():
	movies=[]
	return jsonify({'movies':movies})
@main.route('/add_movie',methods=['POST'])
def add_movie():
	return 'Done',201

