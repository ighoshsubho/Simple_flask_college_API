from app import app, utils
from flask_cors import CORS

if __name__ == '__main__':
    CORS(app)
    app.run(host="0.0.0.0",port=5000,debug=True,use_reloader=True)
