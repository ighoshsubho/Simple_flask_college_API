from flask_restful import Resource, reqparse
from app import mongo

class StudentResource(Resource):
    def get(self, student_id=None):
        if student_id:
            # Get a specific student by ID
            student = mongo.cx.db.students.find_one({'_id': student_id}, {'_id': 0})
            if student:
                return student
            else:
                return {'error': 'Student not found'}, 404
        else:
            # Get all students
            students = list(mongo.cx.db.students.find({}, {'_id': 0}))
            return students

    def post(self):
        # Parse request arguments
        parser = reqparse.RequestParser()
        parser.add_argument('name', required=True, help='Name is a required field')
        parser.add_argument('college', required=True, help='College is a required field')
        args = parser.parse_args()

        # Create a new student
        student = {'name': args['name'], 'college': args['college']}
        result = mongo.cx.db.students.insert_one(student)

        return {'message': 'Student created successfully', 'student_id': str(result.inserted_id)}, 201
