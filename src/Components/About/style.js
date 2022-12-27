import styled from "styled-components";

export const StyledAbout = styled.div`
    width: 100%;
    height: 100vh;
    background: #000;
    
`

export const StyledTitle = styled.div`
    width: 100%;
    cursor: default;

    h1 {
        font-family: 'Ubuntu', sans-serif;
        font-size: 220px;
        font-weight: 700;
        text-align: center;
        background: linear-gradient(#444, #000);
        background-clip: text;
        color: transparent;
        -webkit-background-clip: text;
    }
`
export const StyledInfo = styled.div`
    width: 100%;
    display: flex;
    padding-left: 140px;
    gap: 30px;
    cursor: default;
`


export const StyledMe = styled.div`
    width: 50%;
    

    h2 {
        font-family: 'Ubuntu', sans-serif;
        font-size: 50px;
        font-weight: 700;
        color: #F5CF12;
        margin-bottom: 50px;
    }

    p {
        font-family: 'Ubuntu', sans-serif;
        font-size: 20px;
        color: #FFF;
        margin-top: 20px;
        width: 90%;
        line-height: 29px;
    }
`

export const StyledSkills = styled.div`
    width: 50%;

    h2 {
        font-family: 'Ubuntu', sans-serif;
        font-size: 50px;
        font-weight: 700;
        color: #F5CF12;
        margin-bottom: 15px;
    }   

    p {
        font-family: 'Ubuntu', sans-serif;
        font-size: 20px;
        color: #FFF;
        width: 79%;
    }
`

export const StyledSkillsList = styled.ul`
    width: 80%;
    display: flex;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    gap: 20px;
    
    

    .skill {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color : #FFF;
        background-color: rgba(245,40,145,0.5);
        border-radius: 5px;
        padding: 3px;


        font-family: 'Ubuntu', sans-serif;

        img{
            width: 100px;
            height: 100px;
            color: #FFF;
            
        }

        p {
            width: auto;
        }
    }
`
