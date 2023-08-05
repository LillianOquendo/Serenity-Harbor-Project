from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin


metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Newsletter(db.Model,SerializerMixin):
    __tablename__ = 'newsletter_signups'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    
    def __repr__(self):
        return f"Newsletter(id={self.id}, name='{self.name}', email='{self.email}')"
#add validations for name, address, and description to make sure field isn't empty
    @validates('name', 'email')
    def validate_non_empty_fields(self, key, value):
        if not value:
            raise ValueError("Field cannot be empty")
        else:
            return value   
        
class Agency(db.Model, SerializerMixin):
    __tablename__ = 'agencies'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    address = db.Column(db.String)
    phone_number = db.Column(db.String)
    description = db.Column(db.String)   
    type_id = db.Column(db.Integer, db.ForeignKey('agencyTypes.type_name'))

#add relationship
    agency_type = db.relationship('AgencyType', backref='agencies')

#add __repr__ for debugging purposes
    def __repr__(self):
        return f"Agency(id={self.id}, name='{self.name}', address='{self.address}', phone_number='{self.phone_number}', description='{self.description}', type_id={self.type_id})"

#add serialization
#Exclude agency_type    relationship
    serialize_rules = ('-agency_type.agencies')

#add validations for name, address, and description to make sure field isn't empty
    @validates('name', 'address', 'phone_number','description')
    def validate_non_empty_fields(self, key, value):
        if not value:
            raise ValueError("Field cannot be empty")
        else:
            return value
class AgencyType(db.Model, SerializerMixin):
    __tablename__='agencyTypes'
    id = db.Column(db.Integer, primary_key=True)
    type_name = db.Column(db.String)
#add __repr__ for debugging purposes
    def __repr__(self):
        return f"AgencyType(id={self.id}, type_name='{self.type_name}')"

#add serialization
#Exclude resources relationship
    serialize_rules = ('-agencies.agency_type',)

#add validation to check that type_name field is not empty
    @validates('type_name')
    def validate_type_name(self, key, type_name):
        if not type_name:
            raise ValueError("Field cannot be empty")
        else:
            return type_name

#need to create questions for safety plan then edit model for it       
class SafetyPlan(db.Model, SerializerMixin):
    __tablename__ = 'safetyplans'

    id = db.Column(db.Integer, primary_key=True)
    question1 = db.Column(db.String)
    question2 = db.Column(db.String)
    question3 = db.Column(db.String)
    question4 = db.Column(db.String)
    question5= db.Column(db.String)



#add __repr__ for debugging purposes
    def __repr__(self):
            return f"SafetyPlan(id={self.id}, question1 ='{self.question1}'),question2 ='{self.question2}'),question3 ='{self.question3}'),question4 ='{self.question4}'),question5 ='{self.question5}'),"
    

#add validation to check that plan_content and creation_date fields are not empty
    @validates('question_1', 'question_2', 'question_3', 'question_4', 'question_5')
    def validate_question_fields(self, key, value):
        if not value:
            raise ValueError("Field cannot be empty")
        else:
            return value
        

class Consultation(db.Model, SerializerMixin):
    __tablename__ = 'consultations'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    message = db.Column(db.String)


#add__repr__ for debugging purposes
    def __repr__(self):
        return f"Consultation(id={self.id}, name='{self.name}', email='{self.email}', message='{self.message}')"

#add serialization
#Exclude consultation_agencies relationship
    serialize_rules = ('-consultation_agencies.consultation',)  

#add validation
    @validates('name', 'email', 'subject', 'message')
    def validate_non_empty_fields(self, key, value):
        if not value:
            raise ValueError("Field cannot be empty")
        else:
            return value
        
class ConsultationAppt(db.Model, SerializerMixin):
    __tablename__= 'consultationAgenies'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    day = db.Column(db.String)
    startTime = db.Column(db.String)
    endTime = db.Column(db.String)

class ConsultationAgency(db.Model, SerializerMixin):
    __tablename__= 'consultationAgencies'
    id = db.Column(db.Integer, primary_key=True)
    consultation_id = db.Column(db.Integer, db.ForeignKey('consultations.id'))
    agency_id = db.Column(db.Integer, db.ForeignKey('agencies.id'))

#add __repr__ for debugging purposes
    def __repr__(self):
        return f"ConsultationAgency(consultation_id={self.consultation_id}, agency_id={self.agency_id})"
    
#add serialization
#Exclude consultation_resources relationship
    serialize_rules = ('-consultation_agencies.agency',) 

