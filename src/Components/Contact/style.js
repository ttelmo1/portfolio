import styled from "styled-components";

export const StyledContact = styled.div`
    width: 100%;
    height: 100vh;
    background: #000;

    cursor: default;

    .info-container{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 80px;
        gap: 30px;
    }
`


export const StyledMyLinks = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    

    h2 {
        font-family: 'Ubuntu', sans-serif;
        font-size: 40px;
        font-weight: 700;
        color: #F5CF12;
        margin-bottom: 50px;
        cursor: default;
    }
`

export const StyledLinksList = styled.ul`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .center{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        height: 50%;
    }
    

    .social {
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: flex-start;
        width: 400px;
        background-color: rgba(245,40,145,0.65);
        border-radius: 5px;
        

        img{
            width: 100px;
            height: 100px;
            color: #FFF;
            
        }

        a{
            font-family: 'Ubuntu', sans-serif;
            font-size: 20px;
            font-weight: 700;
            color: #fff;
            text-decoration: none;
            margin-left: 20px;
            border-bottom: 4px solid transparent;
            transition: border-color 0.25s;
        }

        a:hover{
            border-bottom: 4px solid #F5CF12;
        }
    }
`

export const StyledCity = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        font-family: 'Ubuntu', sans-serif;
        font-size: 40px;
        font-weight: 700;
        color: #F5CF12;
        margin-bottom: 50px;
        cursor: default;
    }

`