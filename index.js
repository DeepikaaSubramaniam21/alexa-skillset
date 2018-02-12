/**
    Recipes to make dhaal - Alexa voice activated
 **/

'use strict';

const Alexa = require('alexa-sdk');;
const APP_ID = 'amzn1.ask.skill.c60cd5fa-2f1b-4557-af70-9e90383ef9b7';

const languageStrings = {
    'en-US': {
        translation: {
            RECIPES: {
              dhaal: {
                  instructions: 'Ingredients: half cup thuvar dhal, salt. For tempering: quarter teaspoon mustard seeds, one tablespoon oil, five to six curry leaves, two red chillies. Step 1. Add dhaal and twice the amount of water and presssure cook for 3-4 whistles, until soft. Step 2: In a frying pan, on medium flame, add one tablespoon oil. Step 3: When oil is hot, add the mustard seeds and wait till it splutters. Then add the red chillies, curry leaves and fry for 30 seconds. Step 4: Add the cooked dhaal to the frying pan and half cup of water. Add salt to taste. Stir it and leave it for 5 mins. <break time="1s"/> Hot dhaal is ready to be served! <break time="1s"/> Tip, Add a quarter teaspoon cooking oil to pressure cook dhaal, for it to be well done',
                  ingredients: 'Half cup thuvar dhaal, salt. For tempering: quarter teaspoon mustard seeds, one tablespoon oil, five to six curry leaves, two red chillies',
                  get_ingredients_prep_message: 'Here are the ingredients to make dhaal: <break time="500ms"/>',
                  get_recipe_prep_message: "Here's your recipe to make dhaal: <break time='500ms'/>",
                  skill_card_recipe: 'Recipe for dhaal',
                  skill_card_ingredients: 'Ingredients for dhaal'
              }
            },
            HELP_MESSAGE: 'I can tell you the recipe or ingredients to make dhaal... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            HELP_NOTFOUND_RECIPE: 'Sorry, I did not find the recipe for that one',
            HELP_NOTFOUND_INGREDIENT: 'Sorry, I did not find the ingredients for that one',
            STOP_MESSAGE: 'Goodbye!',
        },
    }
};

const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', this.t('HELP_MESSAGE'), this.t('HELP_REPROMPT'));
    },
    'GetRecipe': function () {
        const recipe = this.t('RECIPES')['dhaal']['instructions'];
        const speechOutput = this.t('RECIPES')['dhaal']['get_recipe_prep_message'] + recipe;
        this.emit(':tellWithCard', speechOutput,this.t('RECIPES')['dhaal']['skill_card_recipe'], recipe );
    },
    'GetIngredients': function () {
        const ingredients = this.t('RECIPES')['dhaal']['ingredients'];
        const speechOutput = this.t('RECIPES')['dhaal']['get_ingredients_prep_message'] + ingredients;
        this.emit(':tellWithCard', speechOutput, this.t('RECIPES')['dhaal']['skill_card_ingredients'], ingredients);
    },
    'GetRecipeIntent': function() {
        var slot = this.event.request.intent.slots.RECIPES.value;
        if(slot)
        {
            slot = slot.toString().toLowerCase();
            const recipe = this.t('RECIPES')[slot]['instructions'];
            const speechOutput = this.t('RECIPES')[slot]['get_recipe_prep_message'] + recipe;
            this.emit(':tellWithCard', speechOutput,this.t('RECIPES')[slot]['skill_card_recipe'], recipe );
        }
        else if(slot === undefined || slot === '')
        {
           this.emit(':tell', this.t('HELP_NOTFOUND_RECIPE'));
        }
    },
    'GetIngredientsIntent': function() {
        var slot = this.event.request.intent.slots.RECIPES.value;
        if(slot)
        {
            slot = slot.toString().toLowerCase();
            const ingredients = this.t('RECIPES')[slot]['ingredients'];
            const speechOutput = this.t('RECIPES')[slot]['get_ingredients_prep_message'] + ingredients;
            this.emit(':tellWithCard', speechOutput, this.t('RECIPES')[slot]['skill_card_ingredients'], ingredients);
        }
        else if (slot === undefined || slot === '')
        {
            this.emit(':tell', this.t('HELP_NOTFOUND_INGREDIENT'));
        }
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_REPROMPT');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
