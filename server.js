import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(bodyParser())

const nocache = (req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
}

app.use(nocache)

app.post('/api/auth/connect/token', (req, res) => {
  let resp = {
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCJ9.eyJuYmYiOjE2OTU0MDY1NDcsImV4cCI6MTY5NTQwNzE0NywiaXNzIjoiaHR0cHM6Ly9pbmNhcGkyYXV0aC5pbmNwcmFjYS5wbCIsImNsaWVudF9pZCI6IjtLVDdfR1dtKWspbV8jNi8iLCJzdWIiOiIxMjg2MTQiLCJhdXRoX3RpbWUiOjE2OTUzNDU5NzIsImlkcCI6ImxvY2FsIiwidXNlcl9pZCI6IjEyODYxNCIsImVtYWlsIjoidWVlNG81YjlweXNiQG9wYXlxLmNvbSIsIm5hbWUiOiJBQiBCIiwiZmlyc3RuYW1lIjoiQUIiLCJzdXJuYW1lIjoiQiIsInJvbGUiOiIxIiwiaWF0IjoxNjk1NDA2NTQ3LCJzY29wZSI6WyJlbWFpbCIsIkluY0FQSTIiLCJvcGVuaWQiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsiY3VzdG9tIl19.ajzcgAvwpfBErt439AMHRBSAEprRVtYhmGe0-PQcH7po6M-T5QinGqffFpMzqpfWNtQWDL_geqgWeg4zt1hqN2k6-skBzHnq4lOzBpibkcB5YHBW4IUbo9kPs0miKZptHYYkCCCUKn_QI2usxW9WetasADIfMiAjsGM4brRfY-HI2JbLyB453DQMv_QOCzaYl_tEIEAjknEtTC-tYb9Wc2kGuLkCVbebQ7j7N3bwILNL2X1MyKy2sG0Top59uAFwtvLrKuqUD8bcArfBdF9t90bO7NalG3d2zzazLGy5rZSpCyIAKkv8w41vHMGtFQI6mr_aCRslqcrilXCrbka0FA",
    "expires_in": 600,
    "token_type": "Bearer",
    "refresh_token": "EEA111C6210EDB9BD87111D4A6F684768F54DAEC4A679856DDE59B60F2AE673B",
    "scope": "email IncAPI2 offline_access openid"
  }
  const obj = JSON.stringify(resp)
  res.end(obj)
})

app.get('/api/Users/UserData/status', (req, res) => {
  res.end(JSON.stringify({
    "completionPercent": 0.0000,
    "wrongTiles": 0,
    "lastModificationDate": "2023-01-01T01:01:01",
    "activationStatus": false
  }))
})

app.get('/api/Training/GetUnfinishedCount', (req, res) => {
  return res.end("1")
})
app.get('/api/Configs/multiple', (req, res) => {
  res.end(JSON.stringify({
    "IncNazwaFirmy": "Grupa InCore Sp. z o.o.",
    "IncAdresFirmy": "ul. Długopolska 3/9",
    "Krs": "0000515488",
    "IncNipFirmy": "7010432727",
    "IncRegonFirmy": "147311677",
    "KapitalZakladowy": "10000",
    "NrCertyfikatuAgencjiPracy": "11163"
}))
})
app.get('/api/OrderList', (req, res, next) => {
  const list = [
    {
      "orderId": "1337",
      "clientNameFull": "WAWJSSPZOO",
      "clientNameShort": "WAWJS",
      "clientLogoFileId": null,
      "dateBegin": null,
      "dateEnd": null,
      "positionName": null,
      "price": "160",
      "address": {
        "country": {
          "id": "PL",
          "countryName": "Poland",
          "localCountryName": "Polska"
        },
        "city": "Janki",
        "street": "Mszczonowska",
        "houseNumber": "3",
        "postalCode": "05-090",
        "province": {
          "id": 7,
          "name": "Mazowieckie"
        },
        "gmina": "Janki",
        "powiat": {
          "id": 646,
          "name": "pruszkowski"
        }
      },
      "jobApplicationStatus": {
        "name": "Pending",
        "id": 1
      }
    },
  ];
  const buildWrappingJson = (list) => {
    return res.json({
      list: list,
      "page": 1,
      "count": list.length,
      "pageSize": 15,
      "offset": 0
    })
  }
  res.json(buildWrappingJson(list))
})

const training1 = {
  "id": 13,
  "name": "Podstawowe Szkolenie BHP",
  "description": "Szkolenie wymagane w celu aplikacji na zlecenia",
  "en_Training_Type": {
    "name": "Podstawowe BHP",
    "id": 1
  }
}

const trainingFinished1 = {
  ...training1,
  "finishDate": "2023-08-18T06:16:08",
}

const trainingsData = {
  "unfinishedTrainings": [
    training1,
    {
      ...training1,
      name: "Sprawdzenie wiedzy z języka JavaScript"
    },
    {
      ...training1,
      name: "Fullstack JS developer quiz"
    },
    {
      ...training1,
      name: "DB basics quiz"
    },
    {
      ...training1,
      name: "DB advanced topics quiz"
    },
  ],
  "finishedTrainings": [
    trainingFinished1,
  ]
};

app.get('/api/Training/FirstPage', (req, res) => {
  res.send(trainingsData)
})

app.get('/users/Training/FirstPage', (req, res) => {
  res.send(trainingsData)
})

app.get([
  '/',
  '/login',
  '/panelPracownika',
  '/tabelaOfert',
  '/zlecenie/:nr',
  '/accountApprove',
  '/mojePrace',
  '/register',
  '/pliki',
  '/clientRegister/',
  '/regulamin/politykaPrywatnosci',
  '/regulamin/pracodawca',
  '/regulamin/tabelaPracodawca',
  '/regulamin/tabelaPracobiorca',
  '/zmianyWRegulaminie/politykaPrywatnosci',
  '/ChangePasswordReqeust/:code',
  '/faq',
  '/dlaRekrutera',
  '/bazaWiedzyDlaRekrutera',
  '/baza-wiedzy',
  '/szkolenia',
  '/dane',
  '/zlecenie/:jobId',
  '/panelKlienta/produkty',
  '/panelKlienta',
  '/edytorZlecen',
  '/listaZlecen',
  '/lista-ogloszen',
  '/dodaj-ogloszenie',
  '/panelKlienta/obiekty',
  '/edytuj-ogloszenie/:advId/:custId',
], (req, res) => {
  let src = fs.readFileSync('./static/index.html').toString()
  src = src.replace('/app/runtime.58908f3dbdb804a00215.js', '/runtime.58908f3dbdb804a00215.js')
  res.end(src)
})

app.get('/safe-proxy/*', (req, res) => {
  res.end("// Yes, super very safe")
})

app.use(express.static('.'))
app.use(express.static('./static'))
app.use('/app', express.static('./static'))

app.listen(8001);
