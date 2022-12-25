import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content space-between;
    align-items: center;

`

export const Column = styled.div`
    flex: 1;
`
export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFF;
`

export const Wrapper = styled.div`
    max-width: 340px;
`

export const TitleResgister = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px
`

export const SubtitleResgister = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px
`
export const Description = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-top: 25px;
    line-height: 25px
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 7px;
`
export const AlreadyHasAccountText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 25px
`
export const RedirectToLoginText = styled.a`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    margin: 0 3px;
    line-height: 25px;
    color: #23DD7A;
    text-decoration: none;
`