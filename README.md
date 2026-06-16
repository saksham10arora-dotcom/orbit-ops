# OrbitAir — Hyperlocal Air Quality Platform

> Search any city, get real-time AQI, 48-hour forecast, ML-powered 6-hour prediction, and interactive map — all from live data, no API keys required.

Live: **https://orbit-ops-mu.vercel.app**

---

## What It Does

- **Current AQI** (US standard) with color-coded severity
- **Pollutant breakdown** — PM2.5, PM10, NO2, O3
- **Weather context** — temperature, humidity, wind speed, UV index
- **48-hour forecast** — AQI distribution pie chart with health impact analysis
- **7-day historical trends** — area chart of past week's air quality
- **Interactive map** — flies to searched city with live AQI marker, satellite toggle
- **AI prediction** — Random Forest trained live on city's 7-day history, predicts next 6 hours with 80% confidence intervals and feature importances
- **Auth** — Supabase sign-up / login (email + password)

## Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18 + TypeScript + Vite |
| **UI** | shadcn/ui + Tailwind CSS + Recharts + Leaflet |
| **Backend** | FastAPI (Python) — deployed as Vercel serverless functions |
| **ML** | scikit-learn Random Forest, trained per-request on live data |
| **Auth** | Supabase (email/password) |
| **Air Quality** | [Open-Meteo Air Quality API](https://open-meteo.com/en/docs/air-quality-api) |
| **Weather** | [Open-Meteo Forecast API](https://open-meteo.com/en/docs) |
| **Geocoding** | OpenStreetMap Nominatim |
| **Hosting** | Vercel (frontend + Python serverless functions, free tier) |

No API keys needed for weather/AQI data. All sources are free and open.

## API Endpoints

```
GET /api/city?name=London
```
Returns current AQI, pollutants, weather, 48h forecast, 7d historical.

```
GET /api/ml?name=London
```
Trains a Random Forest on the city's 7-day hourly data and returns 6-hour AQI predictions with confidence intervals and feature importances.

## Running Locally

### 1. Clone and install frontend

```bash
npm install
```

### 2. Set up environment

Create `.env.local` at the repo root:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_URL=http://localhost:8000
```

### 3. Run the backend

```bash
cd aqi_mvp_backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### 4. Run the frontend

```bash
npm run dev
```

Open `http://localhost:5173`, click **Enter Site**, search any city.

## Example `/api/city` Response

```json
{
  "city": "New Delhi",
  "lat": 28.61,
  "lon": 77.21,
  "current": {
    "aqi": 526,
    "label": "Hazardous",
    "pm2_5": 85.7,
    "pm10": 377.2,
    "no2": 7.5,
    "o3": 161.0,
    "temperature": 35.0,
    "humidity": 38,
    "wind_speed": 3.9,
    "uv_index": 7.65
  },
  "forecast": [ ... ],
  "historical": [ ... ]
}
```

## Example `/api/ml` Response

```json
{
  "city": "New Delhi",
  "model": "Random Forest",
  "training_samples": 168,
  "r2_score": 0.94,
  "feature_importances": [
    { "feature": "pm2_5", "importance": 0.48 },
    { "feature": "o3",    "importance": 0.21 },
    ...
  ],
  "predictions": [
    { "hour": "14:00", "predicted_aqi": 312, "lower": 280, "upper": 344, "label": "Very Unhealthy" },
    ...
  ]
}
```

## Team

Built at a hackathon by Satyansh Gaur, Saksham Arora, Sarthak Mehta, Vaibhav.

## License

MIT
