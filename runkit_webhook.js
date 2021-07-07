const express = require('express');
const app = express()
app.use(express.json());

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

    switch (action) {
        case 'input.unknown': {
            if (isOutputContextPresent(outputContexts, 'pain-set') && exitPhrasesAreNotPresent(queryText)) {
                responseJson = { "followupEventInput": { "name": "PAIN" } }
            } else if (isOutputContextPresent(outputContexts, 'pain-set')) {
                responseJson = { "followupEventInput": { "name": "STOP" } }
            }
        }
        break;
        case 'checkIfUserWantsToProcede': {
            if (isOutputContextPresent(outputContexts, 'start') && exitPhrasesAreNotPresent(queryText) && isAnswerPositive(parameters.Answer) === 'true') {
                responseJson = { "followupEventInput": { "name": "DIAGNOSIS" } }
            } else {
                responseJson = {"followupEventInput": { "name": "STOP" }}
            }   
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

function isOutputContextPresent(contexts, searched_context) {
    return contexts.some(context => context.name.toLowerCase().indexOf(searched_context) > -1);
}

function exitPhrasesAreNotPresent(queryText) {
    const exitFallbackPhrases = ['exit', 'basta', 'fermati', 'stop', 'esci', 'annulla'];
    return !exitFallbackPhrases.includes(queryText.toLowerCase());
}