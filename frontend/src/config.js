// Central place to tweak branding and API target without touching component code.

export const APP_NAME = 'BrainRot Index'
export const APP_TAGLINE = 'Predict Student Mental Health Score using Machine Learning'

// Must match the FastAPI server started with: uvicorn main:app --reload
export const API_BASE_URL = 'https://brainrot-index-1.onrender.com'
export const PREDICT_ENDPOINT = `${API_BASE_URL}/predict`
