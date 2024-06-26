from typing import Optional
from pydantic import BaseModel, EmailStr
from app.model.form import FamilyStatusEnum, OccupationStatusEnum, CityOfCastingEnum



class FormCreateDTO(BaseModel):
    first_name: str
    last_name: str
    patronic_name: Optional[str] = None
    phone_number: str
    family_status: FamilyStatusEnum
    occupation_status: OccupationStatusEnum
    goal: str
    health_issues: Optional[str] = None
    height: int
    weight: int
    date_of_birth: str
    city_of_casting: CityOfCastingEnum
    final_participation: Optional[bool] = False

class FormResponseDTO(FormCreateDTO):
    first_name: str
    last_name: str
    patronic_name: Optional[str] = None
    phone_number: str
    family_status: FamilyStatusEnum
    occupation_status: OccupationStatusEnum
    goal: str
    health_issues: Optional[str] = None
    height: int
    weight: int
    date_of_birth: str
    city_of_casting: CityOfCastingEnum
    final_participation: Optional[bool] = False

    class Config:
        orm_mode = True
        from_attrubutes = True

