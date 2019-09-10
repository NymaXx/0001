class ScreenLogin{

    constructor(inputArraylist,user,input){
        this.inputArraylist=inputArraylist;
        this.inputArraylist=[];
        this.user=user;
        this.input=input;
        

     //this.nameInput= new Input();
     //this.passInput= new Input();
    }

    LoginScreen() {
        this.input=new Input;
        this.user= new User;
        this.inputArraylist = new Input [2];
        let incrementPosY=0;
        for(let i=0; i<this.inputArraylist.length; i++) {
            this.inputArraylist[i] = new Input(p,258,780+incrementPosY);
            incrementPosY+=50;
        }
    }

    paint() {
        for(let i=0; i<this.inputArraylist.length;i++) {
            this.inputArraylist[i].paint();
            console.log("pintar");
        }
    }
    
    focusInputs(mouseX, mouseY) {
        for(let i=0; i<this.inputArraylist.length;i++){
            if(mouseX>=this.inputArraylist[i].getPosX() && mouseX<= this.inputArraylist[i].getPosX() +200
                    && mouseY>this.inputArraylist[i].getPosY() && mouseY<= this.inputArraylist[i].getPosY()+30) {
                this.inputArraylist[i].setFocus(true);
            }else {
    
               this.inputArraylist[i].setFocus(false);
            }	
            }
        }
    
    writeTextInput(key) {
        for(let i=0; i<this.inputArraylist.length;i++) {
            if(this.inputArraylist[i].isFocus() && this.inputArraylist[i].getText().length()<15) {
                this.inputArraylist[i].setText(this.inputArraylist[i].getText()+ key);
                }
            }
        }
    


    focusInputs(){

    }

    writeTextInput(){

    }

    paint(){
        image(a, 0,0, width, height);
    }

    goHome(){
        if(mouseX >= 140 && mouseX <= 360 && mouseY >= 1019 && mouseY <= 1099 ){
            screen = 2;
        }
    }

    goRegister(){
        if(mouseX >= 386 && mouseX <= 599 && mouseY >= 1019 && mouseY <= 1099 ){
            screen = 1;
        }
    }
}