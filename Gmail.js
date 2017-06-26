browser.ignoreSynchronization = true;
var LoginBox = element(by.id('identifierId'));
var PasswordBox = element(by.name('password'));
var NextLoginButton = element(by.id('identifierNext'));
var NextPasswordButton = element(by.id('passwordNext'));

var ComposeButton = element(by.css('.T-I-KE'));         
var RecipientesBox = element(by.xpath('//textarea[@aria-label=\"To\"]'));
var SubjectBox = element(by.name('subjectbox'));
var MessageBox = element(by.xpath('//div[@aria-label=\"Message Body\"]'));
var SaveAndCloseButton = element(by.xpath('//img[@aria-label=\"Save & Close\"]'));

var DraftsButton = element(by.xpath('//a[starts-with(@title,"Drafts")]'));
var LastDraftsMessage = element(by.xpath('.//*[@id=":2"]/div/div[2]//tr[1]/td[6]'));
var DraftSubjectField = element(by.xpath('//table[@class="cf Ht"]//td[1]//h2/div[2]'));
var SendButton = element(by.xpath('//div[@aria-label=\"Send ‪(Ctrl-Enter)‬\"]'));

var SentMailButton = element(by.xpath('//a[starts-with(@title,"Sent Mail")]'));

var LastSentMailMessage = element(by.xpath('.//*[@id=":2"]/div/div[3]//tr[1]/td[6]'));

var GoogleAccount = element(by.xpath('//a[starts-with(@title,"Google Account:")]'));
var LogOuthref = 'https://accounts.google.com/Logout?hl=en&continue=https://mail.google.com/mail&service=mail&timeStmp=1498468873&secTok=.AG5fkS86SZuRsPP6FfHw19-6mbF8z0IyeA';

var RecipientesBoxSaved, SubjectBoxSaved, MessageBoxSaved;

var Gmail = function(){
    
    this.InputLoginBox = function(value){
        LoginBox.sendKeys(value);
    }
    this.ClickNextLoginButton = function(){
        NextLoginButton.click();
        browser.sleep(5000);
    }
    this.InputPasswordBox = function(value){
        PasswordBox.sendKeys(value);
    }
    this.ClickNextPasswordButton = function(){
        NextPasswordButton.click();
        browser.sleep(5000);
    }
    this.LoadSite = function(value){
        return browser.get(value);
    }
    
    this.ClickComposeButton = function(){
        ComposeButton.click();
        browser.sleep(5000);
    }
    
    this.InputRecipientesBox = function(value){
        RecipientesBox.sendKeys(value);
        RecipientesBoxSaved = RecipientesBox.getText();
    }
    this.InputSubjectBox = function(value){
        SubjectBox.sendKeys(value);
        SubjectBoxSaved = SubjectBox.getText();
    }
    this.InputMessageBox = function(value){
        MessageBox.sendKeys(value);
        MessageBoxSaved = MessageBox.getText();
    }
    
    this.ClickSaveAndCloseButton = function(){
        SaveAndCloseButton.click();
        browser.sleep(5000)
    }
    
    this.ClickDraftsButton = function(){
        DraftsButton.click();
        browser.sleep(5000);
    }
    this.ClickLastDraftsMessage = function(){
        LastDraftsMessage.click();
        browser.sleep(5000);
    } 
    this.ClickSendButton = function(){
        SendButton.click();
        browser.sleep(5000);
    }
    
    //this.Check = function(){
    //    if(RecipientesBoxSaved == RecipientesBox.getText() && SubjectBoxSaved == SubjectBox.getText() && MessageBoxSaved == MessageBox.getText()){
    //        SentMailButton.click();
    //        browser.sleep(1000);
    //    }
    //    else{
    //        console.log('Wrong message');
    //        browser.close();
    //    }
    //}

    this.ClickSentMailButton = function(){
        SentMailButton.click();
        browser.sleep(5000);
    }
    this.ClickLastSentMailMessage = function(){
        LastSentMailMessage.click();
        browser.sleep(5000);
    }
    this.LogOut = function(){
        GoogleAccount.click();
        browser.sleep(5000);
        browser.get(LogOuthref);
    }
   
};
module.exports = new Gmail();