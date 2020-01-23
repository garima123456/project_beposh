from flask import Flask
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
#app = Flask(__name__)
#CORS(app,support_credentials=True)
db=SQLAlchemy()
def create_app():
	app=Flask(__name__)
        CORS(app,support_credentials=True)
	app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///database.db'
        db.init_app(app)
	from .views import main
	app.register_blueprint(main)
	return app

