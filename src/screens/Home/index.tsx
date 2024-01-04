import Head from '@components/Head';
import * as S from './styles';
import Input from '@components/Input';
import React, { useState } from 'react';
import Piu from '@components/Piu';

const Home = () => {

  const [pius, setPius] = useState([]); // Novo estado para armazenar os pius
  const [piuText, setPiuText] = useState(''); // Novo estado para armazenar o texto do Piu

  const handleSendPiu = () => {
    if (piuText.trim() !== '') {
      // Adiciona um novo Piu ao estado
      setPius((prevPius) => [
        {
          name: 'Patolino', // Substitua pelo nome do usuário real
          user_name: '@patolindo', // Substitua pelo nome de usuário real
          photo: 'https://i.pinimg.com/originals/9a/b2/40/9ab2409771e7180dd275ec36fca9d370.jpg', // Substitua pela URL da imagem do usuário
          text: piuText,
          compartilhar: 0,
          comentar: 0,
          curtir: 0,
        },
        ...prevPius,
      ]);

      // Limpa o texto do Piu após enviar
      setPiuText('');
    }
  };


  return(
    <S.Wrapper>
      <Head/>
      <S.ContainerFeed>
        <Input text={'Ouvir um piu...'} icon={require('@assets/ci_search.png')}/>
        <S.ContainerNovoPiu>
          <S.InputPiar 
          placeholder='Quero dar um piu...'
          value={piuText}
          onChangeText={(text) => setPiuText(text)}/>
          <S.Container>
          <S.ContainerIcons>
            <S.Icons source= {require('@assets/Image_02.png')}/>
            <S.Icons source= {require('@assets/Video.png')}/>
            <S.Icons source= {require('@assets/Smile.png')}/>
            <S.Icons source= {require('@assets/Tag.png')}/>
            <S.Icons source= {require('@assets/Frame.png')}/>
          </S.ContainerIcons>
          <S.SendButton color="white" title="send" onPress={handleSendPiu}/>
          </S.Container>
        </S.ContainerNovoPiu>
        {pius.map((piu, index) => (
          <Piu
            key={index}
            name={piu.name}
            user_name={piu.user_name}
            photo={piu.photo}
            text={piu.text}
            compartilhar={piu.compartilhar}
            comentar={piu.comentar}
            curtir={piu.curtir}
          />
        ))}
        <Piu name={'Senhor patu'} user_name={'@patodavida'} photo={'https://i.pinimg.com/originals/9a/b2/40/9ab2409771e7180dd275ec36fca9d370.jpg'} text={'quack quack quack'} compartilhar={0} comentar={0} curtir={0}/>
        <Piu name={'Dino'} user_name={'@RamonDino'} photo={'https://png.pngtree.com/png-vector/20231224/ourlarge/pngtree-astro-dino-clip-art-illustration-of-a-dinosaur-exploring-the-cosmos-png-image_11380555.png'}  text={'BIRRRRR'} compartilhar={99} comentar={1} curtir={100}/>
        <Piu name={'Senhor nOEL'} user_name={'@jingleBell'} photo={'http://2.bp.blogspot.com/-tGPgMO4rTUU/ULbn0TRdB2I/AAAAAAAAJEs/wlcD21HYXN0/s1600/png+09.png'} text={'Queria te dar um presente de Natal, mas não sei como embrulhar meu coração'} compartilhar={0} comentar={0} curtir={1}/>
        <Piu name={'Senhor patu'} user_name={'@patodavida'} photo={'https://i.pinimg.com/originals/9a/b2/40/9ab2409771e7180dd275ec36fca9d370.jpg'} text={'de boa na lagoa'} compartilhar={9} comentar={0} curtir={0}/>
        <Piu name={'T O M A T O'} user_name={'@ketchup'} photo={'data:image/jpeg;base64,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'} text={'o que o tomate foi fazer no banco?'} compartilhar={0} comentar={0} curtir={0}/>
        <Piu name={'Dino'} user_name={'@RamonDino'} photo={'https://png.pngtree.com/png-vector/20231224/ourlarge/pngtree-astro-dino-clip-art-illustration-of-a-dinosaur-exploring-the-cosmos-png-image_11380555.png'} text={'wral WRAL wral WRAL'} compartilhar={0} comentar={7} curtir={2}/>
        <Piu name={'Senhor patu'} user_name={'@patodavida'} photo={'https://i.pinimg.com/originals/9a/b2/40/9ab2409771e7180dd275ec36fca9d370.jpg'} text={'o que o pato perguntou para o outro pato?'} compartilhar={1} comentar={81} curtir={0}/>
      </S.ContainerFeed>
    </S.Wrapper>
  );
};


export default Home;
