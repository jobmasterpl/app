const training1 = {
  "id": 1,
  "name": "Podstawowe Szkolenie BHP",
  "description": "Szkolenie wymagane w celu aplikacji na zlecenia",
  "en_Training_Type": {
    "name": "Podstawowe BHP",
    "id": 1
  },
  "trainingPages": [
    {
      "testId": 1,
      "type": {
        "name": "Test",
        "id": 3
      }
    }
  ],
  "pageCount": 1
}


const training2 = {
  "id": 2,
  name: "Fullstack JS developer quiz",
  "description": "Szkolenie wymagane w celu aplikacji na zlecenia",
  "en_Training_Type": {
    "name": "Fullstack JS",
    "id": 2
  },
  "trainingPages": [
    {
      "testId": 2,
      "type": {
        "name": "Test",
        "id": 3
      }
    }
  ],
  "pageCount": 1
}

const training3 = {
  "id": 3,
  name: "Sprawdzenie wiedzy z języka JavaScript",
  "description": "Szkolenie wymagane w celu aplikacji na zlecenia",
  "en_Training_Type": {
    "name": "Wiedza o JS'ie",
    "id": 3
  },
  "trainingPages": [
    {
      "testId": 3,
      "type": {
        "name": "Test",
        "id": 3
      }
    }
  ],
  "pageCount": 1
};

const training4 = {
  "id": 4,
  name: "DB basics quiz",
  "description": "Szkolenie wymagane w celu aplikacji na zlecenia",
  "en_Training_Type": {
    "name": "Podstawy Baz Danych",
    "id": 4
  },
  "trainingPages": [
    {
      "testId": 4,
      "type": {
        "name": "Test",
        "id": 3
      }
    }
  ],
  "pageCount": 1
};

const training5 = {
  "id": 5,
  name: "DB advanced topics quiz",
  "description": "Szkolenie wymagane w celu aplikacji na zlecenia",
  "en_Training_Type": {
    "name": "Zaawanasowana Wiedza z Baz Danych",
    "id": 5
  },
  "trainingPages": [
    {
      "testId": 5,
      "type": {
        "name": "Test",
        "id": 3
      }
    }
  ],
  "pageCount": 1
};

export const trainings = [training1, training2, training3, training4, training5];

export const trainingFinished1 = {
  ...training1,
  "finishDate": "2023-08-18T06:16:08",
}

export const trainingsData = {
  "unfinishedTrainings": [
    training2,
    training3,
    training4,
    training5
  ],
  "finishedTrainings": [
    trainingFinished1,
  ]
};