import React from 'react'
import {
  Wrapper, Container, DIV3, DIV4, DIV5, CIRCLE, Top1, Top2, P1, Img, Img1, P2, P3, P4, Name, P5, P6, P7, TextDiv,
  Main, Info, Box1, Box2, Box3, Box4, Bio, Para, P8, P10, Repository, Follower
} from '../style/HiremeStyle';
import person from '../images/person.png'
import backbtn from '../images/backbtn.png';
import { Button } from '../Button';
import {  userData } from './data';
import { info } from './info';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/Reducer/userSlice';

const Hiremepage = () => {

  const UserLists = useSelector(selectUser);
  console.log("UserLists is:-", UserLists);
  return (
    <>
      <Wrapper>
        <Container>
          <DIV3>
            <Top1>
              <Link to="/"><Img1 src={backbtn} alt="backbtn image" /></Link>
            </Top1>
            <Top2>
              <Button type='submit' color='orange'>
                <P1>Hire Me</P1>
              </Button>
            </Top2>
          </DIV3>
          <DIV4 >
            <CIRCLE>
              <Img src={UserLists.avatar_url} alt="person image" />
            </CIRCLE>
            <Name>
              <P2>{UserLists.name}</P2>
              <P3>@{UserLists.login}</P3>
            </Name>
            <Repository>
              {
            [...userData(UserLists.followers,UserLists.following,
              UserLists.public_repos)].map((user) => (
                  <Main key={user.id}>
                    <P4>{user.heading}</P4>
                    <Follower>
                      <P5>{user.sub}</P5>
                    </Follower>
                  </Main>
                ))}
            </Repository>
            <Info>
              <Box1>
                <TextDiv>
                  {info(UserLists.email,UserLists.location,UserLists.company,
                  UserLists.created_at,UserLists.twitter_username,
                  UserLists.repos_url).map((item) => {
                    return (
                      <Box3 key={item.id}>
                        <Box4>
                          <img src={`${item.icon}`} />  
                          <P8>
                            {item.name}
                          </P8>
                        </Box4>
                        <P10>
                          {item.info}
                        </P10>
                      </Box3>
                    );
                  })}
                </TextDiv>
              </Box1>
              <Box2>
                <DIV5>
                  <Bio>
                    <P6>Bio</P6>
                  </Bio>
                  <Para>
                    <P7>{UserLists.bio}</P7>
                  </Para>
                </DIV5>
              </Box2>
            </Info>
          </DIV4>
        </Container>
      </Wrapper>
    </>
  )
}

export default Hiremepage;