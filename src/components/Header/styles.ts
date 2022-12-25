import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    aligin-items: center;
`
export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FindInputContainer = styled.div`
    width: 175px;
    height: 30px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display: flex;
`
export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 18px;
    line-height: 25px;
    color: #FFFF;
    margin-right: 12px;
    text-decoration: none;
`
export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #FFFF;
    margin-right: 12px;
    text-decoration: none;
`
export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #FFFF
`
export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFFF
`