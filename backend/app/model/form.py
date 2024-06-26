from sqlalchemy import Column, Integer, String, Boolean, Enum, Text
import enum
from app.core.database import Base

class FamilyStatusEnum(enum.Enum):
    married = 'Женат / Замужем'
    single = 'Холост / Незамужем'
    divorced = 'Разведен / Разведена'
    widowed = 'Вдовец / Вдова'

class OccupationStatusEnum(enum.Enum):
    hired = 'Работаю'
    jobless = 'Безработный'
    studying = 'Учусь'
    retired = 'Пенсионер'

class CityOfCastingEnum(enum.Enum):
    Almaty='Алматы'
    Astana='Астана'
    Turkistan='Туркестан'
    Kyzylorda='Кызылорда'
    Aktau='Актау'
    Aktobe='Актобе'
    Kostanai='Костанай'
    Kokshetau='Кокшетау'
    Pavlodar='Павлодар'
    Oskemen='Усть-Каменогорск'

class Form(Base):
    __tablename__ = 'form'

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    patronic_name = Column(String, nullable=True)
    phone_number = Column(String, nullable=False)
    family_status = Column(Enum(FamilyStatusEnum), nullable=False)
    occupation_status = Column(Enum(OccupationStatusEnum), nullable=False)
    goal = Column(Text, nullable=False)
    health_issues = Column(Text, nullable=True)
    height = Column(Integer, nullable=False)
    weight = Column(Integer, nullable=False)
    date_of_birth = Column(String, nullable=False)
    city_of_casting = Column(Enum(CityOfCastingEnum), nullable=False)
    final_participation = Column(Boolean, default=False)
