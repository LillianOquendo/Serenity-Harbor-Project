from app import app
from models import db, Agency, Consultation, AgencyType, SafetyPlan



if __name__ == '__main__':
    with app.app_context():
        print('clearing db...')

        Agency.query.delete()
        #SafetyPlan.query.delete()
        Consultation.query.delete()

        print("seeding services")

        agencies = [
                Agency(
                    name = "resource name",
                    address = "resource's address",
                    phone_number = "resource's phone number",
                    description = "resource's description",
                    type_id = 22 
                )
                ]
        agency_types = [
                AgencyType(
                    type_name = "to store the name of the resource type"
                )
        ]
        # safety_plans = [
        #         SafetyPlan(
        #             user_id = "user_id (FK referencing User model to associate plan with specific user)",
        #             plan_content = "to store generated safety plan information",
        #             creation_date = "to record when the plan was created"
        #             )
        #         ]


        # Seed data for the Consultation model with the current timestamp
        consultations = [
            Consultation(
                user_id=21, 
                name="to store the name of a user if they are not logged in",
                email="to store the email of the user providing feedback",
                subject="to store the subject of the feedback",
                message="to store the actual message of the feedback",
                
            )
        ]

#add all changes to the current session
        db.session.add_all(agencies)
        db.session.add_all(agency_types)
        db.session.add_all(consultations)

# Commit the changes to the database
        db.session.commit()