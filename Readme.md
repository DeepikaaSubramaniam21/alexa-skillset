

## Overview
The goal of this skillset to provide easy access to South Indian Recipes. 
Currently it gives access to recipe for making South Indian dhaal.


## Delpoyment
 * Deployed as an AWS lambda
 * Logs are pushed by default to CloudWatch
 * Use the AWS lambda ARN in the Alexa Developer Portal to configure the skillset
 
 
## Intent Schema
```{
  "intents": [
    {
      "slots": [
        {
          "name": "RECIPES",
          "type": "LIST_OF_RECIPES"
        }
      ],
      "intent": "GetRecipeIntent"
    },
    {
      "slots": [
        {
          "name": "RECIPES",
          "type": "LIST_OF_RECIPES"
        }
      ],
      "intent": "GetIngredientsIntent"
    },
    {
      "intent": "GetRecipe"
    },
    {
      "intent": "GetIngredients"
    },
    {
      "intent": "AMAZON.HelpIntent"
    },
    {
      "intent": "AMAZON.CancelIntent"
    },
    {
      "intent": "AMAZON.StopIntent"
    }
  ]
}```