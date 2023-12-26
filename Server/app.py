""" APP Class"""
import os
import random
import flask
from flask_cors import CORS
from movie import trendingMoviesOfTheYear
app = flask.Flask(__name__)
CORS(app)

@app.route('/')
def index():
    movieData = trendingMoviesOfTheYear(2)
    return movieData
app.run(
    host=os.getenv('IP', '0.0.0.0'),
    port=int(os.getenv('PORT', 8080)),
    debug=True
)
