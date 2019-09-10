class Button{
    constructor(){

    }


    goBar(){
        if(screen =! 0 || 1){

        
        if(mouseX >= 546 && mouseX <= 720 && mouseY >= 1239 && mouseY <= 1333 ){
            screen = 3;
        }  //profile

        if(mouseX >= 362 && mouseX <= 546 && mouseY >= 1239 && mouseY <= 1333 ){
            screen = 11;
        } //history

        if(mouseX >= 11 && mouseX <= 180 && mouseY >= 1239 && mouseY <= 1333 ){
            screen = 2;
        } //goHome
    }
    }

    goTypesOfFood(){
        
           
                if(mouseX >= 0 && mouseX <= 700 && mouseY >= 843 && mouseY <= 933){
                    screen = 5;
        
                }//fast
        
            
        
           
                if(mouseX >= 0 && mouseX <= 700 &&  mouseY >= 934 && mouseY <= 1014){
                    screen = 4;
                }
            //principal
        
         
                if(mouseX >= 0 && mouseX <= 700 && mouseY >= 1015 && mouseY <= 1099 ){
                    screen = 6;
                }
            //desserts
        
         
                if(mouseX >= 0 && mouseX <= 700 && mouseY >= 1100 && mouseY <= 1185 ){
                    screen = 14;
                }
            //especial
        
    }

    logOut(){
        if(mouseX >= 256 && mouseX <= 487 && mouseY >= 858 && mouseY <= 938){
            screen = 0;
        }
        
    }

    selectSupremeN(){
        if(mousex >= 63 && mouseX <= 681 && mouseY >= 302 && mouseY <= 505){
            screen = 7;
        }
    }
    
}