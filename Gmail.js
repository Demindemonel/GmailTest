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
var SendButton = element(by.xpath('//div[@aria-label=\"Send ‪(Ctrl-Enter)‬\"]'));

var SentMailButton = element(by.xpath('//a[starts-with(@title,"Sent Mail")]'));

var LastSentMailMessage = element(by.xpath('.//*[@id=":2"]/div/div[3]//tr[1]/td[6]'));

var GoogleAccount = element(by.xpath('//a[starts-with(@title,"Google Account:")]'));
var LogOuthref = 'https://accounts.google.com/Logout?hl=en&continue=https://mail.google.com/mail&service=mail&timeStmp=1498468873&secTok=.AG5fkS86SZuRsPP6FfHw19-6mbF8z0IyeA';

var DraftsRecipientesBox = element(by.xpath('//span[@class="vN bfK a3q"]'));
var DraftsSubjectBox = element(by.xpath('//input[@name="subject"]'));
var DraftsMessageBox = element(by.xpath('//div[@aria-label=\"Message Body\"]'));

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
            
    }
    this.InputSubjectBox = function(value){
        SubjectBox.sendKeys(value);
    }
    this.InputMessageBox = function(value){
        MessageBox.sendKeys(value);
    }
    
    this.ClickSaveAndCloseButton = function(){
        SaveAndCloseButton.click();
        browser.sleep(sleep)
    }
    
    this.ClickDraftsButton = function(){
        DraftsButton.click();
        browser.sleep(sleep);
    }
    //this.ClickLastDraftsMessage = function(){
    //    LastDraftsMessage.click();
    //    browser.sleep(sleep);
    //} 
    this.ClickLastDraftsMessage = function(){
        LastDraftsMessage.click();
        browser.sleep(sleep);        
    } 
    
    this.CheckDrafts = function(value1, value2, value3){
        DraftsRecipientesBox.getAttribute('email').then(function (text) {
            if (text === value1){
                console.log('norm1');
                DraftsSubjectBox.getAttribute('value').then(function(value){
                    if(value === value2){
                        console.log('norm2');
                        DraftsMessageBox.getText().then(function(text){
                            if(text === value3){
                            console.log('norm3');
                            }
                            else{
                                console.log('ne norm3');
                                browser.close();
                            }
                        })
                    }
                    else{
                        console.log('ne norm2');
                        browser.close();
                    }
                });
            }
            else{
                console.log('ne norm1');
                browser.close();
            }
        });
        
            
    }
    
    this.ClickSendButton = function(){
        SendButton.click();
        browser.sleep(sleep);
    }

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
