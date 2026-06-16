# OrbitAir — Hyperlocal Air Quality Platform

> Search any city, get real-time AQI, pollutant breakdown, 48-hour forecast, and interactive map — all from live data sources, no API keys required.

---

## What It Does

Most AQI apps show a single citywide number from a handful of sensors. OrbitAir fuses multiple data streams to give you a complete picture:

- **Current AQI** (US standard) with color-coded severity
- **Pollutant breakdown** — PM2.5, PM10, NO2, O3
- **Weather context** — temperature, humidity, wind speed, UV index
- **48-hour hourly forecast** — see when air quality peaks or improves
- **7-day historical trends** — understand patterns over the past week
- **Interactive map** — flies to the searched city with a live AQI marker

## Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18 + TypeScript + Vite |
| **UI** | shadcn/ui + Tailwind CSS + Recharts + Leaflet |
| **Backend** | FastAPI (Python) |
| **Air Quality Data** | [Open-Meteo Air Quality API](https://open-meteo.com/en/docs/air-quality-api) |
| **Weather Data** | [Open-Meteo Forecast API](https://open-meteo.com/en/docs) |
| **Geocoding** | OpenStreetMap Nominatim |

No API keys needed. All data sources are free and open.

## Running Locally

### Backend

```bash
cd aqi_mvp_backend
pip install fastapi httpx uvicorn
uvicorn app.main:app --reload --port 8000
```

API available at `http://localhost:8000`

**Endpoint:**
```
GET /api/city?name=London
```

Returns current AQI, pollutants, weather, 48h forecast, and 7d historical data.

### Frontend

```bash
npm install
npm run dev
```

Open `http://localhost:5173`, click **Enter Site**, search any city.

## Example Response

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

## Team

Built at a hackathon by Satyansh Gaur, Saksham Arora, Sarthak Mehta, Vaibhav.

## License

MIT
