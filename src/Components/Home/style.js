import styled, { keyframes } from "styled-components";
import gif from "./gif-bom.gif"



export const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    background-image: url(${gif});
    background-repeat: no-repeat;
    background-size: cover;

    cursor: default;

    .main-container{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        margin-top: 65px;
        padding-left: 140px;
        gap: 30px;
    }
    
`
export const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;


    padding: 0 135px;
    position: absolute;
    top: 20px;

    cursor: default;
`   

export const StyledLogo = styled.div`
    
    font-family: 'Ubuntu', sans-serif;
    font-size: 37px;
    font-weight: 500;
    color: #FFF;

    :before {
    content: "<";
    font-size: 2rem;
    color: #F5CF12;
    font-weight: 700;
    }

    :after {
    content: "/>";
    font-size: 2rem;
    color: #F5CF12;
    font-weight: 700;
    }
`

export const StyledUl = styled.ul`
    font-family: 'Ubuntu', sans-serif;
    font-size: 25px;
    color: #FFF;

    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;

    gap: 20px;

    a{
        text-decoration: none;
        color: #FFF;
        border-bottom: 4px solid transparent;
        transition: border-color 0.25s;
    }

    a:hover{
        color: #FFF;
        border-bottom: 4px solid #F5CF12;
    }

    
`

export const StyledMain = styled.div`
    width: 100%;
    height: 80%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    margin-bottom: 20px;

    cursor: default;

    .hello{
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
`   

export const StyledImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow:0 0 0 5px rgb(255 255 255 / 30%);

    animation: profile_animate 8s ease-in-out infinite 1s;

    @keyframes profile_animate {
        0% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }

        50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
        }

        100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }
    };

`

export const StyledHello = styled.div`
    font-family: 'Ubuntu', sans-serif;
    font-size: 35px;
    color: #fff;

    p{
        font-size: 60px;
        font-weight: 700;
        color: #F5CF12;
    }
`
export const StyledQuote = styled.div`
    font-family: 'Ubuntu', sans-serif;
    font-size: 35px;
    color: #fff;

     p{
        font-size: 30px;
        font-weight: 700;
        color: #fff;

        :before {
            content: "<";
            font-size: 2rem;
            color: #F5CF12;
            font-weight: 700;
        }

        :after {
            content: "/>";
            font-size: 2rem;
            color: #F5CF12;
            font-weight: 700;
        }
    }
`

export const StyledProjects = styled.div`
    width: 100%;
    margin-left: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    h1{
        font-family: 'Ubuntu', sans-serif;
        font-size: 60px;
        font-weight: 700;
        color: #F5CF12;
        margin-bottom: 20px;
    }

    .carousel-container{
        width: 375px;

        img{
            width: 320px;
            height: 570px;
        }
    }
`



