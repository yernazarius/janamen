from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from fastapi.security import OAuth2PasswordBearer

from app.dto.form_dto import FormCreateDTO, FormResponseDTO
from app.service import form_service

from typing import List
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")


class FormController:
    def __init__(self):
        self.router = APIRouter()
        self.router.post("/insert-form", response_model=FormResponseDTO)(self.insert_form)
        self.router.get("/get-all-forms", response_model=List[FormResponseDTO])(self.get_all_forms)
    
    def insert_form(self, form_data: FormCreateDTO, db: Session = Depends(get_db)):
        try: 
            form_service_instance = form_service.FormService(db)
            return form_service_instance.insert_data(form_data)
        except Exception as e:
            raise HTTPException(status_code=500, detail="Insert form failed")
    
    def get_all_forms(self, skip: int, limit: int, db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
        try:
            form_service_instance = form_service.FormService(db)
            forms = form_service_instance.get_all_forms(skip, limit)
            return forms
        except Exception as e:
            raise HTTPException(status_code=500, detail="Get all forms failed")


form_controller = FormController()
form_router = form_controller.router