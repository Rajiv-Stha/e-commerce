let editMode = false

const displayUserInfo=()=>{
    if(fetchLoggedInUser()){
        let user = fetchLoggedInUser()
        console.log(user)

        document.querySelector(".user_name").innerText = user.username;
        document.querySelector(".user_email").innerText = user.email

    }

}
const handleLogout=()=>{
    removeUserFromLs()
    location.href=frontendUrl;
}
const handleUpdateUser=async()=>{
    let user = fetchLoggedInUser()
    const userData = {
        username: document.querySelector(".edit_username").value ,
        email:  document.querySelector(".edit_useremail").value 
    }
    try {
     const {data,status} =await   axios.put(`${backendUrl}/user/${user?._id}`,userData)
        if(status===200){
            localStorage.setItem("user",JSON.stringify(data.message));
            displayUserInfo()
        }
    } catch (error) {
        console.log(error)
    }

}
document.querySelector(".editBtn").addEventListener("click",()=>{

    if(editMode){
        handleUpdateUser()
        document.querySelector(".account_information_info_para").style.display = "block"
        document.querySelector(".account_information_edit_acccount").style.display= "none"
             document.querySelector(".editBtn").innerText = "Edit"
        editMode=false
    }else{

        
        const user = fetchLoggedInUser()
        document.querySelector(".account_information_info_para").style.display = "none"
        document.querySelector(".account_information_edit_acccount").style.display= "block"
        document.querySelector(".edit_username").value = user.username
        document.querySelector(".edit_useremail").value = user.email;
        document.querySelector(".editBtn").innerText = "Save";
        editMode = true;
    }
})
document.querySelector(".logutBtn").addEventListener("click",handleLogout)
displayUserInfo()