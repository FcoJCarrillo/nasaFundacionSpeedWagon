from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String(30), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    direction = db.Column(db.String(100), nullable=True)
    nationality = db.Column(db.String(30), nullable=True)
    is_active = db.Column(db.Boolean, nullable=False)

    # Relación uno a muchos (un usuario puede tener varios datos adicionales)
    adicional_data = db.relationship(
        'AdicionalUserData',
        backref='user',
        lazy=False
    )

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "lastName": self.lastName,
            "is_active": self.is_active,
            "adicional_data": [a.serialize() for a in self.adicional_data]
        }


class AdicionalUserData(db.Model):
    __tablename__ = 'adicional_user_data'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    height = db.Column(db.Integer, nullable=False)
    weight = db.Column(db.Integer, nullable=False)
    lastUpdate = db.Column(db.DateTime, default=db.func.current_timestamp())
    picture = db.Column(db.String(120), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)

    def serialize(self):
        return {
            "height": self.height,
            "weight": self.weight,
            "lastUpdate": self.lastUpdate,
            "picture": self.picture,
            "user_id": self.user_id
        }

