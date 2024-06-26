from app.repository import FormRepository
from sqlalchemy.orm import Session

class FormService:
    def __init__(self, db: Session):
        self.db = db
        self.form_repository =  FormRepository(db)

    def get_form(self, form_id):
        try:
            return self.form_repository.get_form(form_id)
        except Exception as e:
            return "Get form by id failed"
    
    def get_all_forms(self, skip: int | None, limit: int | None = None):
        try:
            return self.form_repository.get_all_forms(skip, limit)
        except Exception as e:
            return "Get all forms failed"
    
    def insert_data(self, form):
        try:
            return self.form_repository.insert_data(form)
        except Exception as e:
            return "Insert form failed"
        