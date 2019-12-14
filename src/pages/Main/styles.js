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
