function UserService()
{
    var userLogged = true;
    var firstname="";
    var secondname="";
    var ruolo="";
    var isAdmin = false;
    return {
        get() {
            return userLogged;
        },
        set()
        {
            userLogged=(userLogged ? false : true);
        },
        setCred(name,surname,role)
        {
            userLogged=(userLogged ? false : true);
            firstname=name;
            secondname=surname;
            ruolo=role;
        },
        getCred()
        {
            return firstname+" "+secondname;
        },
        getRole()
        {
            return ruolo;
        },
        getisAdmin()
        {
            if(ruolo=="admin")
            {
                isAdmin=true;
                return isAdmin;
            }
            else
                if(ruolo=="user")
                {
                    isAdmin=false;
                    return isAdmin;
                }
        },
        setisAdmin()
        {
            isAdmin=false;
        }
    }
}
module.exports = UserService;
