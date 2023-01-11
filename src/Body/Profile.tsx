import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from '../Button';
import { Container, P1, P2, Box, Div1, Input1, P3 } from '../style/ProfileStyle';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser } from '../Redux/Reducer/userSlice';


const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  // const[user,setUser] = useState({});

  const UserData = async () => {
    // e.preventDefault();
    try {
      const response = await axios.get(`https://api.github.com/users/${input}`);

      response.data && navigate(`/profile`);
      // setUser(res.data)
      // console.log("Response is >>",response.data)

      dispatch(
        setActiveUser(response.data));

      toast.success('Successfully login', {
        autoClose: 1000,
      });

    } catch (error) {
      toast.error('Failed to login', {
        autoClose: 1000,
      });
    }
  }
  useEffect(() => {
    UserData();
  }, [])
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <>
      <Box>
        <Container>
          <P1>Github Profile</P1>
          <P2>Generate your Github Profile</P2>
          {/* <form onSubmit={UserData}> */}
          <Div1>
            <Input1 type="text" placeholder='Github Username' onChange={handleChange} />
            <Button onClick={UserData} color='orange'>
              <P3>Generate</P3>
            </Button>
          </Div1>
          {/* </form> */}
        </Container>
      </Box>
    </>
  )
}
export default Profile;