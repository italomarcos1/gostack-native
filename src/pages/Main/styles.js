import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1; /* ocupa todo o espaço possível da tela */
  padding: 30px; /* distancia das laterais (up, bottom , l & r) */
`;

export const Form = styled.View`
    flex-direction: row; /* alinha input e botão em linha */
    padding-bottom: 20px; /* distancia os elementos que vem embaixo*/
    border-bottom-width: 1px; /* borda de baixo */
    border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
    flex: 1; /* ocupa toda a largura possível tirando a largura do botão */
    height: 40px;
    background: #eee;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center; /* alinha o conteúdo (ícone) sempre ao total centro do botão*/
    background: #e6b32a;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px; /* padding nas laterais */

`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px; /* não temos porcentagem, então isso equivale ao border-radius 50% */
    background: #eee; /* cor de fundo enquanto a imagem não carrega */
`;

export const Name = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 4px;
    text-align: center; /* caso o texto tenha mais de 1 linha, align-items não funfa */
`;

export const Bio = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 13px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
    text-align: center;
`;

export const ProfileButton = styled(RectButton)`
    margin-top: 10px;
    align-self: stretch; /* alinha pra ocupar a largura total do componente. */
    border-radius: 4px;
    background: #e6b32a;
    justify-content: center;
    align-items: center;
    height: 36px;
`;

export const ProfileButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #FFF;
    text-transform: uppercase;
`;
