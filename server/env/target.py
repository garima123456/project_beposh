from flask import Flask
app = Flask(__name__)

@app.route('/#b71c1c')
def hello_world():
   return 'hello'

if __name__ == '__main__':
   app.run()