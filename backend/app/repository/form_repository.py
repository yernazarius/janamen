from httpx import get
from sqlalchemy.orm import Session
from app.dto import form_dto
from app.model.form import Form


class FormRepository:

    def __init__(self, db: Session):
        self.db = db
    
    def insert_data(self, form: form_dto.FormCreateDTO):
        db_form = Form(**form.dict())
        self.db.add(db_form)
        self.db.commit()
        self.db.refresh(db_form)
        return db_form
    
    def get_form(self, form_id):
        return self.db.query(Form).filter(Form.id == form_id).first()
    
    def get_all_forms(self, skip: int | None, limit: int | None):
        if limit == 0 or limit is None:
            return self.db.query(Form).offset(skip).all()
        return self.db.query(Form).offset(skip).limit(limit).all()
    