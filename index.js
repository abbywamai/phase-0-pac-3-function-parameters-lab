const name="Aki , Samip";
function introduction(name){
    return 'Hi, my name is ${name}.';
}

const language="React , Ember.js"
function introductionWithLanguage(name , language){
    return 'hi, my name is  ${name} and i am learning how to program in ${language}'
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    