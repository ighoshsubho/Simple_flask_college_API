from flask_restful import Api
from app import app
from app.resources import StudentResource

api = Api(app)
api.add_resource(StudentResource, '/api/students', '/api/students/<string:student_id>')
