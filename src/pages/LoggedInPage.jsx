import React from "react";


function LoggedIn(){
    return(
        <>
        {( ()=>{
            if(userProfile.profileType=='receptionist'){
                return(
                    <>
                    </>
                )
            }
            else if(userProfile.profileType=='doctor'){
                return(
                    <></>
                )
            }
            else if(userProfile.profileType=='nurse'){
                return(
                    <></>
                )
            }
            else if(userProfile.profileType=='labTech'){
                return(
                    <></>
                )
            }
        })()}
        </>

    );
};

export default LoggedIn;