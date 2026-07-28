# BrainRot Index — Frontend

React (Vite) + plain CSS frontend for the "BrainRot Index" student mental wellness
predictor. Talks to your existing FastAPI backend (`main.py`) with **zero backend
changes**.

## 1. Start the backend first

```bash
uvicorn main:app --reload
```

Confirm it's up at `http://127.0.0.1:8000` (visiting `/` should return the
welcome message, and CORS is already open via `allow_origins=["*"]`).

## 2. Run the frontend

```bash
npm install
npm run dev
```

Vite will open the app at `http://localhost:5173`.

## Project structure

```
src/
  config.js                  # APP_NAME + API_BASE_URL — change these in one place
  data/formOptions.js        # dropdown values, mirrors the backend Literal[...] fields
  utils/api.js               # fetch() call to POST /predict + error normalization
  utils/scoreUtils.js        # score -> label/color/progress mapping
  components/
    Header/                  # sticky nav + brand
    Hero/                    # hero copy + animated "pulse" signature visual
    PredictionForm/          # all 12 StudentData fields
    LoadingState/            # "Analyzing Mental Wellness…" spinner
    ErrorAlert/               # network / validation / server error cards
    ResultCard/               # animated score result + progress bar
    Footer/
  App.jsx                    # idle -> loading -> success|error state machine
```

## Theme system

Dark Mode is the default. The toggle (sun/moon, top-right of the nav bar) flips
`<html data-theme="...">`, which swaps every color/gradient/shadow variable in
`src/index.css` — layout, spacing, and components stay identical between themes.
The choice is saved to `localStorage` (`brainrot-index-theme`) and re-applied on
refresh via a tiny inline script in `index.html` (so there's no flash of the
wrong theme before React mounts).

To retune either palette, edit the `:root` (dark) or `:root[data-theme='light']`
block at the top of `src/index.css` — every component reads from those tokens,
nothing else needs to change.

## Notes

- The payload sent to `/predict` uses the exact field names from `StudentData`
  (`age`, `gender`, `country`, `academic_level`, `most_used_platform`,
  `purpose_of_use`, `avg_daily_usage_hours`, `daily_unlocks`, `study_hours`,
  `physical_activity_hours`, `sleep_hours_per_night`, `stress_level`).
- The result card assumes `predicted_mental_health_score` is on a **0–10 scale
  where higher = better wellbeing**. If your model's target is scored the
  opposite way, flip the bands in `src/utils/scoreUtils.js`.
- To rename the product from "BrainRot Index", edit `APP_NAME` in `src/config.js`
  — it flows into the header, hero, and footer automatically.
- If you deploy the backend somewhere other than `127.0.0.1:8000`, update
  `API_BASE_URL` in `src/config.js`.
