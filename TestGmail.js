var util = require('util')
browser.ignoreSynchronization = true;
var value = 'test';
var site = 'https://www.gmail.com/';
var login = 'janedoeisrael@gmail.com';
var password = 'qwe123qwe123';


describe('Test Gmail', function(){
    
    var Gmail = require('./Gmail.js');
    
    it('Test with PageObject', function(){
        
        Gmail.LoadSite(site);
        Gmail.InputLoginBox(login);
        Gmail.ClickNextLoginButton();
        Gmail.InputPasswordBox(password);
        Gmail.ClickNextPasswordButton();
        
        Gmail.ClickComposeButton();
        Gmail.InputRecipientesBox('dmitryklimenkov@gmail.com');
        Gmail.InputSubjectBox('SubjectField');
        Gmail.InputMessageBox('MessageField');
        Gmail.ClickSaveAndCloseButton();
        
        Gmail.ClickDraftsButton();
        Gmail.ClickLastDraftsMessage();
        Gmail.CheckDrafts('dmitryklimenkov@gmail.com', 'SubjectField', 'MessageField');
        Gmail.ClickSendButton();
        Gmail.ClickSentMailButton();
        Gmail.ClickLastSentMailMessage();
        
        Gmail.LogOut();

    })  
});
