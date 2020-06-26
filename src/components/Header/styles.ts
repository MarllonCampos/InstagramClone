import styled from 'styled-components';
import Logo from '../../assets/InstaLogo.png';
import { Search } from '@styled-icons/boxicons-regular/Search';
import { Home } from '@styled-icons/octicons/Home';
import { LocationArrow } from '@styled-icons/fa-solid/LocationArrow';
import { Compass } from '@styled-icons/typicons/Compass';
import { Heart } from '@styled-icons/feather/Heart';



export const Container = styled.div`
    width:100%;
    height:100%;
    overflow-y:hidden;
`;

export const Nav = styled.div`
    height:54px;
    background-color:rgba(255,255,215,0.1);
    box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    padding:0 20px;
    display:flex;
    align-items: center;
    justify-content: space-around;

`;


export const InstaLogo = styled.div`
    background-image:url(${Logo}) ;
    width:102px;
    height:29px;
    margin-right:8px;
`;



export const SearchWrapper = styled.div`
    width:215px;
    height:28px;
    padding:7px;
    
    display:flex;
    align-items: center;
    
    justify-content: center;
    border: solid 1px rgba(219,219,219,1);
    border-radius: 6px;

`;



export const LogoSearch = styled(Search)`
    width:20px;
    height:20px;
    color:var(--gray);
    text-align:right;

`;


export const InputSearch = styled.input`
    display:flex;
    flex:1;
    font-size:12px;
    text-align: center;
    background-color:transparent;

`;



export const Icons = styled.div`
    height:34px;
    width:222px;
    padding: 2px 0;
    display:flex;
    align-items: center;
    justify-content: space-around;
    
    


`;



export const HomeIcon = styled(Home)`
    width:22px;
    height: 22px;
    color:var(--symbol);
    cursor:pointer;
    
    &:hover{
        color:black;
        cursor:pointer;
        border-radius:5px;
        
    }

`;



export const DirectIcon = styled(LocationArrow)`
    width:20px;
    height: 20px;
    color:var(--symbol);
    cursor:pointer;

    &:hover{
        color:black;
        cursor:pointer;
        border-radius:5px;
        
    }


`;



export const ExplorerIcon = styled(Compass)`
    width: 22px;
    height: 22px;
    color: var(--symbol);


    &:hover{
        color:black;
        cursor:pointer;
        border-radius:5px;
        
    }

`;



export const LoveIcon = styled(Heart)`
    width: 22px;
    height: 22px;
    color: var(--symbol);


    &:hover{
        color:black;
        cursor:pointer;
        border-radius:5px;
        
    }


`;



export const RoundIcon = styled.div`
    width:24px;
    height:22px;
    border-radius:50%;
    background-color: var(--symbol);
    
    &:hover{
        background-color:black;
        cursor:pointer;
        
    }
    


`;



