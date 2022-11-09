# API

Endereço: http://vps-e0f0b0d2.vps.ovh.ca:7655/

# Rotas

## 1 - Inserir dados no banco de dados

Metodo: `POST`<br/>
Endpoint: `/api/v1/sensor`<br/>
Body: 
```json
{
    "panel_chain": 2,
    "panel_voltage": 22,
    "battery_chain": 2
}
```
Resposta: 
```json
{
    "success": true,
    "data": {
        "id": 4,
        "panel_chain": 2,
        "panel_voltage": 22,
        "battery_chain": 2,
        "updatedAt": "2022-11-09T19:13:33.560Z",
        "createdAt": "2022-11-09T19:13:33.560Z"
    }
}
```

## 2 - Buscar o ultimo registro do painel 

Metodo: `GET`<br/>
Endpoint: `/api/v1/sensor_lastrecord`<br/>
Resposta: 
```json
[
    {
        "id": 4,
        "panel_chain": 2,
        "panel_voltage": 22,
        "battery_chain": 2,
        "createdAt": "2022-11-09T19:13:33.000Z",
        "updatedAt": "2022-11-09T19:13:33.000Z"
    }
]
```
