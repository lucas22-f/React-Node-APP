


const useAuth = () => {
    const user = localStorage.getItem("JWT");
    if(user!='undefined'&& user!=null){
        return true
    }
    return false;
    
}

export default useAuth