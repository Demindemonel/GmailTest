var sleep = 1000;
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
// не использовал var DraftSubjectField = element(by.xpath('//table[@class="cf Ht"]//td[1]//h2/div[2]'));
var SendButton = element(by.xpath('//div[@aria-label=\"Send ‪(Ctrl-Enter)‬\"]'));

var SentMailButton = element(by.xpath('//a[starts-with(@title,"Sent Mail")]'));

var LastSentMailMessage = element(by.xpath('.//*[@id=":2"]/div/div[3]//tr[1]/td[6]'));

var GoogleAccount = element(by.xpath('//a[starts-with(@title,"Google Account:")]'));
var LogOuthref = 'https://accounts.google.com/Logout?hl=en&continue=https://mail.google.com/mail&service=mail&timeStmp=1498468873&secTok=.AG5fkS86SZuRsPP6FfHw19-6mbF8z0IyeA';




//Надо найти следующие элементы
//var DraftsRecipientesBox = element(by.xpath('//form[@id=":6m"]/div[2]/div')); //неверный локатор
//var DraftsSubjectBox = element(by.xpath('//input[@aria-label=\"Subject\"]'));
//var DraftsMessageBox = element(by.xpath('//div[@aria-label=\"Message Body\"]'));


var RecipientesBoxSaved, SubjectBoxSaved, MessageBoxSaved;



var Gmail = function(){
    
    this.InputLoginBox = function(value){
        LoginBox.sendKeys(value);
    }
    this.ClickNextLoginButton = function(){
        NextLoginButton.click();
        browser.sleep(sleep);
    }
    this.InputPasswordBox = function(value){
        PasswordBox.sendKeys(value);
    }
    this.ClickNextPasswordButton = function(){
        NextPasswordButton.click();
        browser.sleep(sleep);
    }
    this.LoadSite = function(value){
        return browser.get(value);
    }
    
    this.ClickComposeButton = function(){
        ComposeButton.click();
        browser.sleep(sleep);
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
        browser.sleep(sleep)
    }
    
    this.ClickDraftsButton = function(){
        DraftsButton.click();
        browser.sleep(sleep);
    }
    this.ClickLastDraftsMessage = function(){
        LastDraftsMessage.click();
        browser.sleep(sleep);
    } 
    this.ClickSendButton = function(){
        SendButton.click();
        browser.sleep(sleep);
    }
    
    //this.CheckDrafts = function(RecipientesBoxSaved, SubjectBoxSaved, MessageBoxSaved){
    //    if(RecipientesBoxSaved === DraftsRecipientesBox.getText() && SubjectBoxSaved === DraftsSubjectBox.getText() && MessageBoxSaved === DraftsMessageBox.getText()){
    //        SentMailButton.click(); //или так this.ClickSentMailButton();
    //        browser.sleep(sleep);
    //    }
    //    else{
    //        console.log('Wrong message'); //при запуске теста в консоли после Started сразу выдает это сообщение (wtf?!)
    //        browser.driver.close();
    //    }
    //}
    
    
    
    
    //this.CheckSentMail = function(){
    //    
    //}
    
    
    
    
    this.ClickSentMailButton = function(){
        SentMailButton.click();
        browser.sleep(sleep);
    }
    this.ClickLastSentMailMessage = function(){
        LastSentMailMessage.click();
        browser.sleep(sleep);
    }
    this.LogOut = function(){
        GoogleAccount.click();
        browser.sleep(sleep);
        browser.get(LogOuthref);
    }
   
};
module.exports = new Gmail();
