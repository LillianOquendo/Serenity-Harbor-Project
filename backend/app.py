from models import db, Agency, Consultation, Newsletter, SafetyPlan
from flask_migrate import Migrate
from flask import Flask, request, make_response, jsonify
from flask_restful import Api, Resource
import os
#from flask_cors import CORS


BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}"
)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
#CORS(app)

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

@app.route('/')
def home():
    return ''
#get all resources
class AgencyC(Resource):
    def get(self):
        agencies = Agency.query.all()
        print(agencies)
        agencies_to_dict = [agency.to_dict() for agency in agencies]
        
        response = make_response(jsonify(agencies_to_dict), 200)#converts each resource into an obj and then makes a json response
        
        return response

api.add_resource(AgencyC, '/agencies')

#get resources by id
class AgencyById(Resource):
    def get(self, id):
        agency = Agency.query.filter(Agency.id == id).first()
        if agency:
            response = make_response(jsonify(agency.to_dict()),200)
            return response
        else:
            response = make_response({"error":"Agency not found"}, 404)
            return response
api.add_resource(AgencyById, '/agencies/<int:id>')

#get and post subscribers to newsletter
class NewsletterC(Resource):
    def get(self):
        subscribers = Newsletter.query.all()
        subs_to_dict = [subscriber.to_dict()for subscriber in subscribers]

        response = make_response(jsonify(subs_to_dict), 200)

        return response
    def post(self):
        data = request.get_json()

        try:
            new_subscriber = Newsletter(
                name = data['name'],
                email = data['email']
            )
            db.session.add(new_subscriber)
            db.session.commit()

            response = make_response(jsonify(new_subscriber.to_dict()), 201)
        
        except ValueError:

            response = make_response({"error":["validation errors"]}, 400)

        return response
    
api.add_resource(NewsletterC, '/newsletter')

#patch and delete subscriber information for Newsletter
class NewsletterById(Resource):
    def patch(self, id):
        subscriber = Newsletter.query.filter(Newsletter.id == id).first()

        if not subscriber:
            return make_response({"error": "Newsletter subscriber not found"}, 404)

        try:
            data = request.get_json()

            for key in data:
                setattr(subscriber, key, data[key])

            db.session.commit()

            response = make_response(jsonify(subscriber.to_dict()), 202)

        except ValueError:
            response = make_response({"errors": ["Validation errors"]}, 400)

        return response
    
    def delete(self, id):
        subscriber = Newsletter.query.filter(Newsletter.id == id).first()

        if subscriber:
            
            db.session.delete(subscriber)
            db.session.commit()

            response = make_response({}, 204)
        
        else:   
            response = make_response({"error":"Subscriber not found"}, 404)
            
        return response

api.add_resource(NewsletterById, '/newsletter/<int:id>')

#get and post consultation requests to consultation table 
class ConsultationsC(Resource):
    def get(self):
        consultations = Consultation.query.all()
        consultations_to_dict = [consultation.to_dict() for consultation in consultations]

        response = make_response(jsonify(consultations_to_dict), 200)

        return response
    
    def post(self):
        data = request.get_json()

        try:
            new_consultation = Consultation(
                name = data['name'],
                email = data['email'],
                message = data['message'],
            )
            db.session.add(new_consultation)
            db.session.commit()

            response = make_response(jsonify(new_consultation.to_dict()), 201)
        
        except ValueError:

            response = make_response({"error":["validation errors"]}, 400)

        return response
    
api.add_resource(ConsultationsC, '/consultations')


class ConsultationById(Resource):
    def get(self, id):
        consultation = Consultation.query.filter(Consultation.id == id).first()

        if consultation:
            response = make_response(jsonify(consultation.to_dict()), 200)
            return response
        else:
            response = make_response({"error": "Consultation not found"})
api.add_resource(ConsultationById, '/consultations/<int:id>')

# route to handle safetyplan submission
# class GenerateSafetyPlan(Resource):
#     def post(self):
#         data = request.get_json()

#         try:

#             question1 = data.get('question1')
#             question2 = data.get('question2')
#             question3 = data.get('question3')
#             question4 = data.get('question4')
#             question5 = data.get('question5')

            
#             if not (question1 and question2 and question3 and question4 and question5):
#                 raise ValueError('Missing answers for some questions')


#             new_safety_plan = SafetyPlan(
#                 question1_field_name = question1,
#                 question2_field_name = question2,
#                 question3_field_name = question3,
#                 question4_field_name = question4,
#                 question5_field_name = question5,
#             )

#             db.session.add(new_safety_plan)
#             db.session.commit()

#             return {'message': 'Safety plan successfully generated and saved.'}, 201

#         except ValueError:

#             response = make_response({"error":["validation errors"]}, 400)

#         return response

# api.add_resource(GenerateSafetyPlan, '/generate_safety_plan')

@app.route('/generate_safety_plan', methods =['POST'])
class Generate_safety_plan(Resource):
    def post(self):
        def generate_action_plan(data):

            action_plan = (
                f"Action Plan:\n"
                f"1. Reach out to trusted friends, family members, or neighbors: {data.get('question1')}\n"
                f"2. Reliable transportation options or assistance: {data.get('question2')}\n"
                f"3. Safe locations outside your home: {data.get('question3')}\n"
                f"4. People you can trust and confide in about the abuse: {data.get('question4')}\n"
                f"5. Physical description of the abuser: {data.get('question5')}\n"
            )
            return action_plan
        
        data = request.get_json()

        try:
            question1 = data.get('question1')
            question2 = data.get('question2')
            question3 = data.get('question3')
            question4 = data.get('question4')
            question5 = data.get('question5')

            if not (question1 and question2 and question3 and question4 and question5):
                raise ValueError('Missing answers for some questions')

            # Generate the action plan
            action_plan = generate_action_plan(data)

            # Save the safety plan in the database (if needed)
            new_safety_plan = SafetyPlan(
                question1_field_name=question1,
                question2_field_name=question2,
                question3_field_name=question3,
                question4_field_name=question4,
                question5_field_name=question5,
            )

            db.session.add(new_safety_plan)
            db.session.commit()

            return {'message': 'Safety plan successfully generated and saved.', 'action_plan': action_plan}, 201

        except ValueError:
            response = make_response({"error": ["validation errors"]}, 400)
            return response

   

api.add_resource(Generate_safety_plan, '/generate_safety_plan')



if __name__ == '__main__':
    app.run(port=5555, debug=True)

    







