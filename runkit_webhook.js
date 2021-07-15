const express = require('express');
const app = express()
app.use(express.json());

const ageCheck = {max_tries: 2, tries: 0};

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get('/*', (req, res) => {
    var resp = 'This is the response';
    let responseJson = {};
    responseJson.fulfillmentText = 'Hello'; // displayed response
    res.send(resp);
})

app.post('/', (req, res) => {
    const queryResult = req.body.queryResult;
    const fallbackMessage = {
        "fulfillmentMessages": [
            {
                "payload": {
                    "richContent": [
                        [
                            {
                                "type": "info",
                                "subtitle": "Spiacente, ho subito un guasto e sono in fase di manutenzione! Torna più tardi :D",
                                "image": {
                                    "src": {
                                        "rawUrl": "https://img.icons8.com/ultraviolet/452/chatbot.png"
                                    }
                                },
                                "actionLink": ""
                            }
                        ]
                    ]
                }
            }
        ]
    }

    console.log(queryResult);

    if (queryResult !== null) {
        // if action, check it and return response
        if (queryResult.action) {
            responseJson = handleAction(
                queryResult.action,
                queryResult.parameters,
                queryResult.outputContexts,
                queryResult.queryText
            );
            res.send(responseJson);
        }
    } else {
        res.send(fallbackMessage)
    }
})

function handleAction(action, parameters, outputContexts, queryText) {
    let responseJson;
    const STOP_EVENT = { "followupEventInput": { "name": "STOP" } };

    switch (action) {
        case 'input.unknown': {
            if (exitPhrasesAreNotPresent(queryText)) {
                if (isOutputContextPresent(outputContexts, 'pain-set')) {
                    responseJson = { "followupEventInput": { "name": "PAIN" } }
                } else if (isOutputContextPresent(outputContexts, 'user-info')) {
                    // RETRY INPUT NAME
                    console.log('OUTPUT CONTEXT: user-info')
                    responseJson = checkUserName(queryText);
                } else if (isOutputContextPresent(outputContexts, 'name-set')) {
                    // RETRY INPUT COGNOME
                    console.log('OUTPUT CONTEXT: name-set');
                    responseJson = checkUserSurname(queryText, outputContexts);
                } else if (isOutputContextPresent(outputContexts, 'lastname-set')) {
                    // RETRY INPUT GENDER
                    console.log('OUTPUT CONTEXT: lastname-set')
                    responseJson = checkUserGender(parameters, queryText);
                } else if (isOutputContextPresent(outputContexts, 'gender-set')) {
                    // RETRY INPUT AGE
                    console.log('OUTPUT CONTEXT: gender-set')
                    responseJson = checkUserAge(queryText);
                } else if (isOutputContextPresent(outputContexts, 'age-set')) {
                    // RETRY INPUT EMAIL
                    console.log('OUTPUT CONTEXT: age-set')
                    responseJson = checkUserEmail(queryText);
                }
            } else {
                console.log('STOP THE BOT')
                responseJson = STOP_EVENT
            }
        }
        break;
        case 'checkIfUserWantsToProcede': {
            if (isOutputContextPresent(outputContexts, 'start') && exitPhrasesAreNotPresent(queryText) && isAnswerPositive(parameters.Answer) === 'true') {
                responseJson = { "followupEventInput": { "name": "USER-INFO" } }
            } else {
                responseJson = STOP_EVENT
            }   
        }
        break;
        case 'checkUserName': {
            console.log("NAME CHECK: ", queryText)
            responseJson = checkUserName(queryText);
        }
        break;
        case 'checkUserSurname': {
            console.log("SURNAME CHECK: ", queryText)
            responseJson = checkUserSurname(queryText, outputContexts);
        }
        break;
        case 'checkUserGender': {
            console.log("GENDER CHECK: ", parameters)
            responseJson = checkUserGender(parameters, queryText);
        }
        break;
        case 'checkUserAge': {
            responseJson = checkUserAge(queryText);
        }
        break;
        case 'checkUserEmail': {
            responseJson = checkUserEmail(queryText);
        }
        break;
        case 'checkIfUserHasDiagnosis': {
            if (isAnswerPositive(parameters.Answer) === 'true') {
                responseJson = { "followupEventInput": { "name": "DIAGNOSIS" } }
            } else if (isAnswerPositive(parameters.Answer) === 'false') {
                responseJson = { "followupEventInput": { "name": "DETECT-DIAGNOSIS" } }
            } else {
                responseJson = { "followupEventInput": { "name": "PAIN" } }
            }
        }
        break;
    }
    return responseJson;

}

function isAnswerPositive(answer) {
    if (['si', 'yes', 'no'].includes(answer.toLowerCase())) {
        if (['si', 'yes'].includes(answer.toLowerCase())) {
            return 'true';
        } else if (answer.toLowerCase() === 'no') {
            return 'false';
        }
    }
    return 'invalid';
}

function isGenderCorrect(user_gender) {
    user_gender = user_gender.toLowerCase();
    return user_gender === 'maschio' || user_gender === 'femmina';
}

function AreOutputContextsPresent(contexts, searched_contexts) {
    contexts.forEach(context => {
        if (!searched_contexts.some(searched_context => context.name.toLowerCase().indexOf('contexts/' + searched_context) > -1)) {
            return false;
        }
    })
    return true;
}

function capitalizeInitial(string) {
    splitted_string = string.split(' ').map(string => string = string.charAt(0).toUpperCase() + string.slice(1));
    return splitted_string.join(' ');
}

function validateEmail(emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}

function validateNameSurname(string) {
    const special_char = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const numbers = /\d/;
    return !special_char.test(string) && !numbers.test(string)
}

function isOutputContextPresent(contexts, searched_context) {
    return contexts.some(context => context.name.toLowerCase().indexOf('contexts/' + searched_context) > -1);
}

function getUserNameFromOutputContext(outputContexts) {
    result = null;
    outputContexts.some(context => {
        if (context.hasOwnProperty('parameters')) {
            if (context.parameters.name) {
                result = context.parameters.name.name;
            }
        }
    })
    return result;
}

function exitPhrasesAreNotPresent(queryText) {
    const exitFallbackPhrases = ['exit', 'basta', 'fermati', 'stop', 'esci', 'annulla'];
    return !exitFallbackPhrases.includes(queryText.toLowerCase());
}

function checkUserName(queryText) {
    const name = capitalizeInitial(queryText);

    if (name.trim().length > 0 && name.trim().length < 20 && validateNameSurname(name)) {
        responseJson = {
            "fulfillmentMessages": [
                {
                    "payload": {
                        "richContent": [
                            [
                              {
                                "type": "info",
                                "image": {
                                  "src": {
                                    "rawUrl": "https://img.icons8.com/ultraviolet/452/chatbot.png"
                                  }
                                },
                                "actionLink": "",
                                "title": "Bene " + name + ", ora inserisci il tuo cognome."
                              },
                              {
                                "type": "chips",
                                "options": [
                                  {
                                    "text": "Annulla"
                                  }
                                ]
                              }
                            ]
                          ]
                    }
                }
            ],
            "outputContexts": [
                {
                    "name": "projects/geopharmaassistant-uhbj/agent/sessions/ab7e59f3-8192-9f50-4927-feb61e7ab486/contexts/name-set",
                    "lifespanCount": 1,
                    "parameters": {
                        "name": {"name": name},
                        "name.original": queryText
                    }
                }
            ]
        }
    } else {
        responseJson = {
            "fulfillmentMessages": [
                {
                    "payload": {
                        "richContent": [
                            [
                                {
                                    "type": "info",
                                    "title": "Non ho capito bene, prova a reinserire il tuo nome.",
                                    "image": {
                                        "src": {
                                            "rawUrl": "https://img.icons8.com/ultraviolet/452/chatbot.png"
                                        }
                                    }
                                },
                                {
                                    "type": "chips",
                                    "options": [
                                      {
                                        "text": "Annulla"
                                      }
                                    ]
                                }
                            ]
                        ]
                    }
                }
            ],
            "outputContexts": [
                {
                    "name": "projects/geopharmaassistant-uhbj/agent/sessions/ab7e59f3-8192-9f50-4927-feb61e7ab486/contexts/user-info",
                    "lifespanCount": 1
                }
            ]
        }
    }
    return responseJson;
}

function checkUserSurname(queryText, outputContexts) {
    let name = getUserNameFromOutputContext(outputContexts);
    name = name ? capitalizeInitial(name) : '';
    const surname = capitalizeInitial(queryText);
    ;
    if (surname.trim().length > 0 && surname.trim().length < 20 && validateNameSurname(surname)) {
        responseJson = {
            "fulfillmentMessages": [
                {
                    "payload": {
                        "richContent": [
                            [
                              {
                                "type": "info",
                                "image": {
                                  "src": {
                                    "rawUrl": "https://img.icons8.com/ultraviolet/452/chatbot.png"
                                  }
                                },
                                "actionLink": "",
                                "title": "Perfetto " + name + " " + surname + "! qual è il tuo genere?"
                              },
                              {
                                "type": "chips",
                                "options": [
                                  {
                                    "text": "Maschio"
                                  },
                                  {
                                    "text": "Femmina"
                                  },
                                  {
                                    "text": "Annulla"
                                  }
                                ]
                              }
                            ]
                          ]
                    }
                }
            ],
            "outputContexts": [
                {
                    "name": "projects/geopharmaassistant-uhbj/agent/sessions/ab7e59f3-8192-9f50-4927-feb61e7ab486/contexts/lastname-set",
                    "lifespanCount": 1
                }
            ]
        }
    } else {
        responseJson = {
            "fulfillmentMessages": [
                {
                    "payload": {
                        "richContent": [
                            [
                                {
                                    "type": "info",
                                    "title": "Non ho capito bene " + name + ", prova a reinserire il tuo cognome",
                                    "image": {
                                        "src": {
                                            "rawUrl": "https://img.icons8.com/ultraviolet/452/chatbot.png"
                                        }
                                    }
                                }
                            ]
                        ]
                    }
                }
            ],
            "outputContexts": [
                {
                    "name": "projects/geopharmaassistant-uhbj/agent/sessions/ab7e59f3-8192-9f50-4927-feb61e7ab486/contexts/name-set",
                    "lifespanCount": 1,
                    "parameters": {
                        "name": { "name": name }
                    }
                }
            ]
        }
    }
    return responseJson;
}

function checkUserGender(parameters, queryText) {
    var gender;
    let responseJson = '';
    if (parameters.Gender) {
        gender = parameters.Gender;
    } else {
        gender = queryText
    }

    if (!isGenderCorrect(gender)) {
        responseJson = {
            "fulfillmentMessages": [
                {
                    "payload": {
                        "richContent": [
                            [
                                {
                                    "type": "info",
                                    "title": "Il genere inserito non è corretto. Le possibilità sono Maschio o Femmina. Riprova per favore.",
                                    "image": {
                                        "src": {
                                            "rawUrl": "https://img.icons8.com/ultraviolet/452/chatbot.png"
                                        }
                                    }
                                },
                                {
                                    "type": "chips",
                                    "options": [
                                      {
                                        "text": "Maschio"
                                      },
                                      {
                                        "text": "Femmina"
                                      },
                                      {
                                        "text": "Annulla"
                                      }
                                    ]
                                }
                            ]
                        ]
                    }
                }
            ],
            "outputContexts": [
                {
                    "name": "projects/geopharmaassistant-uhbj/agent/sessions/ab7e59f3-8192-9f50-4927-feb61e7ab486/contexts/lastname-set",
                    "lifespanCount": 1
                }
            ]
        }
    }
    return responseJson;
}

function checkUserAge(queryText) {
    const age = parseInt(queryText);
    let responseJson = '';

    if (age < 18 || age > 100) {
        console.log("AGE < 18");
        responseJson = {
            "fulfillmentMessages": [
                {
                    "payload": {
                        "richContent": [
                            [
                                {
                                    "type": "info",
                                    "title": "Spiacente, il servizio è riservato ai soli maggiorenni. Se hai sbagliato ad inserire l'età, riprova.",
                                    "image": {
                                        "src": {
                                            "rawUrl": "https://img.icons8.com/ultraviolet/452/chatbot.png"
                                        }
                                    }
                                },
                                {
                                    "type": "chips",
                                    "options": [
                                        {
                                        "text": "Annulla"
                                        }
                                    ]
                                }
                            ]
                        ]
                    }
                }
            ],
            "outputContexts": [
                {
                    "name": "projects/geopharmaassistant-uhbj/agent/sessions/ab7e59f3-8192-9f50-4927-feb61e7ab486/contexts/gender-set",
                    "lifespanCount": 1
                }
            ]
        }
    }
    return responseJson;
}

function checkUserEmail(queryText) {
    let responseJson = '';
    console.log(validateEmail(queryText));
    if (!validateEmail(queryText)) {
        responseJson = {
            "fulfillmentMessages": [
                {
                    "payload": {
                        "richContent": [
                            [
                                {
                                    "type": "info",
                                    "title": "Spiacente, non hai inserito una email, il formato non è corretto. Controlla e prova di nuovo!",
                                    "image": {
                                        "src": {
                                            "rawUrl": "https://img.icons8.com/ultraviolet/452/chatbot.png"
                                        }
                                    }
                                },
                                {
                                    "type": "chips",
                                    "options": [
                                        {
                                        "text": "Annulla"
                                        }
                                    ]
                                }
                            ]
                        ]
                    }
                }
            ],
            "outputContexts": [
                {
                    "name": "projects/geopharmaassistant-uhbj/agent/sessions/ab7e59f3-8192-9f50-4927-feb61e7ab486/contexts/age-set",
                    "lifespanCount": 1
                }
            ]
        }
    } 

    return responseJson;
}