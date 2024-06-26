from sqlalchemy import Column, Integer, String, Boolean
from app.core.database import Base
from app.core.env_settings import settings

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    description = Column(String)
    is_active = Column(Boolean, default=True)