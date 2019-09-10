class User{

    constructor(name, password, email, cardNumber, adress, city, record){
        this.name= name;
        this.password= password;
        this.email= email;
        this.cardNumber= cardNumber;
        this.adress= adress;
        this.city= city;
        this.record= record;
    }

    uRegister(){

    }

    login(userName)
    {if(userName.equals("pipegarcial159")) {
                return true;
            }
            return false;
        }

    password(userpassword)
    {if(userpassword.equals("12345")){
            return true;
        }
        return false;
    }
    Search(){

    }

    Buy(){

    }

    











}