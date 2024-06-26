from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache

import os

class Settings(BaseSettings):
    DATABASE_PORT: int
    POSTGRES_PASSWORD: str
    POSTGRES_USER: str
    POSTGRES_DB: str
    POSTGRES_HOST: str
    
    DATABASE_URL: str
    
    
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    JWT_ALGORITHM: str = "HS256"
    SECRET_KEY: str
    
    class Config:
        env_file = ".env"


settings = Settings() # type: ignore